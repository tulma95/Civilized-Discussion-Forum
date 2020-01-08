import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import ThreadList from './components/ThreadList'
import CategoryList from './components/CategoryList'
import {
  Route,
  Link
} from "react-router-dom";

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

  const threadCategoryFilterer = (category) => {
    return (item) => item.category === category
  }

  const threadsByCategory = (threads, category) => {
    return threads.filter(threadCategoryFilterer(category))
  }

  return (
    <div className='container'>
      <div className='itemA'>
        <CategoryList list={listOfCategories} />
      </div>
      <div className='itemB'>

        <Route exact path='/'>
          <ThreadList threads={threads} />
        </Route>

        <Route exact path='/:category' render={({ match }) =>
          <ThreadList threads={threadsByCategory(threads, match.params.category)} />
        } />
      </div>
    </div>
  );
}

export default App;
