"use client"
import React from 'react'

const HeroVideo = () => {
  return (
    <div className='w-full h-[150vh]'>
      <video 
      autoPlay
      loop
      src="/videos/conceptvilla2.mp4"
      type="video/mp4"
      className='w-full object-cover h-full bg-[50%] object-center aspect-video'
      height={"3500px"}
      />
    </div>
  )
}

export default HeroVideo
