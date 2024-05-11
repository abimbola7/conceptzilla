"use client"
import React from 'react'
import { londrina, londrina_solid } from '../fonts'
import { TiArrowRightOutline } from 'react-icons/ti'
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Timeline = () => {
  const container = React.useRef();
  const { context, contextSafe } = useGSAP(()=>{
    gsap.defaults({
      duration : .3,
      ease : "none"
    })
    gsap.to(".abs", {
      xPercent : 100
    })
  }, {
    scope : container
  })

  const mouseEnter = contextSafe(()=>{
    gsap.to(".abs", {
      xPercent : 0
    })
  })

  const mouseLeave = contextSafe(()=>{
    gsap.to(".abs", {
      xPercent : -100
    })
  })


  return (
    <div className='w-full min-h-screen bg-customBlack' ref={container}>
      <div className='w-full flex items-center justify-between px-10'>
        <div className='w-full max-w-2xl'>
          <h2 className={`${londrina_solid.className} text-7xl uppercase text-white tab:tracking-wider`}>
            <span className={londrina.className}>just</span> 
            {" "} one week {" "}
            <span className={londrina.className}>from</span>{" "}
            {" "} start {" "}
            <span className={londrina.className}><TiArrowRightOutline className='inline-block mb-2' /> {" "} to</span>{" "}
            finish
          </h2>
        </div>

        <div 
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className='w-36 h-36 border-2 text-[#F4C644] border-[#F4C644] flex items-center justify-center text-center text-xl font-normal  circle flex-col tracking-wider hover:text-customBlack relative overflow-hidden rounded-full'>
          <div className='absolute top-0 abs left-0 w-full h-full bg-[#F4C644] z-2'></div>
          <span className='relative z-3'>
            <TiArrowLeft className='inline-block mb-1' /> {" "} GET <TiArrowRight className='inline-block mb-1' />
          </span>
          <span className='block relative z-3'>STARTED</span>
        </div>
      </div>
    </div>
  )
}

export default Timeline
