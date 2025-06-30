import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='w-full h-10 bg-violet-500'>
        <div className='w-9/12 h-full mx-auto flex justify-between items-center uppercase text-white '>
            <h1 className='text-2xl font-bold'>MERN PWA</h1>
        </div>
    </div>
  )
}
