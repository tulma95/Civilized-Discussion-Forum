import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'

const Thread = ({ thread }) => {
  if (thread === undefined) {
    return <div>loading...</div>
  }
  return (
    <div key={thread.id} className='thread'>
      <div className='threadHeader'>
        <h1 className='threadTitle'>
          <Link data-cy={thread.title} to={`/${thread.category}/${thread.id}`}>
            {thread.title}
          </Link>
        </h1>
      </div>

      <div className='threadContent'>
        <div className='thredContentImage'>
          {thread.imageUrl && <img src={thread.imageUrl} alt='' />}
        </div>
        <div className='theadContentText'>{thread.content}</div>
      </div>

      <div className='posts'>
        {thread.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Thread
