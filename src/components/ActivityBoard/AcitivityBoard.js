import React from 'react'
import './ActivityBoard.css'

const AcitivityBoard = ({fetchState}) => {

  const activityTextGenerator = (name, action, target) =>{
    switch (action) {
      case 'increased_quota':
        return <p><strong>{`${name} `}</strong>{`${action.split('_')[0]} `}<strong>{`${target} `}</strong>'s quota.</p>
      case 'archived_team': 
        return <p><strong>{`${name} `}</strong>{`${action.split('_')[0]} the team `}<strong>{`${target} `}</strong>.</p>
      case 'added_leads':
        return <p><strong>{`${name} `}</strong>{`${action.split('_')[0]} new leads to `}<strong>{`${target} `}</strong>.</p>
      default:
        break;
    }
  }
  
  return (
    <div className='activity-board'>
      <div className='activity-heading app-flex'>
        <span>Activities</span>
      </div>
      <div className='activity-body'>
        {fetchState.loading ? '' : 
          fetchState.data.activities.map(activity => (
            <div className='activities' key={activity.id}>
              <div className='activity-upper app-flex'>
                <div className='image-container'>
                  {<img src={activity.person.avatar} alt='person-avatar'/>} 
                </div>
                <div className='text-container'>
                  {activityTextGenerator(activity.person.name,activity.action, activity.target)}
                </div>
              </div>
              <span>{activity.created_at ? activity.created_at : 'unknown time' }</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AcitivityBoard