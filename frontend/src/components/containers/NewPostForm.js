import React, { useState } from 'react'
import ContentTextArea from './ContentTextArea'
import FileUpload from './FileUpload'
import postService from '../../services/postService'

const NewPostForm = ({ thread, setThread }) => {
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')

  const handleSubmit = async event => {
    if (!event.detail || event.detail === 1) {
      const creator = 1
      const newPost = await postService.createNewPost(
        thread.id,
        creator,
        file,
        content
      )
      const updatedThread = { ...thread, posts: [...thread.posts, newPost] }
      setThread(updatedThread)
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
        <ContentTextArea content={content} setContent={setContent} />
        <FileUpload setFile={setFile} />
        <button
          className='submitButton'
          data-cy='postSubmit'
          onClick={handleSubmit}
          type='submit'
        >
          Submit new post
        </button>
      </form>
    </div>
  )
}

export default NewPostForm
