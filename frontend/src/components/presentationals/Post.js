import React from 'react'
import { useSelector } from 'react-redux'
import PostInfo from './PostInfo'

const Post = ({ post }) => {
  const time = new Date(post.createdAt).toLocaleString()
  const user = useSelector(state => state).user
  console.log(user)

  return (
    <div className='post' key={post.id}>
      <PostInfo time={time} id={post.id} />
      {post.imageUrl && (
        <img src={post.imageUrl} style={{ float: 'left' }} alt='' />
      )}
      {post.content}
    </div>
  )
}

export default Post
