import React from 'react'

const NewLetter = () => {
  return (
    <div className='relative text-center space-y-4 min-h-[40vh] md:h-[70vh] lg:min-h-[50rem] flex flex-col items-center justify-center text-mainHeading'>
      <h6 className='absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50'>NewLatter</h6>
        <h6 className='text-3xl md:text-4xl font-bold'>SubsCribe Our NewLetter</h6>
        <p className='max-w-[16rem] text-lg font-medium'>Get the latest information and promos offers directly.</p>
        <div className='flex gap-4 flex-wrap items-center justify-center'>
          <input type='text' className='border border-gray-400 py-1 px-2 md:px-4 flex flex-grow w-80' placeholder='Input Email Address..'></input>
          <button className='text-white bg-mainHeading border-gray-500 py-2 px-4'>Get Started</button>
        </div>
    </div>
  )
}

export default NewLetter