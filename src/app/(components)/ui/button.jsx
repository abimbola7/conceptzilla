"use client"
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Button = ({ children, className, color, title }) => {
  return (
    <button className={`${className}`}>
      { title }
      <FaArrowRightLong size={16} color={color} className='inline-block ml-3'/>
    </button>
  )
}

export default Button
