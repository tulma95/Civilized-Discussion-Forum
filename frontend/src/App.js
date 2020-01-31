import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './App.css'
import ThreadList from './components/containers/ThreadList'
import CategoryList from './components/presentationals/CategoryList'
import { Route, Switch } from 'react-router-dom'
import SingleThread from './components/presentationals/SingleThread'
import Header from './components/presentationals/Header'
import homeView from './components/presentationals/homeView'
import { addThread } from './reducers/threadReducer'

const listOfCategories = ['videogames', 'politics', 'music']

const App = props => {
  const getThread = ({ params }) => {
    const categoryAndIdMatch = ({ category, id }) => {
      return thread => {
        return thread.id === id * 1 && category === thread.category
      }
    }

    const thread = props.threads.find(categoryAndIdMatch(params))
    return thread
  }

  return (
    <div className='container'>
      <Header />
      <CategoryList list={listOfCategories} />

      <div className='main'>
        <Switch>
          <Route
            exact
            path='/:category'
            render={({ match }) => (
              <ThreadList
                category={match.params.category}
                threads={props.threads}
                setThreads={props.addThread}
              />
            )}
          />

          <Route
            exact
            path='/:category/:id'
            render={({ match }) => (
              <SingleThread
                thread={getThread(match)}
                allThreads={props.threads}
                setThreads={props.addThread}
              />
            )}
          />
          <Route component={homeView} />
        </Switch>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    threads: state.threads
  }
}

const mapDispatchToProps = {
  addThread
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
