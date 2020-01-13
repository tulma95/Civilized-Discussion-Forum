import React from 'react'

const Post = ({ post }) => {
  const time = new Date(post.createdAt).toLocaleString()

  return (
    <div className='post' key={post.id}>
      <div className='info'>
        <div className='id'>{post.id} {time}</div>
      </div>
      <img src={post.imageUrl} alt='' />
      {post.content}
    </div>
  )
}

export default Post