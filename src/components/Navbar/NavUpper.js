import React from 'react'
import logos from '../../constants/logos'

const NavUpper = () => {
  return (
    <div className='nav-upper'>
        <div className='nav-upperleft app-flex'>
          <span>NARWHAL</span>
        </div>
        <div className='nav-upperright app-flex'>
          <div>
            <span>Teams</span>
          </div>
          
          <div className='nav-upperright-right app-flex'>
            <div className='mail-icon'>
              <img src={logos.mail} alt='mail'/>
              <div className='mail-badge app-flex'>
                3
              </div>
            </div>
            <span className='secondary-fontstyle'>Hello, John</span>
            <div>
              <img src={logos.john} alt='mail'/>
            </div>
            <img src={logos.caret} alt='mail'/>
          </div>
        </div>
      </div>
  )
}

export default NavUpper