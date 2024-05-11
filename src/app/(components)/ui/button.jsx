"use client"
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";

const Button = ({ children, className, color, title, icon }) => {
  return (
    <button className={`${className} hover:bg-[#F4C644]`}>
      {
        icon && <IoBasketballOutline size={27} color={color} className='inline-block mr-3'/>
      }
      { title }
      <FaArrowRightLong size={16} color={color} className='inline-block ml-3'/>
    </button>
  )
}

export default Button
