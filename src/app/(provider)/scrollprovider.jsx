"use client"
import React from 'react'
import ReactLenis from '@studio-freight/react-lenis'



export default function ScrollProvider({ children }) {
  const lenisOptions = {
    lerp : .1, 
    duration : 3,
    smoothTouch : false,
    smooth : true
  }
  return (
    <ReactLenis
    root
    options={{
      lerp : 0.1,      
      duration : 6,
      smoothWheel : true,
      smooth : true
    }}
    >
      { children }
    </ReactLenis>
  )
}
