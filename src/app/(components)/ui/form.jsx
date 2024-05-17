"use client"
import React from 'react'

const Form = () => {
  return (
    <form 
    className='w-full
    '>
      <div className='w-full flex flex-col space-y-6 text-3xl font-extralight'>
        <div className='focus:border-b focus:border w-full flex'>
          <input 
          type="text" 
          placeholder='Your email'
          className='flex-1 bg-[#1A1919] py-5 rounded-2xl focus:outline-none px-5  placeholder:font-light transition-all duration-200 outline-none border-none focus:border-none focus:ring-0 focus:rounded-b-none'/>
        </div>
        <div className='flex'>
          <input 
          type="text" 
          placeholder='Describe your idea'
          className='flex-1 bg-[#1A1919] py-5 rounded-2xl focus:outline-none px-5 placeholder:font-light'/>
        </div>
      </div>  
    </form>
  )
}

export default Form
