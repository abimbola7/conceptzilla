import React from 'react'
import { londrina, londrina_solid } from '../fonts';
import Button from './ui/button';

const Result = () => {
  return (
    <div className='w-full min-h-screen bg-customBlack'>
      <div className='max-w-[85%] w-full h-full mx-auto grid grid-cols-3 gap-x-4'>
        <div className={`py-2 px-8 flex flex-col space-y-20`}>
          <h2 className={`${londrina_solid.className} text-7xl uppercase text-white tracking-wider`}>
            <span className={londrina.className}>what you&apos;ll</span> 
            {" "} get {" "}
            <span className={londrina.className}>as&nbsp;a</span>{" "}
            result
          </h2>

          <Button
          className={"bg-[#F4C644] rounded-full py-5 px-4 normal-case text-black font-bold text-lg"}
          title={"Order a Concept"}
          color={"#000"}
          />
        </div>
        <div className="border py-3 grid grid-rows-2">Y</div>
        <div className="border py-3 grid grid-rows-2"></div>
      </div>
    </div>
  )
}

export default Result
