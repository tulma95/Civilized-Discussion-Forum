import React from 'react'
import { Link } from 'react-router-dom'
import UserHandler from '../containers/UserHandler'

const CategoryList = ({ list }) => {
  return (
    <div className='catalog'>
      <UserHandler />
      {list.map(category => (
        <Link key={category} data-cy={category} to={`/${category}`}>
          {category} <br />
        </Link>
      ))}
    </div>
  )
}

export default CategoryList
