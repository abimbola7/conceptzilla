"use client"
import Image from 'next/image'
import React from 'react'
import { londrina, londrina_solid } from '@/app/fonts'

const Grid = ({ content }) => {
  const {
    image, video, styling
  } = content
  console.log(styling)
  return (
    <div className={`w-full mt-20 md:mt-5 h-full min-h-screen flex ${
      styling.flex === "normal" ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row-reverse'
    } ${
      styling.items === "start" ? "items-start" : 'items-end'
    } gap-40 md:gap-20 tab:gap-40`}>
      <div className='w-full md:w-1/2 tab:w-[40%] h-full flex flex-col justify-end text-white space-y-5 video1'>
        <h1 className='text-[23px] tracking-widest font-light text-[#ffffff] capitalize'>
          { image.title }
        </h1>
        <Image
        src={image.url}
        width={1000}
        height={1000}
        alt='img'
        quality={100}
        />
        <p className="text pr-6 text-[#9f9f9d]">
          { image.description }
        </p>
        <ul className='text'>
          {
            image.features.map((feature, index)=>(
              <li 
              key={index}
              className={`list`}
              > {feature}</li>
            ))
          }
      </ul>
      </div>
      
      <div className='video1 w-full md:w-1/2 tab:w-[60%] flex flex-col space-y-5' id='video1'>
        <h1 className='text-[23px] tracking-widest font-light text-[#ffffff] capitalize'>
          { video.title }
        </h1>
        <div className="h-screen">
          <video
          muted
          loop
          autoplay 
          playsInline
          preload='metadata'
          // controls
          className='w-full object-cover bg-[50%] object-center vid aspect-video h-full'
          >
            <source src={video.url} type="video/mp4"/>
          </video>
        </div>

        <div className={`space-y-8 ${londrina_solid.className} text-white text-lg tracking-widest font-light`}>
          <p className="text-[#9f9f9d]">
            { video.description }
          </p>

          <ul className=''>
            {
              video.features.map((feature, index)=>(
                <li 
                key={index}
                className={`list`}
                > {feature}</li>
              ))
            }
          </ul>
        </div>
      </div>
  </div>
  )
}

export default Grid
