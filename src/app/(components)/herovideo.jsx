"use client"
import React from 'react'

const HeroVideo = () => {
  return (
    <div className='w-full h-[60vh] xs:h-[150vh] px-3 xs:px-0 my-16'>
      <video 
      autoPlay
      loop
      src="/videos/conceptvilla2.mp4"
      type="video/mp4"
      className='w-full object-cover h-full bg-[50%] object-center aspect-video rounded-md xs:rounded-none'
      // height={"3500px"}
      />
    </div>
  )
}

export default HeroVideo
