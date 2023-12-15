import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'


function GenreList({genresId}) {

const [genreList,setGenreList]=useState([])
const [activeIndex,setActiveIndex]=useState(0);
useEffect(()=>{
    getGenreList();
},[]);
    const getGenreList=()=>{
        GlobalApi.getGenreList.then((resp)=>{
            
            setGenreList(resp.data.results);
        })
    }
  return (
    <div>
        <h2 className='text-[30px] font-bold p-2'>Genre</h2>
        {genreList.map((item,index)=>(
            <div 
            onClick={()=>{setActiveIndex(index);genresId(item.id)}}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-slate-200 ml-2 rounded-lg
            hover:dark:bg-gray-600
            group ${activeIndex==index?"bg-gray-300 dark:bg-gray-600":null}`}>
                <img src={item.image_background} className={`w-[40px] h-[40px] object-cover 
                group-hover:scale-105 transition-all ease-out duration-300 rounded-lg p-1 
                ${activeIndex==index?"scale-105":null}`}/>
                <h3 className={`text-[17px]
                group-hover:font-bold transition-all ease-out duration-300
                ${activeIndex==index?"font-bold":null}`}>{item.name}</h3>
            </div>
        ))

        }
    </div>
  )
}

export default GenreList