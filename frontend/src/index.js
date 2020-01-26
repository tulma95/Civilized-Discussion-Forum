import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import threadReducer from './reducers/threadReducer'

const reducer = combineReducers({
  threads: threadReducer
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

