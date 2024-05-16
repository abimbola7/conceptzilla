"use client"
import React from "react";
import Image from "next/image";
import Header from "./(components)/header";
import HeroVideo from "./(components)/herovideo";
import Offer from "./(components)/offer";
import Lenis from "@studio-freight/lenis";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Result from "./(components)/result";
import Recent from "./(components)/recent";
import Timeline from "./(components)/timeline";
import Rules from "./(components)/rules";
import Addons from "./(components)/addons";
import Questions from "./(components)/questions";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  // React.useEffect(()=>{
  //   const lenis = new Lenis();

  //   lenis.on("scroll", (e)=>{
  //     console.log(e.velocity)
  //   })
  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])
  
  // useGSAP(()=>{
  //   const lenis = new Lenis();
  //   lenis.on("scroll", (e)=>{
  //     console.log(e)
  //   })

  //   lenis.on("scroll", ScrollTrigger.update)
  //   gsap.ticker.add(time=>{
  //     lenis.raf(time * 200)
  //   })

  //   gsap.ticker.lagSmoothing(100)
  // })
  return (
    <>
      <Header />
      <HeroVideo />
      <Offer />
      <Result />
      <Recent />
      <Timeline />
      <Rules />
      <Addons />
      <Questions />
    </>
  );
}
