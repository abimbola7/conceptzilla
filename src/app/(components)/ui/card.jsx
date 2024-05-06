import React from 'react'
import { londrina_solid } from '@/app/fonts'

const Card = ({ className, title, content }) => {
  return (
    <div className={`${className} bg-[#131214] rounded-[2.5rem] tracking-widest py-10 px-10 ${londrina_solid.className} space-y-6 text-2xl font-light text-white h-[25rem]`}>
      <h2 className='capitalize'>{title}</h2>
      <p className='text-lg'>{content}</p>
    </div>
  )
}

export default Card
