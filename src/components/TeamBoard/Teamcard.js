import React from 'react'
import './Teamcard.css'
import Star from './Star'
import logos from '../../constants/logos'

const Teamcard = ({team}) => {

  const backgroundColor = team.is_archived ? '#EBEEF2' : '#FFFFFF';
  const starColor = team.is_favorited  ?  '#F8CE43' : '#E4E7EC'

  return (
    <div className='teamcard' style={{ background: backgroundColor}}>
      <div className='teamcard-header app-flex'> 
        <div className='image-container'>
          <img src={team.image} alt='team-imge'/>  
        </div>
        <div className='teamcard-text flex-col'>
          <span>{team.name}</span>
          <span>{team.created_at ? `Created on ${team.created_at}` :  'Unknown Date'}</span>  
        </div>
        { team.is_archived ? '' : <Star color={starColor}/>}
      </div>
      <div className='teamcard-body app-flex'>
        <div className='text'>
          {team.description}
        </div>
      </div>
      <div className='teamcard-footer app-flex'>
        <img src={logos.conversation} alt='conversation'/>
        <span> {team.campaigns_count} Campaigns </span>
        <img src={logos.smallLead} alt='small-lead'/>
        <span>{team.leads_count} Leads</span>
      </div>
    </div>
  )
}

export default Teamcard

// {
//   "id": 1,
//   "name": "Axa",
//   "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/966/twitter/wataten-avatar.jpg?1546777130",
//   "description": "AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc",
//   "campaigns_count": 20,
//   "leads_count": 1500,
//   "is_favorited": true,
//   "is_archived": false,
//   "created_at": "28 July 2018"
// },