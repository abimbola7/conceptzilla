import React from 'react'
import { londrina, londrina_solid } from '../fonts';
import Button from './ui/button';
import Card from './ui/card';

const Result = () => {
  return (
    <div className='w-full min-h-screen bg-customBlack'>
      <div className='max-w-4xl tab:max-w-[90rem] w-full h-full mx-auto flex flex-col tab:flex-row gap-x-4 gap-y-20'>
        <div className={`py-2 px-8 flex flex-col space-y-12 tab:space-y-20 tab:w-[33%] max-w-[35rem] tab:max-w-full h-full`}>
          <h2 className={`${londrina_solid.className} text-7xl uppercase text-white tab:tracking-wider`}>
            <span className={londrina.className}>what you&apos;ll</span> 
            {" "} get {" "}
            <span className={londrina.className}>as&nbsp;a</span>{" "}
            result
          </h2>

          <Button
          className={"bg-[#F4C644] rounded-full py-5 px-10 w-fit normal-case text-black font-bold text-xl"}
          title={"Order a Concept"}
          color={"#000"}
          />
        </div>
        <div className='w-full tab:w-[77%] px-8 py-2 flex flex-col sm:flex-row gap-x-4'>
          <div className="py-3 grid grid-rows-2 gap-y-4">
            <Card 
            className={""} 
            content={"Beautifully designed sections of your digital product interface, which can be demoed to shareholders and investors before production."} 
            title={"Main screens designed"} 
            key={1}/>

            <Card 
            className={""} 
            content={"The elements we design can be easily translated into a real product MVP."} 
            title={"Pre-MVP Package"} 
            key={2}/>  
          </div>
          <div className="py-3 grid grid-rows-2 gap-y-4">
            <Card 
            className={""} 
            content={"The assets we design are ready for public display, can be included in your pitch decks, whitepapers, etc."} 
            title={"Presentable content"} 
            key={3}/>

            <Card 
            className={""} 
            content={"We equip the concept with a simple UI kit that allows you to experiment with colors and typography during the production phase."} 
            title={"Development-ready files"} 
            key={4}/>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result
