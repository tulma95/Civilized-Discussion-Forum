import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({ list }) => {
  return (
    <div className='catalog'>
      {list.map(category => (
        <Link key={category} data-cy={category} to={`/${category}`}>
          {category} <br />
        </Link>
      ))}
    </div>
  )
}

export default CategoryList
