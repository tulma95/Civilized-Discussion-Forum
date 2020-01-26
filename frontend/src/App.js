import React, { useState, useEffect } from 'react';
import './App.css';
import ThreadList from './components/ThreadList'
import CategoryList from './components/CategoryList'
import { Route, Switch } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import threadService from './services/threadService'
import SingleThread from './components/SingleThread'
import Header from './components/Header'


const listOfCategories = ['videogames', 'politics', 'music']

function App() {
  const [threads, setThreads] = useState([])
  const [category, setCategory] = useState()

  useEffect(() => {
    const fetchThreads = async () => {
      if (category) {
        const threads = await threadService.getThreadByCategory(category)
        setThreads(threads)
      } else {
        const threads = await threadService.getAllThreads()
        setThreads(threads)
      }
    }
    fetchThreads()
  }, [category])

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
      <Header />
      <CategoryList list={listOfCategories} />
      <div className='main'>
        <Switch>
          <Route exact path='/:category'
            render={({ match }) =>
              <ThreadList category={match.params.category}
                setCategory={setCategory}
                threads={threads}
                setThreads={setThreads}
              />
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
