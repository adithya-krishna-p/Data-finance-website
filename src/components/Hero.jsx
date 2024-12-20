import React from 'react'
import { ReactTyped } from "react-typed";



const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
         <p className='text-green-500 font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
         <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>grow with data.</h1>
         <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl fond-bold pr-2 py-4 '>Fast, flexible financing for</p>
            <ReactTyped className='text-xl text-gray-400' strings={['BTB','BTC','SASS']} typespeed={120} backspeed={140} loop />
         </div>
         <p className='md-text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB,BTC, & SASS platform.  </p>
         <button className='bg-white text-green-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 hover:bg-slate-500 py-3  '>Get Started</button>
        </div>
    </div>
  )
}

export default Hero