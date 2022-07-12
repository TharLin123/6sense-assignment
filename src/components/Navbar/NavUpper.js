import React from 'react'
import logos from '../../constants/logos'

const NavUpper = ({fetchState}) => {
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
                {fetchState.loading ? 0 : fetchState.data.current_user.notifications_count}
              </div>
            </div>
            <span className='secondary-fontstyle'> Hello, {fetchState.loading ? '' : fetchState.data.current_user.name}</span>
            <div>
            <div className='image-container'>
            {fetchState.loading ? '' : <img src={fetchState.data.current_user.avatar} alt='mail'/>}
            </div>
            </div>
              <img src={logos.caret} alt='mail'/>
          </div>
        </div>
      </div>
  )
}

export default NavUpper