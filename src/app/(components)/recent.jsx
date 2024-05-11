"use client"
import React from 'react'
import { londrina_solid, londrina } from '../fonts'
import { TiArrowRightOutline } from 'react-icons/ti'
import Image from 'next/image'
import Grid from './ui/grid'
import Button from './ui/button'
import { CiBasketball } from "react-icons/ci";



const Recent = () => {
  const [ content, setContent ] = React.useState([])
  const getCases = async () => {
    const res = await fetch("/content/content.json")
    const content = await res.json()
    return content
  }
  
  React.useEffect(()=>{
    getCases().then((data)=>{
      console.log(data)
      setContent(data)
    })
  }, [])

  console.log(content)
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
          {
            content?.map(item=>(
              <Grid 
              key={item.id}
              content={item}
              />
            ))
          }
        </div>

        <div className="pt-20 space-y-6">
          <div className='text-white text-xl tracking-widest font-light'>
            <p>That&apos;s merely a snippet of our recent projects.</p>
            <p>You can visit Dribble and explore our most current work there.</p>  
          </div>
          <Button 
          icon={true}
          title={"View on Dribble"}
          color={"#000"}
          className="bg-[#F4C644] text-2xl rounded-full py-5 px-8 normal-case text-black font-normal w-fit"/>
        </div>
      </div>
    </div>
  )
}

export default Recent
