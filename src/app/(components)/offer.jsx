import React from 'react'
import { londrina, londrina_solid } from '../fonts'
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";

const Offer = () => {
  return (
    <div className="w-full h-[120vh] bg-customBlack svg flex items-center justify-center">
      <div className="max-w-3xl w-full px-5 flex flex-col">
        <div className={`${londrina_solid.className} text-7xl uppercase text-white text-center tracking-wide leading-[4.5rem]`}>
          <span className={`text-center ${londrina.className} font-bold tracking-wide`}>
            your design concept
          </span> <br />
          <TiArrowRightThick className='inline-block mb-2 mr-1'/>within 1 week< TiArrowLeftThick className='inline-block mb-3 ml-1'/>
        </div>
        <div className>

        </div>
      </div>
    </div>
  )
}

export default Offer
