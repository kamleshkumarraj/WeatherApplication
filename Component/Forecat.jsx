import React from 'react'

export default function Forecast({time , icon , temp}) {
  return (
    <div id="time" className='text-[white] text-[1.6rem] flex flex-col gap-[2rem] items-center mt-[1rem]'>
        <p>{time}</p>
        {
        icon=="" ? <p className="w-[2rem] h-[2rem] rounded-[50%] bg-[#E76140]"></p> : <p className='text-[2rem] z-[100000] relative after:w-[1.5rem] after:h-[1.5rem] after:absolute after:rounded-[50%] after:top-[10%] after:left-[40%] after:z-[-1] after:bg-[#E76140]'>{icon}</p>  
        }
        <p>{temp}</p>
    </div>
  )
}
