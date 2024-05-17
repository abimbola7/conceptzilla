"use client"
import React from 'react'
import { londrina_solid, londrina } from '../fonts'
import Button from './ui/button'
import { TiArrowRightOutline } from 'react-icons/ti'
import Form from './ui/form'

const Contact = () => {
  return (
    <div className={`w-full px-3 py-32 text-white ${londrina_solid.className} mt-40 min-h-screen`}>
      <div className='flex flex-col tab:flex-row max-w-3xl tab:max-w-7xl mx-auto gap-y-20 tab:space-x-24'>
        <div className='w-full tab:w-[35%] flex flex-col space-y-16'>
          <h1 className={`${londrina_solid.className} text-7xl tracking-wide`}>
            <span className={`block`}>
            DROP <TiArrowRightOutline className='inline-block mb-2' />
            </span>
            US A LINE
          </h1>

          <p className='text-xl font-light tracking-wider'>
          Introduce yourself, your project/idea, and explain why it matters to you and everyone else.
          </p>
        </div>

        <Form />
      </div>
    </div>
  )
}

export default Contact
