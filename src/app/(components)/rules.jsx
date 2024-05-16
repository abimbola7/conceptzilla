"use client"
import React from 'react'
import { londrina_solid } from '../fonts'
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti"


const Rules = () => {
  return (
    <div className='h-[70vh] xs:h-[90vh] w-full bg-[#F4C644] py-32 svg1 px-3 bg-[url(https://assets-global.website-files.com/62bac7754ea6d7967db80305/65d7136bcc62aaa8fd3cdb87_rules-pattern.svg)] bg-no-repeat bg-[165%_100%] sm:bg-[100%_0%] md:bg-[240%_0%] tab:bg-[120%_10%] bg-[length:15rem] sm:bg-[length:50rem] md:bg-[length:40rem] '>
      <div className={`mx-auto border-none max-w-5xl tab:max-w-7xl h-full flex flex-col justify-between text-5xl xs:text-7xl md:text-8xl tab:text-9xl space-y-3 tab:font-medium ${londrina_solid.className} text-customBlack tracking-wider md:tracking-wide video1 rules`}>
        <div className="flex items-center md:justify-between flex-row">
          <p>One Week</p>
          <TiArrowLeftThick className='hidden md:flex' />
        </div>
        <div className="flex items-center md:justify-between">
          <p>One Iteration</p>
          <TiArrowLeftThick className='hidden md:flex' />
        </div>
        <div className="flex items-center md:justify-between">
          <p>Best For Startups</p>
          <TiArrowLeftThick className='hidden md:flex' />          
        </div>
      </div>
    </div>
  )
}

export default Rules
