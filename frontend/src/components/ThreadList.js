import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'
import NewThreadForm from './NewThreadForm'

const ThreadList = ({ setThreads, category, allThreads }) => {

  const filterList = (threads, category) => {
    return threads.filter(e => e.category === category)
  }

  const filteredThreads = filterList(allThreads, category)

  const mapThread = (thread) => {

    return (
      <div key={thread.id} className='thread'>
        <img src={thread.imageUrl} />
        <Link to={`/${thread.category}/${thread.id}`}>
          <h1 className='threadTitle'>
            {thread.title}
          </h1>
        </Link>

        {thread.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    )
  }

  return (
    <div>
      <NewThreadForm
        setThreads={setThreads}
        allThreads={allThreads}
        category={category} />

      {filteredThreads.map(mapThread)}
    </div>
  )
}

export default ThreadList