"use client"
import React from 'react'

const HeroVideo = () => {
  return (
    <div className='w-full h-[150vh] border border-red-500'>
      <video 
      // controls
      autoPlay
      loop
      src="/videos/conceptvilla2.mp4"
      type="video/mp4"
      className='w-full object-cover h-full'
      height={"3500px"}
      />
    </div>
  )
}

export default HeroVideo
