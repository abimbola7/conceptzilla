"use client"
import React from 'react'
import { londrina, londrina_solid } from '../fonts'
import { TiArrowRightOutline } from "react-icons/ti";
import Button from './ui/button';


const Addons = () => {
  const [ addons, setAddons ] = React.useState([])

  const getAddons = async () => {
    const res = await fetch(`/content/addons.json`)
    const content = await res.json()
    return content
  }
  React.useEffect(()=>{
    getAddons().then(data=>{
      setAddons(data)
    })
  }, [])
  console.log(addons)
  return (
    <div className={`min-h-screen w-full px-3 py-32 text-white ${londrina_solid.className}`}>
      <div className="flex flex-row max-w-7xl mx-auto space-x-10">
        <div className='h-screen w-[35%] flex flex-col space-y-16'>
          <h1 className={`${londrina_solid.className} text-7xl tracking-wide`}>
            <span className={`${londrina.className} block`}>
              DESIGN <TiArrowRightOutline className='inline-block mb-2' />
            </span>
            ADD-ONS
          </h1>

          <p className='text-xl font-light tracking-wider'>
          Depending on the state of the idea, some concepts might benefit from additional services we have to offer. There add-ons are a part of a larger scope and they are instrumental in the success of the concept.
          </p>

          <Button
          className={"bg-[#F4C644] rounded-full py-5 px-10 w-fit normal-case text-black font-bold text-xl"}
          title={"Order a Concept"}
          color={"#000"}
          />
        </div>

        <div className='h-screen w-[65%] border-none grid grid-cols-2 gap-6'>
          {
            addons.length > 0 && addons.map((addon, i)=>(
              <div className='bg-[#131213] rounded-2xl p-6 space-y-4' key={i}>
                <h1 className='text-2xl font-[400] tracking-wider'>
                  { addon.title }
                </h1>
                <p className='text-[#858479] text-xl tracking-wider font-light'>
                  {
                    addon.description
                  }
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Addons
