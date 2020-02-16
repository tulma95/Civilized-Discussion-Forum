import React from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { logInUser } from './reducers/userReducer'
import ThreadList from './components/containers/ThreadList'
import CategoryList from './components/presentationals/CategoryList'
import { Route, Switch } from 'react-router-dom'
import SingleThread from './components/containers/SingleThread'
import Header from './components/presentationals/Header'
import homeView from './components/presentationals/homeView'

const listOfCategories = ['videogames', 'politics', 'music']

const App = () => {
  const user = window.localStorage.getItem('loggedUser')
  const dispatch = useDispatch()
  if (user) dispatch(logInUser(JSON.parse(user)))

  return (
    <div className='container'>
      <Header />
      <CategoryList list={listOfCategories} />

      <div className='main'>
        <Switch>
          <Route exact path='/:category' component={ThreadList} />
          <Route exact path='/:category/:id' component={SingleThread} />
          <Route component={homeView} />
        </Switch>
      </div>
    </div>
  )
}

export default App
