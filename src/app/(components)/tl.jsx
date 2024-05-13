"use client"
import Image from 'next/image'
import React from 'react'
import { TiArrowRight } from 'react-icons/ti'

const Tl = () => {
  return (
    <>
      {/* smaller screens */}
      <div className='tab:hidden w-full grid grid-cols-1 xs:grid-cols-2 mt-40 px-3 sm:px-10 gap-y-12'>
        <div className="p-3 font-light text-white">
          <h1 className='text-lg'>Day 1</h1>
          <p className='text-[20px] tracking-wide font-medium'>The Baseline</p>
          <Image
          className='pt-10 pb-5'
          src={"https://assets-global.website-files.com/62bac7754ea6d7967db80305/62bac7754ea6d715f6b803b9_timeline1.svg"}
          alt=''
          width={200}
          height={50}
          quality={"1000"}
          />
          <p className="border-none text-lg tracking-wider font-light text-white ">
            Within 1-2 business days, we’ll reach out to you and schedule a call to discuss the details.
          </p>
        </div>
        <div className="p-3 font-light text-white">
          <h1 className='text-lg'>Day 2</h1>
          <p className='text-[20px] tracking-wide font-medium '>The Kick-off</p>
          <Image
          className='pt-10 pb-5'
          src={"https://assets-global.website-files.com/62bac7754ea6d7967db80305/62bac7754ea6d70dfcb803b5_timeline2.svg"}
          alt=''
          width={200}
          height={50}
          quality={"1000"}
          />
          <p className="border-none text-lg tracking-wider font-light text-white ">
            At this stage, we’ll discuss with you all the details and issues needed to start the concept creating process.
          </p>
        </div>
        <div className="p-3 font-light text-white">
          <h1 className='text-lg'>Day 3 <TiArrowRight className='inline-block mb-1' />6</h1>
          <p className='text-[20px] tracking-wide font-medium '>The Design</p>
          <Image
          className='pt-10 pb-5'
          src={"https://assets-global.website-files.com/62bac7754ea6d7967db80305/62bac7754ea6d71031b803b4_timeline3.svg"}
          alt=''
          width={200}
          height={50}
          quality={"1000"}
          />
          <p className="border-none text-lg tracking-wider font-light text-white ">
            Considering the pack selected and your business needs, we develop a quick and scalable design solution.
          </p>
        </div>
        <div className="p-3 font-light text-white">
          <h1 className='text-lg'>Day 7</h1>
          <p className='text-[20px] tracking-wide font-medium '>The Rollout</p>
          <Image
          className='pt-10 pb-5'
          src={"https://assets-global.website-files.com/62bac7754ea6d7967db80305/62bac7754ea6d718f0b803b7_timeline4.svg"}
          alt=''
          width={200}
          height={50}
          quality={"1000"}
          />
          <p className="border-none text-lg tracking-wider font-light text-white ">
            We deliver finalized design assets according to the pack selected 1 week after the project start.
          </p>
        </div>
        
      </div>

      {/* laptop screens */}
      <div className='w-full hidden tab:grid grid-cols-6 px-10 gap-x-1 mt-40'>
        <div className="col-span-1 borde grid grid-rows-2">
          <div className="diamond">
            <h1 className='text-lg'>Day 1</h1>
            <p className='text-[20px] tracking-wide font-medium '>The Baseline</p>
          </div>
          <div className="border-none py-8 px-1 text-md lg:text-lg tracking-wider font-light text-white ">
            Within 1-2 business days, we’ll reach out to you and schedule a call to discuss the details.
          </div>
        </div>
        <div className="col-span-1 borde grid grid-rows-2">
          <div className="diamond">
            <h1 className='text-lg'>Day 2</h1>
            <p className='text-[20px] tracking-wide font-medium '>The Kickoff</p>
          </div>
          <div className="border-none py-8 px-1 text-md lg:text-lg tracking-wider font-light text-white ">
          At this stage, we’ll discuss with you all the details and issues needed to start the concept creating process.
          </div>
        </div>
        <div className="col-span-3 borde grid grid-rows-2">
          <div className="diamond">
            <h1 className='text-lg'>
              Day 3 
              <TiArrowRight className='inline-block mb-1' />6
            </h1>
            <p className='text-[20px] tracking-wide font-medium '>The Design</p>
          </div>
          <div className="border-none w-full max-w-[65%] py-8 px-1 text-md lg:text-lg tracking-wider font-light text-white">
          Considering the required scope of work and your business needs, we develop a quick and scalable design solution.
          </div>
        </div>
        <div className="col-span-1 borde grid grid-rows-2">
          <div className="diamond">
            <h1 className='text-lg'>Day 7</h1>
            <p className='text-[20px] tracking-wide font-normal '>The Rollout</p>
          </div>
          <div className="border-none py-8 px-1 text-md lg:text-lg tracking-wider font-light text-white ">
          We deliver finalized design assets according to the required scope 1 week after the project start.
          </div>
        </div>
      </div>
    </>
  )
}

export default Tl
