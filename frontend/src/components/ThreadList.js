import React from 'react'
import Post from './Post'

const ThreadList = ({ threads }) => {
  return (
    <div>
      {threads.map(thread => (
        <div key={thread.id} className='thread'>
          <h1 className='threadTitle'>{thread.title}</h1>
          {thread.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default ThreadList