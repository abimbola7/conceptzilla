"use client"
import React from 'react'

const Tl = () => {
  return (
    <div className='w-full grid grid-cols-6 px-10 gap-x-1'>
      <div className="col-span-1 borde grid grid-rows-2">
        <div className="diamond"></div>
        <div className="border-none"></div>
      </div>
      <div className="col-span-1 borde grid grid-rows-2">
        <div className="diamond"></div>
        <div className="border-none"></div>
      </div>
      <div className="col-span-3 borde grid grid-rows-2">
        <div className="diamond"></div>
        <div className="border-none"></div>
      </div>
      <div className="col-span-1 borde grid grid-rows-2">
        <div className="diamond"></div>
        <div className="border-none"></div>
      </div>
    </div>
  )
}

export default Tl
