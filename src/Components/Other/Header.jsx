import React, { useState } from 'react'

const Header = ({data,handleClick}) => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-bold'>{data?.firstName || "Admin"} 👋</span></h1>
        <button onClick={handleClick} className='bg-red-600  font-medium text-white px-5 py-2 rounded '>Log Out</button>
    </div>
  )
}

export default Header