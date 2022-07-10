import './Navbar.css'
import React from 'react'
import NavLower from './NavLower'
import NavUpper from './NavUpper'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavUpper/>
      <NavLower/>
    </div>
  )
}

export default Navbar