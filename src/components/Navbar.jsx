import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
const Navbar = () => {
  const [nav,setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-23 max-w-[1540px] px-4 p-2 mx-auto m-5 text-white'>
        <h1 className='w-full text-3xl font-bold text-green-500 '>React.</h1>
        <ul className='hidden md:flex'>
            <li className='p-3'>Home</li>
            <li className='p-3'>Company</li>
            <li className='p-3'>Resource</li>
            <li className='p-3'>About</li>
            <li className='p-3'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden '>
        {!nav ?  <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>  }
        </div>
        <div className={!nav ? 'fixed left-0 top-0 h-full w-[30%] border-r border-r-gray-900 bg-gray-500 ease-in-out duration-300': 'fixed left-[-100%]' } >
        <h1 className='w-full text-3xl font-bold text-green-500 '>React.</h1>
        <ul className='pt-24 uppercase'>
            <li className='p-4  border-b border-gray-600  '>Home</li>
            <li className='p-4  border-b border-gray-600'>Company</li>
            <li className='p-4  border-b border-gray-600'>Resource</li>
            <li className='p-4  border-b border-gray-600'>About</li>
            <li className='p-4  border-b border-gray-600'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar