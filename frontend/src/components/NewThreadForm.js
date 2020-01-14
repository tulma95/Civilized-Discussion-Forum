import React, { useState } from 'react'
import threadService from '../services/threadService'
import FileUpload from './FileUpload'
import ContentTextArea from './ContentTextArea'

const NewThreadForm = ({ setThreads, allThreads, category }) => {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const creator = 1
    const newThread = await threadService.createNewThread(category, title, creator, file, content)
    const data = { ...newThread.data, posts: [] }
    setThreads([data, ...allThreads])
    setTitle('')
    setContent('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          Title
          <input onChange={handleTitleChange} value={title} placeholder='title' type="text" />
        </div>
        <FileUpload setFile={setFile} />
        <ContentTextArea content={content} setContent={setContent} />
        <button type="submit">Create thread</button>
      </form>
    </div>
  )
}

export default NewThreadForm