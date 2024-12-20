import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3  justify-center'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>Want tips & tricks optimize your flow?</h1>
                <p>Sign uo to our Newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input type='email' placeholder='Enter email' className='p-3 flex w-full rounded-md' ></input>
                <button className='bg-green-500 text-white  rounded-md w-[200px] ml-4 my-6 px-6'></button>
            </div>
            <p className=''>We care About the protection of your data. Read our  <span className='text-green-500'>privacy policy.</span></p>
        </div>
    </div>
    </div>
  );
}

export default Newsletter