import React from 'react'
import './Teamboard.css'
import Teamcard from './Teamcard'

const Teamboard = ({fetchState, filterState}) => {

  const filterArray = (teams, filterState) => {
    if (filterState === 'FAVORITES') {
      return teams.filter(team => team.is_favorited === true)
    }
    else if (filterState === 'ARCHIVES') {
      return  teams.filter(team => team.is_archived === true)
    }
    return teams;
  }

  return (
    <div className='teamboard'>
      <div className='teamboard-heading app-flex'>
        <span>All Teams</span>
        <span className='secondary-text'>Showing {fetchState.loading || filterArray(fetchState.data.teams, filterState).length} out of {fetchState.loading || fetchState.data.teams.length} teams</span>
      </div> 
      {fetchState.loading ||
      <div className='teamboard-content app-flex'>
        {filterArray(fetchState.data.teams, filterState).map(team => (
          <div key={team.id}>
            <Teamcard team={team}/>  
          </div>
        ))}
      </div>
      }
    </div>
  )
}

export default Teamboard
