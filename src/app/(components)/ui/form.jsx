"use client"
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Button from './button'
import { FaArrowRightLong } from 'react-icons/fa6'


const Form = () => {
  const emailRef = React.useRef();
  const ideaRef = React.useRef();

  const {
    context,
    contextSafe
  } = useGSAP(()=>{
  })

  const focusEmail = contextSafe(()=>{
    gsap.to(emailRef.current, {
      borderBottom : "1px solid white"
    })
  })

  const focusIdea = contextSafe(()=>{
    gsap.to(ideaRef.current, {
      borderBottom : "1px solid white"
    })
  })
  return (
    <form 
    className='w-full tab:w-[65%] flex flex-col space-y-10
    '>
      <div className='w-full flex flex-col space-y-6 text-2xl tracking-wider font-extralight'>
        <div 
        className='w-full flex focus-within:border-b'>
          <input 
          type="text" 
          placeholder='Your email'
          className='input'
          />
        </div>
        <div className='w-full flex focus-within:border-b'>
          <textarea
          rows={1}
          type="text" 
          placeholder='Describe your idea'
          className='input overflow-hidden'/>
        </div>
      </div>

      <div className='flex lg:items-center gap-x-5 flex-col-reverse lg:flex-row gap-y-6'>
        <Button
        className={"bg-[#F4C644] rounded-full py-5 px-6 w-fit normal-case text-black font-bold text-xl"}
        title={"Submit your idea"}
        color={"#000"}
        />
        <div className=''>
          <p className='font-extralight text-md tracking-widest'>
            Estimated cost & time 
            <FaArrowRightLong  className='inline-block ml-1 sm:mb-1'/>
            <span className='text-[#f0c03d] ml-2 text-lg'>$3,000 / 1 week</span>
          </p>
        </div>
      </div>

      <div className='space-y-3 !mt-32 font-light traacking-wider'>
        <p className='text-lg xs:text-xl md:text-3xl'>or email us at</p>
        <h1 className='text-2xl xs:text-3xl md:text-5xl circle underline transition duration-500 hover:text-yellow-500'>abimbolababajide6@gmail.com</h1>
      </div>
    </form>
  )
}

export default Form
