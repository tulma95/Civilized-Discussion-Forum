import React from 'react'

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
      <img
        src={require('../../assets/images/logo2.png')}
        width='150px'
        alt='Logo by uberballo'
      />
      <div className='logoHeader'>Civilized Discussion Forum</div>
    </div>
  )
}

export default Header
