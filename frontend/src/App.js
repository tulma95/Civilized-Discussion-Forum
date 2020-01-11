import React, { useState, useEffect } from 'react';
import './App.css';
import ThreadList from './components/ThreadList'
import CategoryList from './components/CategoryList'
import threadService from './services/threadService'
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';


const listOfCategories = ['videogames', 'politics', 'music']

function App() {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    const fetchThreads = async () => {
      const threads = await threadService.getAllThreads()
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
        <Switch>
          <Route exact path='/:category' render={({ match }) =>
            <ThreadList category={match.params.category}
              setThreads={setThreads}
              allThreads={threads} />
          } />
        </Switch>

      </div>
    </div>
  );
}

export default App;
