import './Navbar.css'
import React from 'react'
import NavLower from './NavLower'
import NavUpper from './NavUpper'

const Navbar = ({fetchState, setFilterState}) => {
  return (
    <div className='navbar'>
      <NavUpper fetchState={fetchState}/>
      <NavLower setFilter={setFilterState}/>
    </div>
  )
}

export default Navbar