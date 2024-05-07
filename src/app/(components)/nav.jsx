import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { londrina_solid } from '../fonts'
import Button from './ui/button'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const Nav = ({ timeline }) => {
  const container  = React.useRef();
  
  useGSAP(()=>{
    timeline && timeline
    .from(".list1", {
      x : 70
    }, 0)
    .from(".list2", {
      x : 100
    }, 0)
    .from(".button", {
      delay : .1,
      x : 50,
      opacity : 0
    }, 0)
  }, {
    dependencies : [ timeline ]
  })
  
  
  return (
    <nav 
    className={`w-full py-5 text-white fixed top-0 left-0 -z-2 backdrop-blur-2xl ${londrina_solid.className} tracking-widest bg-customBlack bg-opacity-45`}
    >
      <div
       className='max-w-[95%] mx-auto flex items-center justify-between space-x-10'
       ref={container}
       >
        <h1 className='font-bold text-2xl uppercase tracking-widest'>ConceptVilla</h1>
        <ul className='hidden md:flex items-center justify-around uppercase text-xl font-light flex-1'>
          <Link href="/" className=''>
            how it&apos;s done
          </Link>
          <Link href="" className=''>
            <div
            className='list1'
            >
              RECENT CONCEPTS
            </div>
          </Link>
          <Link href="" className=''>
            <div className='list2'>
              faq
            </div>
          </Link>
          <li>
            <Button 
            title={"Order a Concept"}
            color={"#000"}
            className="bg-white rounded-3xl py-2 px-6 normal-case text-black font-bold button"/>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
