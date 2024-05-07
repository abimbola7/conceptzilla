import React from 'react'
import { londrina_solid, londrina } from '../fonts'
import { TiArrowRightOutline } from 'react-icons/ti'

const Recent = () => {
  return (
    <div className='bg-customBlack min-h-screen w-full pt-48'>
      <div className='max-w-[90rem] w-full mx-auto'>
        <h2 className={`${londrina_solid.className} text-7xl uppercase tab:tracking-wider text-white leading-[4rem]`}>
          <span className={`${londrina.className} block`}>
            recent {" "} 
            <TiArrowRightOutline className='inline-block mb-2' />
          </span> {" "}
          cases
        </h2>

        <div className='w-ful mt-5 h-screen grid grid-cols-3 gap-x-56'>
          <div className='border'></div>
          <div className='border video1 col-span-2' id='video1'></div>
        </div>
      </div>
    </div>
  )
}

export default Recent
