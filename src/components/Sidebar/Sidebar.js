import React, {useState} from 'react'
import './Sidebar.css'
import logos from '../../constants/logos'
import SidebarLogo from './SidebarLogo'

const navBarInitialState = {
  white: '',
  campaign: '',
  teams: 'active',
  leads: '',
  reports: '',
  help: ''
}

const Sidebar = () => {

  const [ navBarState, setState ] = useState(navBarInitialState); 

  const navBarToggleActive = (e) => {
    setState(() => {
      return {
        white: '',
        campaign: '',
        teams: '',
        leads: '',
        reports: '',
        help: '',
        [e.target.id] : 'active'
      }
    })
  }

  return (
    <div className='sidebar app-flex-col'>
      <div>
        <SidebarLogo img={logos.white} onClickHandler={navBarToggleActive} id='white' isActive={navBarState.white}/>
        <SidebarLogo img={logos.campaign} onClickHandler={navBarToggleActive} id='campaign' isActive={navBarState.campaign}/>
        <SidebarLogo img={logos.teams} onClickHandler={navBarToggleActive} id='teams' isActive={navBarState.teams}/>
        <SidebarLogo img={logos.leads} onClickHandler={navBarToggleActive} id='leads' isActive={navBarState.leads}/>
        <SidebarLogo img={logos.reports} onClickHandler={navBarToggleActive} id='reports' isActive={navBarState.reports}/>
      </div>
      <SidebarLogo img={logos.help} onClickHandler={navBarToggleActive} id='help' isActive={navBarState.help}/>
    </div>
  )
}

export default Sidebar