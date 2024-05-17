"use client"
import { londrina_solid, londrina } from '../fonts'
import React from 'react'
import { TiArrowRightOutline } from "react-icons/ti";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Quest from './quest';

const Questions = () => {
  const [ questions, setQuestions ] = React.useState([])
  const container = React.useRef();
  
  const getQuestions = async () => {
    const res  = await fetch("/content/questions.json")
    const questions = await res.json()
    return questions
  }

  React.useEffect(()=>{
    getQuestions().then(data=>{
      setQuestions(data)
    })
  }, [])
  return (
    <div className={`px-3 text-white max-w-4xl tab:max-w-7xl min-h-screen w-full mx-auto ${londrina_solid.className} space-y-10 sm:space-y-28`}>
      <div className='max-w-[16rem] xs:max-w-xs sm:max-w-sm text-4xl xs:text-5xl md:text-7xl tracking-wider'>
        <h1>
          FREQUENTLY ASKED
            <TiArrowRightOutline className='inline-block mb-3' />
           QUESTIONS
        </h1>
      </div>
      <div className='text-white' ref={container}>
        {
          questions && questions.map((item, index)=>(
            <Quest key={index} item={item} index={index} ref={container}/>
          ))
        }
      </div>
    </div>
  )
}

export default Questions
