import React from 'react'

function Button() {
    const countryList = [
        { 
            c_id : 1,
            c_name  : "India"
        },
        { 
            c_id : 2,
            c_name  : "Australlia"
        },
        { 
            c_id : 3,
            c_name  : "Nepal"
        },
        { 
            c_id : 4,
            c_name  : "Brazil"
        },
        { 
            c_id : 5,
            c_name  : "China"
        },
    ]
        let btn = countryList.map(({c_id , c_name}) => {
           return  <button key={c_id} >{c_name}</button>
        }) 
  return (
    <div className='flex justify-center gap-[2rem] mt-[2rem] text-[2.4rem] text-white font-semibold'>
        {btn}
    </div>
  )
}

export default Button
