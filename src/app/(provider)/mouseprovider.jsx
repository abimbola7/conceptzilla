"use client"
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

const MouseProvider = ({ children }) => {
  const app = React.useRef();
  const xTo = React.useRef();
  const yTo = React.useRef();
  const [ divState, setDivState ] = React.useState(null)
  const [ mouseState, setMouseState ] = React.useState(null)
  const { context, contextSafe } = useGSAP(()=>{
    console.log(divState)
    xTo.current = gsap.quickTo(".flair", "x", {
      duration : .4,
      ease : "power2",
    });
    yTo.current = gsap.quickTo(".flair", "y", {
      duration : .5,
      ease : "power2"
    })

    !divState && gsap.to(".flair", {
      scale : mouseState ? 3 : 1
    })

    !mouseState && gsap.to(".flair", {
      scale : divState ? 5 : 1
    })
  }, {
    scope : app,
    dependencies : [mouseState, divState]
  })
  
  
  const moveShape = contextSafe((e)=>{
    xTo.current(e.clientX)
    yTo.current(e.clientY)
    const { target } = e;
    const targetClosest = target?.closest("a") || target?.closest("button")
    const divClosest = target?.closest(".video1")
    setMouseState(targetClosest);
    setDivState(divClosest);
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
