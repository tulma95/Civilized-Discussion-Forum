import React, { useState } from 'react'
import threadService from '../../services/threadService'
import FileUpload from './FileUpload'
import { useParams } from 'react-router-dom'
import ContentTextArea from './ContentTextArea'
import { addThread } from '../../reducers/threadReducer'
import './newThreadForm.css'

const NewThreadForm = ({ dispatch }) => {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState('')
  const [content, setContent] = useState('')
  const { category } = useParams()
  const handleTitleChange = event => {
    setTitle(event.target.value)
  }

  const handleSubmit = async event => {
    if (!event.detail || event.detail === 1) {
      const creator = 1
      const newThread = await threadService.createNewThread(
        category,
        title,
        creator,
        file,
        content
      )
      const data = { ...newThread.data, posts: [] }
      dispatch(addThread(data))
      setTitle('')
      setContent('')
    }
  }

  return (
    <div className='threadFormContainer'>
      <form
        className='threadForm'
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <div>
          <input
            className='titleInput'
            onChange={handleTitleChange}
            value={title}
            placeholder='title'
            type='text'
            data-cy='title'
          />
        </div>
        <ContentTextArea content={content} setContent={setContent} />
        <FileUpload setFile={setFile} />
        <button
          data-cy='threadSubmit'
          className='submitButton'
          type='submit'
          onClick={handleSubmit}
        >
          Create thread
        </button>
      </form>
    </div>
  )
}

export default NewThreadForm
