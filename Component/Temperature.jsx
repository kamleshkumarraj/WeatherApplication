import React from 'react'
import sunIcon from '../Assets/Image/sunIcon.webp'

export default function Temperature() {
  return (
    <div className='flex flex-col mt-[2rem] mx-auto gap-[3rem]'>
        <div id="time-details" className='flex justify-center text-[2rem] text-[white] gap-[1rem] font-thin'>
            <p>Monday, 31 May 2022</p>
            <p>|</p>
            <p>Local time: 12:46 PM</p>
        </div>
        <div id="country-name" className='text-center text-[3rem] text-[white] font-semibold'>
            <p>Berline, DE</p>
        </div>
        <div id="clrBtn" className='text-center text-[#59CFEF] text-[2.4rem] font-[500] hover:cursor-pointer '>
            <p>Clear</p>
        </div>
        <div id="temp-details" className='flex items-center justify-around'>
            <p className='w-[5rem] h-[5rem] rounded-[50%] bg-[#E76140]'></p>
            <p className='text-[3rem] text-[white]'>19°</p>
            <div id="temp" className='flex flex-col gap-[.5rem]'>
                <p className='felx gap-[1rem text-[1.6rem] text-[white]'>
                <i className="fa-solid fa-temperature-three-quarters text-[2.4rem]"></i>
                <span className='ml-[.5rem]'>Real Fell : 18°</span>
                </p>
                <p className='text-[1.6rem] text-[white]'>
                    <i className="fa-solid fa-droplet text-[1.6rem]"></i>
                    <span className='ml-[.5rem]'>Humadity: 43%</span>                
                </p>
                <p className='text-[1.6rem] text-[white]'>
                    <i className="fa-solid fa-wind"></i>
                    <span className='ml-[.5rem]'>wind: 2 km/hr</span>
                </p>
            </div>
        </div>
        <div id="sun-info" className='flex gap-[1rem] text-[1.6rem] text-[white] justify-center items-center'>
            <p>
                <i className="text-yellow-500 fa-solid fa-sun"></i>
                <span className='ml-[1rem]'>Rise 4:50 AM &nbsp; | </span>
            </p>
            <p>
                <i className="fa-solid fa-cloud-sun-rain"></i>
                <span className='ml-[1rem]'>Set 6:00 PM &nbsp; | </span>
            </p>
            <p>
                <i className="fa-solid fa-arrow-up"></i>
                <span className='ml-[1rem]'>High: 21° &nbsp; | </span>
            </p>
            <p>
                <i className="fa-solid fa-arrow-down"></i>    
                <span className='ml-[1rem]'>Low: 17°</span>
            </p>
        </div>
    </div>
  )
}
