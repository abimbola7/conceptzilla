import React from 'react'
import Nav from './nav'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './hero';

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const [ tl, setTl ] = React.useState(null)
  const container = React.useRef()
  const { context, contextSafe } = useGSAP(()=>{
    const time =  gsap.timeline({
      scrollTrigger : {
        trigger : container.current,
        start : "top top",
        end : `+=${container.current.clientHeight}`,
        scrub : 2,
        markers : true,
        // pin : true
      }
    })
    setTl(time)
  }, {
    scope : container
  })
  return (
    <header className='bg-customBlack w-full' ref={container}>
      <Nav timeline={tl}/>
      <Hero />
    </header>
  )
}

export default Header
