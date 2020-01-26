import React from 'react'
import NewThreadForm from './NewThreadForm'
import Thread from './Thread'
import './threadList.css'


const ThreadList = ({ category, setCategory, threads, setThreads }) => {
  setCategory(category)

  const mapThreads = (thread) => {
    const threadWith3Post = { ...thread, posts: thread.posts.slice(-3) }
    return <Thread key={thread.id} thread={threadWith3Post} />
  }

  return (
    <div className='threadList'>
      <h1 className='categoryHeader'>{category}</h1>
      <div className='createThreadForm'>
        <NewThreadForm
          setThreads={setThreads}
          allThreads={threads}
          category={category} />
      </div>
      {threads.map(mapThreads)}
    </div>
  )
}

export default ThreadList