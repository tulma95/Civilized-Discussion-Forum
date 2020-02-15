import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Login from '../containers/Login'

const CategoryList = props => {
  console.log(props.user)
  return (
    <div className='catalog'>
      {props.user ? <p>Welcome {props.user.username}</p> : <Login />}
      {props.list.map(category => (
        <Link key={category} data-cy={category} to={`/${category}`}>
          {category} <br />
        </Link>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const connectedCategoryList = connect(mapStateToProps)(CategoryList)

export default connectedCategoryList
