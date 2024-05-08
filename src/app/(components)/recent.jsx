import React from 'react'
import { londrina_solid, londrina } from '../fonts'
import { TiArrowRightOutline } from 'react-icons/ti'

const Recent = () => {
  return (
    <div className='bg-customBlack min-h-screen w-full pt-48 pb-48'>
      <div className='max-w-[90rem] w-full mx-auto'>
        <h2 className={`${londrina_solid.className} text-7xl uppercase tab:tracking-wider text-white leading-[4rem]`}>
          <span className={`${londrina.className} block`}>
            recent {" "} 
            <TiArrowRightOutline className='inline-block mb-2' />
          </span> {" "}
          cases
        </h2>

        <div className='w-full mt-5 h-screen flex flex-row gap-x-40'>
          <div className='border w-[40%] h-full'></div>
          <div className='video1 w-[60%] flex flex-col space-y-5' id='video1'>
            <video 
            type="video/mp4"
            src="/videos/crypto.mp4" 
            muted 
            loop 
            autoplay 
            className='w-full object-cover h-[100vh] bg-[50%] object-center aspect-video'
            />

            <div className={`space-y-8 ${londrina_solid.className}`}>
              <p>
                Designed a cryptocurrencyexchange mobile app and it&apos;s promo landing page for improved marketing strategies. The design has the clarity and ease of use that people use in trading apps.
              </p>

              <ul className=''>
                <li className={`before:absolute before`}>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recent
