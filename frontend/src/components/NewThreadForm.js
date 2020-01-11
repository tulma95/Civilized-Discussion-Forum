import React, { useState, useEffect } from 'react'
import threadService from '../services/threadService'


const NewThreadForm = ({ setThreads, allThreads, category }) => {
  const [title, setTitle] = useState('')


  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const creator = 1
    const newThread = await threadService.createNewThread(category, title, creator)
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
    </div>
  )
}

export default NewThreadForm