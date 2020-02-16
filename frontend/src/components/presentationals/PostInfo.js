import React from 'react'

const PostInfo = ({ id, time }) => {
  return (
    <div className='postInfo'>
      {id} {time}
    </div>
  )
}
export default PostInfo
