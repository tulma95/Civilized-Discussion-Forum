import React from 'react'
import Post from './Post'
import { Link } from 'react-router-dom'


const Thread = ({ thread }) => {
  return (
    <div key={thread.id} className='thread'>

      <div className='threadHeader'>
        <Link to={`/${thread.category}/${thread.id}`}>
          <h1 className='threadTitle'>
            {thread.title}
          </h1>
        </Link>
      </div>

      <div className='threadContent'>
        <div className='thredContentImage'>
          {thread.imageUrl && <img src={thread.imageUrl} alt='' />}
        </div>
        <div className='theadContentText'>
          {thread.content}
        </div>
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