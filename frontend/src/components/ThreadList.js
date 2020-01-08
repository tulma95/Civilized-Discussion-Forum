import React from 'react'

const ThreadList = ({ threads }) => {
  return (
    <div>
      {threads.map(thread => (
        <div key={thread.id} className='thread'>
          <h1>{thread.title}</h1>

          {thread.posts.map(post => {
            const time = new Date(post.createdAt).toLocaleString()
            return (
              <div className='post' key={post.id}>
                <div className='info'>
                  <div className='id'>{post.id} {time}</div>
                </div>
                {post.content}
              </div>)
          })}
        </div>
      ))}
    </div>
  )
}

export default ThreadList