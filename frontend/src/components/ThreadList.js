import React from 'react'
import NewThreadForm from './NewThreadForm'
import Thread from './Thread'

const ThreadList = ({ setThreads, category, allThreads }) => {

  const filterList = (threads, category) => {
    return threads.filter(e => e.category === category)
  }

  const sortListByUpdateDate = (e1, e2) => {
    return e1.updatedAt > e2.updatedAt ? -1 : 1
  }

  const filteredThreads = filterList(allThreads, category)
    .sort(sortListByUpdateDate)

  const mapThreads = (thread) => {
    return <Thread key={thread.id} thread={thread} />
  }

  return (
    <div>
      <NewThreadForm
        setThreads={setThreads}
        allThreads={allThreads}
        category={category} />

      {filteredThreads.map(mapThreads)}
    </div>
  )
}

export default ThreadList