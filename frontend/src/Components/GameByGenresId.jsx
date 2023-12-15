import React, { useEffect } from 'react'

function GameByGenresId({gameList}) {
    useEffect(()=>{
        console.log("GameList",gameList)
    },[])
  return (
    <div>
    <h2 className='font-bold text-[25px] mt-5'>Popular Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
        {gameList.map((item)=>(
            <div className='bg-[#76a8f75e] p-4 rounded-lg pb-10 h-full
            hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
                <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover'/>
                <h2 className='text-[20px] font-bold'>{item.name}<span className='p-1 rounded-sm ml-2 text-[10px]
                bg-green-100 text-green-700 font-medium'>{item.metacritic}</span></h2>
                <h2 className='text-gray-500 dark:text-gray-200'>  ⭐{item.rating}   ☁️{item.reviews_count}  
                     🔥{item.suggestions_count}</h2>
            </div>
        ))}
    </div>
    </div>
  )
}

export default GameByGenresId