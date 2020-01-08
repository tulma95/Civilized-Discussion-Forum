import React from 'react'


const CategoryList = ({ list }) => {
  return (
    <div className='categoryList'>
      {list.map(category => (
        <div key={category}>{category}</div>
      ))}
    </div>
  )
}

export default CategoryList