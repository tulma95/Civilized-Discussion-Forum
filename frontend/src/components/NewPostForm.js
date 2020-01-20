import React, { useState } from 'react';
import ContentTextArea from './ContentTextArea'
import FileUpload from './FileUpload'
import postService from '../services/postService'

const NewPostForm = ({ allThreads, setThreads, threadId }) => {
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')

  const handleSubmit = async (event) => {
    if (!event.detail || event.detail === 1) {
      const creator = 1
      const newPost = await postService.createNewPost(threadId, creator, file, content)
      const updatedThreads = allThreads.map(thread => {
        if (thread.id === threadId) {
          const newThread = { ...thread, posts: [...thread.posts, newPost] }
          return newThread
        }
        return thread
      })
      setThreads(updatedThreads)
      setContent('')
    }
  }

  return (
    <div>
      <form onSubmit={e => { e.preventDefault() }}>
        <ContentTextArea content={content} setContent={setContent} />
        <FileUpload setFile={setFile} />
        <button onClick={handleSubmit} type="submit">Submit new post</button>
      </form>
    </div>
  );
};

export default NewPostForm;