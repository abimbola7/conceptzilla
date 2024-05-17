import React from 'react'
import { londrina_solid, londrina } from '../fonts'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={`w-full px-3 py-6 text-white ${londrina_solid.className}`}>
      <div className='max-w-7xl mx-auto flex items-center justify-between font-light tracking-wider text-md'>
        <div className='flex space-x-3 items-center'>
          <Link target='_blank' href={"https://x.com/_jidex"} className='underline'>X</Link>
          <p className='!no-underline mb-1'>.</p>
          <Link target='_blank' href={"https://github.com/abimbola7"} className='underline'>Github</Link> 
        </div>
        <div className=''>
          <p className=''>
            Made by {" "}
            <Link target='_blank' href="https://abimboladev.vercel.app" className="underline">Abimbola Oladosu</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
