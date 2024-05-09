import React from 'react'
import { londrina_solid, londrina } from '../fonts'
import { TiArrowRightOutline } from 'react-icons/ti'
import Image from 'next/image'

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

        <div className='w-full mt-20 md:mt-5 h-full min-h-screen flex flex-col md:flex-row gap-40 md:gap-20 tab:gap-40 items-end'>
          <div className='w-full md:w-1/2 tab:w-[40%] h-full flex flex-col justify-end text-white space-y-5 video1'>
            <h1 className='text-[25px] tracking-widest font-light text-[#ffffff] capitalize'>
              Car rental service mobile app
            </h1>
            <Image
            src={"https://assets-global.website-files.com/62bac7754ea6d7967db80305/65d6f561319e991e647f8f0d_cz-image-01-p-500.webp"}
            width={1000}
            height={1000}
            alt='img'
            quality={100}
            />
            <p className="text pr-6 text-[#9f9f9d]">
              Developed a concept for a car rental mobile app, allowing users to book vehicles across the world hassle-free. The filtering system assists in finding a suitable car quickly.
            </p>
            <ul className='text'>
              <li className={`list`}> 5 main screens for mobile app</li>
              <li className={`list`}> Promotional landing page</li>
              <li className={`list`}> Presentation-ready animation</li>
              <li className={`list`}> Development-ready assets</li>
          </ul>
          </div>
          <div className='video1 w-full md:w-1/2 tab:w-[60%] flex flex-col space-y-5' id='video1'>
            <h1 className='text-[25px] tracking-widest font-light text-[#ffffff] capitalize'>
              Cryptocurrency exchange website & mobile app
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
                <source src='https://dl.dropboxusercontent.com/scl/fi/mo8657tqu0fgdi7rt9e8u/crypto.mp4?rlkey=6jwihpwf1e3hwn91qs11eb61o&dl=0' type="video/mp4"/>
              </video>
            </div>

            <div className={`space-y-8 ${londrina_solid.className} text-white text-lg tracking-widest font-light`}>
              <p className="text-[#9f9f9d]">
                Designed a cryptocurrency exchange mobile app and it&apos;s promo landing page for improved marketing strategies. The design has the clarity and ease of use that people use in trading apps.
              </p>

              <ul className=''>
                <li className={`list`}> 5 main screens for mobile app</li>
                <li className={`list`}> Promotional landing page</li>
                <li className={`list`}> Presentation-ready animation</li>
                <li className={`list`}> Development-ready assets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recent
