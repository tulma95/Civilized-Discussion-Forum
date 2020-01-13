import React, { useState, useEffect } from 'react';
import './App.css';
import ThreadList from './components/ThreadList'
import CategoryList from './components/CategoryList'
import threadService from './services/threadService'
import SingleThread from './components/SingleThread'
import { Route, Switch } from 'react-router-dom';
import FileUpload from './components/FileUpload';


const listOfCategories = ['videogames', 'politics', 'music']

function App() {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    const fetchThreads = async () => {
      const threads = await threadService.getAllThreads()
      setThreads(threads)
    }
    fetchThreads()
  }, [])

  const getThread = ({ params }) => {
    const categoryAndIdMatch = ({ category, id }) => {
      return (thread) => {
        return thread.id === id * 1 && category === thread.category
      }
    }

    const thread = threads.find(categoryAndIdMatch(params))
    return thread
  }

  return (
    <div className='container'>
      <div className='itemA'>
        <CategoryList list={listOfCategories} />
      </div>
      <div className='itemB'>
        <Switch>
          <Route exact path='/:category'
            render={({ match }) =>
              <ThreadList category={match.params.category}
                setThreads={setThreads}
                allThreads={threads} />
            } />

          <Route exact path='/:category/:id'
            render={({ match }) =>
              <SingleThread thread={getThread(match)}
                allThreads={threads}
                setThreads={setThreads} />
            } />
          <Route component={FileUpload} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
