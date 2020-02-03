import React from 'react'
import './App.css'
import ThreadList from './components/containers/ThreadList'
import CategoryList from './components/presentationals/CategoryList'
import { Route, Switch } from 'react-router-dom'
import SingleThread from './components/presentationals/SingleThread'
import Header from './components/presentationals/Header'
import HomeView from './components/presentationals/HomeView'

const listOfCategories = ['videogames', 'politics', 'music']

const App = () => {
  return (
    <div className='container'>
      <Header />
      <CategoryList list={listOfCategories} />

      <div className='main'>
        <Switch>
          <Route exact path='/:category' component={ThreadList} />
          <Route exact path='/:category/:id' component={SingleThread} />
          <Route component={HomeView} />
        </Switch>
      </div>
    </div>
  )
}

export default App
