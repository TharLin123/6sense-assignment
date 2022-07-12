import './App.css';
import AcitivityBoard from './components/ActivityBoard/AcitivityBoard';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Teamboard from './components/TeamBoard/Teamboard';
import React, { useEffect, useReducer, useState } from 'react'
import {initialFetchState, fetchReducer} from './constants/fetchConstants'

function App() {

  const [fetchState, dispatchFetch] = useReducer(fetchReducer,initialFetchState)
  const [filterState, setFilterState] = useState('ALL')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/807ba601-b71c-4a02-8d9f-44700a20791e/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220710T041335Z&X-Amz-Expires=86400&X-Amz-Signature=a2375fc30f104b7bfa968d3d0fbf4e82c4f4cda433518d9c8437e7746e68ed8c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22&x-id=GetObject')
      // const data = await response.json() //error fetching json
      const rawData = await response.text() // fetch raw text
      const corretedRawData = rawData.replace('   ,', '') // correct text-error
      const jsonData = JSON.parse(corretedRawData) // parse as json
      dispatchFetch({type: 'FETCH_SUCCESS', payload: jsonData})
    }
    try{
      fetchData();
    }catch(error){
      dispatchFetch({type: 'FETCH_ERROR', payload: 'error requesting data'})
    }
  }, [])
  
  return (
    <div className="App">
      <Sidebar/>
      <div className='content'>
        <Navbar fetchState={fetchState} setFilterState={setFilterState}/>
        <div className='team-activity app-flex'>
          <Teamboard fetchState={fetchState} filterState={filterState}/>
          <AcitivityBoard fetchState={fetchState}/>
        </div>
      </div>
    </div>
  );
}

export default App;
