"use client"
import React from 'react'
import { londrina, londrina_solid } from '../fonts'
import { TiArrowRightOutline } from "react-icons/ti";
import Button from './ui/button';
// import "./hero.css"

const Hero = () => {
  return (
    <div className={`text-2xl text-white font-bold px-5 pt-36 pb-20 ${londrina.className} max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-6 space-y-20 lg:space-y-0`}>
      <div className="text-5xl sm:text-7xl uppercase max-w-2xl lg:max-w-full lg:w-3/5">
        <p className='leading-none tracking-wider'>
          presentation-ready {" "}
          <span className={`inline-block ${londrina_solid.className}`}>
            concepts
          </span> {" "}
          for {" "}
          <span className={`inline-block ${londrina_solid.className}`}>
            $3000  
          </span> {" "}
          within {" "}
          <TiArrowRightOutline className='inline-block mb-2' />{" "}
          <span className={`inline-block ${londrina_solid.className}`}>
            one week
          </span>
        </p>
      </div>
      <div className={`max-w-lg lg:max-w-full lg:w-2/5 text-2xl ${londrina_solid.className} font-light leading-tight space-y-6`}>
        <p className=''>
        Having launched our own startups and with 500+ successful projects on our resume, we know exactly how to make ideas shine
        </p>
        <Button 
        title={"Order a Concept"}
        color={"#000"}
        className="bg-[#F4C644] rounded-full py-5 px-8 normal-case text-black font-normal w-fit"/>
      </div>
    </div>
  )
}

export default Hero
