import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner';
import TrendingGames from '../Components/TrendingGames';
import GameByGenresId from '../Components/GameByGenresId';

function Home() {

  const[allGameList,setAllGameList]=useState();
  const[gameListByGenres,setGameListByGenres]=useState([]);

  useEffect(()=>{
    getAllGamesList();
    getGameListByGenresId(); 
  },[])

  const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((resp)=>{
      setAllGameList(resp.data.results)
      //setGameListByGenres(resp.data.results)
    })
  }

  const getGameListByGenresId=(id)=>{
    GlobalApi.getGameListByGenresId(id).then((resp)=>{
      console.log("Game List By Genres ID: ",resp.data.results)
      setGameListByGenres(resp.data.results)
    })
  }

  return (
    <div className='grid grid-cols-4'>
    <div className='h-full hidden md:block'>
      <GenreList genresId={(genresId)=>getGameListByGenresId(genresId)}/>
    </div>
    <div className='col-span-4 md:col-span-3 '>

    {allGameList?.length>0&&gameListByGenres.length>0? 
      <div>
       <Banner gameBanner={allGameList[0]}/>
    <TrendingGames gameList={allGameList}/>
    <GameByGenresId gameList={gameListByGenres}/>
    </div>
    :null}
    </div>
    </div>
  )
}

export default Home