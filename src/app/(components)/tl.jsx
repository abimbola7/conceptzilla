"use client"
import React from 'react'

const Tl = () => {
  return (
    <div className='w-full grid grid-cols-6 px-10 gap-x-1 mt-40'>
      <div className="col-span-1 borde grid grid-rows-2">
        <div className="diamond">
          <h1 className='text-lg'>Day 1</h1>
          <p className='text-[20px] font-medium'>The Baseline</p>
        </div>
        <div className="border-none py-8 px-1 text-lg tracking-wider font-light text-white ">
          Within 1-2 business days, we’ll reach out to you and schedule a call to discuss the details.
        </div>
      </div>
      <div className="col-span-1 borde grid grid-rows-2">
        <div className="diamond">
          <h1 className='text-lg'>Day 1</h1>
          <p className='text-[20px] font-medium'>The Baseline</p>
        </div>
        <div className="border-none py-8 px-1 text-lg tracking-wider font-light text-white ">
        At this stage, we’ll discuss with you all the details and issues needed to start the concept creating process.
        </div>
      </div>
      <div className="col-span-3 borde grid grid-rows-2">
        <div className="diamond">
          <h1 className='text-lg'>Day 1</h1>
          <p className='text-[20px] font-medium'>The Baseline</p>
        </div>
        <div className="border-none w-full max-w-full lg:max-w-[75%] py-8 px-1 text-lg tracking-wider font-light text-white">
        Considering the required scope of work and your business needs, we develop a quick and scalable design solution.
        </div>
      </div>
      <div className="col-span-1 borde grid grid-rows-2">
        <div className="diamond">
          <h1 className='text-lg'>Day 1</h1>
          <p className='text-[20px] font-medium'>The Baseline</p>
        </div>
        <div className="border-none py-8 px-1 text-lg tracking-wider font-light text-white ">
        We deliver finalized design assets according to the required scope 1 week after the project start.
        </div>
      </div>
    </div>
  )
}

export default Tl
