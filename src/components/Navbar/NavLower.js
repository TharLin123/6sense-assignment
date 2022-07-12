import React,{useState} from 'react'
import logos from '../../constants/logos'
import {initialFilter, initialUnderlinePos} from '../../constants/filterConstants'

const NavLower = ({setFilter}) => {
  
  const [filterState, setFilterState] = useState(initialFilter)
  const [underlinePos, setunderlinePos] = useState(initialUnderlinePos)

  const filterHandler = (e) => {
    setFilterState( {
      all:'',
      favourites: '',
      archives:'',
      [e.target.id]: 'active'
    })
    if(e.target.id === 'all') {
      setunderlinePos({...initialUnderlinePos});
      setFilter('ALL');
    }
    else if(e.target.id === 'favourites'){
      setunderlinePos({ width: '90px', left: '165px'}); 
      setFilter('FAVORITES');
    }
    else if(e.target.id === 'archives'){
      setunderlinePos({ width: '80px', left: '316px'});
      setFilter('ARCHIVES');
    }
  }

  return (
    <div className='nav-lower'>
        <div className='navlower-upper app-flex'>
          <div className='teams-icon app-flex'>
            <img src={logos.companies} alt='companies'/>
            <span>Teams</span>
          </div>
          <button className='nav-butt app-flex'>
          <img src={logos.plus} alt='companies'/>
            create new team
          </button>
        </div>
        <div className='navlower-lower app-flex'>
          <div className='filters app-flex'>
            <div className='underline ' style={{...underlinePos}}> </div>
            <div className={`all ${filterState.all}`} onClick={filterHandler} id='all'>
              All
            </div>
            <div className={`favourites ${filterState.favourites}`} onClick={filterHandler} id='favourites'>
              Favourites
            </div>
            <div className={`archives ${filterState.archives}`} onClick={filterHandler} id='archives'>
              Archives
            </div>
          </div>
          <div className='searchbox app-flex'>
            <img src={logos.search} alt='search'/>
            <input type='text' placeholder='Search team name ...'/>
          </div>
        </div>
    </div>
  )
}

export default NavLower