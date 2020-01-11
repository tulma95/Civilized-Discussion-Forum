import React, { useState } from 'react'
import threadService from '../services/threadService'
import FileUpload from './FileUpload'

const NewThreadForm = ({ setThreads, allThreads, category }) => {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const creator = 1
    const newThread = await threadService.createNewThread(category, title, creator, file)
    const data = { ...newThread.data, posts: [] }
    setThreads([...allThreads, data])
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          Title
          <input onChange={handleTitleChange} value={title} placeholder='title' type="text" />
        </div>
        <button type="submit">Create thread</button>
      </form>
      <FileUpload setFile={setFile} />
    </div>
  )
}

export default NewThreadForm