import React from 'react'
import { londrina_solid, londrina } from '../fonts'
import { TiArrowRightOutline } from 'react-icons/ti'
import Image from 'next/image'
import Grid from './ui/grid'

const Recent = () => {
  return (
    <div className='bg-customBlack min-h-screen w-full pt-48 pb-48'>
      <div className='max-w-[90rem] w-full mx-auto px-5'>
        <h2 className={`${londrina_solid.className} text-5xl md:text-7xl uppercase tab:tracking-wider text-white leading-[2rem] md:leading-[4rem]`}>
          <span className={`${londrina.className} block`}>
            recent {" "} 
            <TiArrowRightOutline className='inline-block mb-2' />
          </span> {" "}
          cases
        </h2>
        <div className='flex flex-col space-y-40'>
          <Grid
          title={""}
          key={""}
          content={""}
          position={"normal"}
          imageSrc={"https://assets-global.website-files.com/62bac7754ea6d7967db80305/65d6f561319e991e647f8f0d_cz-image-01-p-500.webp"}
          videoSrc={'https://dl.dropboxusercontent.com/scl/fi/mo8657tqu0fgdi7rt9e8u/crypto.mp4?rlkey=6jwihpwf1e3hwn91qs11eb61o&dl=0'}
          />
          <Grid 
          title={""}
          key={""}
          content={""}
          position={"reverse"}
          imageSrc={"https://assets-global.website-files.com/62bac7754ea6d7967db80305/65d6f561319e991e647f8f0d_cz-image-01-p-500.webp"}
          videoSrc={'https://dl.dropboxusercontent.com/scl/fi/mo8657tqu0fgdi7rt9e8u/crypto.mp4?rlkey=6jwihpwf1e3hwn91qs11eb61o&dl=0'}
          />
          <Grid 
          title={""}
          key={""}
          content={""}
          position={"reverse"}
          imageSrc={"https://assets-global.website-files.com/62bac7754ea6d7967db80305/65d6f561319e991e647f8f0d_cz-image-01-p-500.webp"}
          videoSrc={'https://dl.dropboxusercontent.com/scl/fi/mo8657tqu0fgdi7rt9e8u/crypto.mp4?rlkey=6jwihpwf1e3hwn91qs11eb61o&dl=0'}
          />
        </div>
      </div>
    </div>
  )
}

export default Recent
