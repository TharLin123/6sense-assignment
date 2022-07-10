import React from 'react'

const SidebarLogo = ({img, isActive, onClickHandler,id}) => {
  return (
    <div className={`logo-box app-flex ${isActive}`} onClick={onClickHandler} id={id}>
        <img src={img} alt='teams'/>
    </div>
  )
}

export default SidebarLogo