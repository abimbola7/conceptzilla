"use client"
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

const MouseProvider = ({ children }) => {
  const app = React.useRef();
  const xTo = React.useRef();
  const yTo = React.useRef();
  const { context, contextSafe } = useGSAP(()=>{
    xTo.current = gsap.quickTo(".flair", "x", {
      duration : 1,
      ease : "power2"
    });
    yTo.current = gsap.quickTo(".flair", "y", {
      duration : 1,
      ease : "power2"
    })
  }, {
    scope : app
  })
  
  const moveShape = contextSafe((e)=>{
    xTo.current(e.clientX)
    yTo.current(e.clientY)
  })
  return (
    <div 
    className="w-full min-h-screen"
    ref={app}
    onMouseMove={moveShape}
    >
      <div className="flair w-5 h-5 rounded-full fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 backdrop-invert z-[100000] pointer-events-none"/>
      { children }
    </div>
  )
}

export default MouseProvider
