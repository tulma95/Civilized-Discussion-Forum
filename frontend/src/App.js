import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import ThreadList from './components/ThreadList'
import CategoryList from './components/CategoryList'

const listOfCategories = ['sota', 'autot', 'ruoka', 'tietsikat']

function App() {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    const fetchThreads = async () => {
      const threads = await axios.get('/api/threads')
      setThreads(threads.data)
    }
    fetchThreads()
  }, [])


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
