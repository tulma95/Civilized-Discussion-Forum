import React from 'react'
import NewThreadForm from './NewThreadForm'
import Thread from './Thread'


const ThreadList = ({ category, setCategory, threads, setThreads }) => {
  setCategory(category)

  const mapThreads = (thread) => {
    const threadWith3Post = { ...thread, posts: thread.posts.slice(-3) }
    return <Thread key={thread.id} thread={threadWith3Post} />
  }

  return (
    <div>
      <NewThreadForm
        setThreads={setThreads}
        allThreads={threads}
        category={category} />

      {threads.map(mapThreads)}
    </div>
  )
}

export default ThreadList