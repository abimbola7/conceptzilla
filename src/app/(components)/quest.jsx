"use client"

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Quest = ({ item, index, ref }) => {
  const timeline = React.useRef();
  const { context, contextSafe } = useGSAP(()=>{
    timeline.current = gsap.timeline({
      defaults : {
        duration : 1
      }
    })
  }, {
    scope : ref
  })
  const [ accordionState, setAccordionState ] = React.useState(false)
  const contentRef = React.useRef()
  const rotateElement1Ref = React.useRef()
  const rotateElement2Ref = React.useRef()
  console.log(accordionState)

  const accordion = contextSafe((i)=>{
    console.log(index)
    setAccordionState(prevState=>!prevState)
    gsap.to(rotateElement1Ref.current, {
      rotate : !accordionState ? 360 : 0,
      opacity : !accordionState ? 0 : 1,
      duration : .5
    })
    gsap.to(rotateElement2Ref.current, {
      rotate : !accordionState ? 360 : 0,
      duration : .5
    })
  })

  return (
    <div 
    className={`py-10 font-light tracking-wider text-4xl px-2 border-[#4F4D4A] border-b ${index === 0 && 'border-t'} flex flex-col`} 
    // key={index}
    >
      <div 
      className='flex items-center justify-between w-full' 
      onClick={()=>accordion(index)}
      >
        <h1 className='circle'>
          {
            item.question
          }
        </h1>
        <div className="plus group w-8 h-8 relative circle">
          <div className='absolute top-0 left-[45%] h-full w-1 bg-white group-hover:bg-yellow-500 shadow-white shadow-lg duration-200 transition-colors rounded vertical' ref={rotateElement1Ref}/>
          <div className='absolute top-[45%] left-[0] w-full h-1 bg-white group-hover:bg-yellow-500 shadow-white shadow-lg duration-200 transition-colors rounded horizontal' ref={rotateElement2Ref}/>
        </div>
      </div>
      <div className={`space-y-8 mt-8 max-h-0 ${accordionState ? 'block' : 'hidden'}`} ref={contentRef}>
        {
          item.answer.map((ans, i)=>(
            <p className='text-2xl font-extralight tracking-widest' key={i}>
              { ans }
            </p>
          ))
        }
      </div>
    </div>
  )
}

export default Quest
