import React from 'react'
import { londrina_solid } from '@/app/fonts'
import ProductIcon from './icons/producticon'

const Card = ({ className, title, content }) => {
  return (
    <div className={`${className} flex flex-col justify-between bg-[#131214] rounded-[2.5rem] tracking-widest py-10 px-10 ${londrina_solid.className} text-2xl font-light text-white min-h-[25rem]`}>
      <div className='flex flex-col space-y-6'>
        <h2 className='capitalize'>{title}</h2>
        <p className='text-lg'>{content}</p>
      </div>
      {/* <img src='/images/screen.svg' className='w-20 h-20'/> */}
      <ProductIcon key={1} width="100" height="100"/>
    </div>
  )
}

export default Card
