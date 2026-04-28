import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setdata] =useState({})

    useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setdata(data)
    })
    }, [])
    
  return (
    <div className='text-center m-4 bg-slate-600 text-3xl text-white p-4'>Github followers: {data?.followers || 0}
    <img src={data.avatar_url} alt="Git pic" width={300} />
    </div>
  )
}

export default Github