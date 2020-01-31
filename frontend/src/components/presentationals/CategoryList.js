import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({ list }) => {
  return (
    <div className='catalog'>
      {list.map(category => (
        <div>
          <Link data-cy={category} key={category} to={`/${category}`}>
            {category}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CategoryList
