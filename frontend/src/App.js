import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'


function App() {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    const fetchThreads = async () => {
      const threads = await axios.get('/api/threads')
      setThreads(threads.data)
    }
    fetchThreads()
  }, [])


  const listOfCategories = ['sota', 'autot', 'ruoka', 'tietsikat']

  const CategoryList = ({ list }) => {

    return (
      <div className='categoryList'>
        {list.map(category => (
          <div key={category}>{category}</div>
        ))}
      </div>
    )
  }

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

  return (
    <div className='container'>

      <div className='itemA'>
        <CategoryList list={listOfCategories} />
      </div>
      <div className='itemB'>
        <ThreadList threads={threads} />
      </div>
    </div>
  );
}

export default App;
