import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        alignItems: 'center'
      }}
      className='header'
    >
      <Link style={{ width: '150px', height: '150px' }} to='/'>
        <img
          src={require('../../assets/images/logo2.png')}
          width='150px'
          alt='Logo by uberballo'
        />
      </Link>

      <div className='logoHeader'>Civilized Discussion Forum</div>
    </div>
  )
}

export default Header
