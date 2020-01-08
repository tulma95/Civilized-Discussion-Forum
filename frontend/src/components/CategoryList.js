import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({ list }) => {
  return (
    <div className='categoryList'>
      {list.map(category => (
        <Link key={category} to={`/${category}`}>
          <div>{category}</div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryList