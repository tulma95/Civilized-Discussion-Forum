import React from 'react'

const Post = ({ post }) => {
  const time = new Date(post.createdAt).toLocaleString()

  return (
    <div className='post' key={post.id}>
      <div className='postInfo'>
        {post.id} {time}
      </div>
      {post.imageUrl && (
        <img src={post.imageUrl} style={{ float: 'left' }} alt='' />
      )}
      {post.content}
    </div>
  )
}

export default Post
