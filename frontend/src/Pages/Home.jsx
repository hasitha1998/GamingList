import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner';

function Home() {

  const[allGameList,setAllGameList]=useState();

  useEffect(()=>{
    getAllGamesList();
  },[])

  const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((resp)=>{
      setAllGameList(resp.data.results)
    })
  }
  return (
    <div className='grid grid-cols-4'>
    <div className='h-full hidden md:block'>
      <GenreList/>
    </div>
    <div className='col-span-4 md:col-span-3 '>

    {allGameList?.length>0?  <Banner gameBanner={allGameList[0]}
    />:null}
    </div>
    </div>
  )
}

export default Home