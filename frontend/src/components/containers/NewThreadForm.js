import React, { useState } from 'react'
import threadService from '../../services/threadService'
import FileUpload from './FileUpload'
import ContentTextArea from './ContentTextArea'
import './newThreadForm.css'

const NewThreadForm = ({ setThreads, allThreads, category }) => {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = async (event) => {
    if (!event.detail || event.detail === 1) {
      const creator = 1
      const newThread = await threadService.createNewThread(category, title, creator, file, content)
      const data = { ...newThread.data, posts: [] }
      setThreads([data, ...allThreads])
      setTitle('')
      setContent('')
    }
  }

  return (
    <div className='threadFormContainer'>
      <form className='threadForm' onSubmit={e => { e.preventDefault() }} >
        <div>
          <input className='titleInput' onChange={handleTitleChange} value={title} placeholder='title' type="text" />
        </div>
        <ContentTextArea content={content} setContent={setContent} />
        <FileUpload setFile={setFile} />
        <button className='submitButton' type="submit" onClick={handleSubmit}>Create thread</button>
      </form>
    </div>
  )
}

export default NewThreadForm