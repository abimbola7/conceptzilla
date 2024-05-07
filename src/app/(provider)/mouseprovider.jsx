"use client"
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

const MouseProvider = ({ children }) => {
  const app = React.useRef();
  const xTo = React.useRef();
  const yTo = React.useRef();
  const [ mouseState, setMouseState ] = React.useState(null)
  const { context, contextSafe } = useGSAP(()=>{
    xTo.current = gsap.quickTo(".flair", "x", {
      duration : .4,
      ease : "power2",
      // scale : mouseState ? 2 : 1
      
    });
    yTo.current = gsap.quickTo(".flair", "y", {
      duration : .5,
      ease : "power2"
    })
    gsap.to(".flair", {
      scale : mouseState ? 3 : 1
    })
  }, {
    scope : app,
    dependencies : [mouseState]
  })
  
  const moveShape = contextSafe((e)=>{
    xTo.current(e.clientX)
    yTo.current(e.clientY)
    const { target } = e;
    const targetClosest = target?.closest("a") || target?.closest("button")
    setMouseState(targetClosest)
    // console.log(targetClosest)
  })
  return (
    <div 
    className="w-full min-h-screen"
    ref={app}
    onMouseMove={moveShape}
    >
      <div className="flair w-5 h-5 rounded-full fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 mix-blend-difference bg-yellow-500 z-[100000] pointer-events-none"/>
      { children }
    </div>
  )
}

export default MouseProvider
