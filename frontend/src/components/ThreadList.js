import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'

const ThreadList = ({ threads }) => {
  return (
    <div>
      {threads.map(thread => (
        <div key={thread.id} className='thread'>
          <Link to={`/${thread.category}/${thread.id}`}>
            <h1 className='threadTitle'>{thread.title}</h1>
          </Link>
          {thread.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default ThreadList