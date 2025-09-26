import { useState } from 'react'
import './App.css'

function MyComponent() {


  return (
    <>
    <div className='bg-violet-200 h-15 w-full border-2 border-violet-600 rounded-md p-2'>
    <h1 className='text-center font-mono font-extrabold text-[25px]'>Hello World</h1>
    </div>

    <div className='flex gap-4 justify-around'>
      <div className='h-36 w-55 rounded-full bg-blue-500'></div>
      <div className='h-36 w-55 rounded-full bg-orange-500'></div>
      <div className='h-36 w-55 rounded-full bg-green-500'></div>
    </div> 

   <div className='sm:text-5xl sm:p-10'>
    <p className='text-white'>wider than 768px</p>
  </div>

  <div className='bg-white dark:bg-black text-black dark:text-white'>
    Dark Mode Disabled
  </div>

    </>
  );
}

export default MyComponent
