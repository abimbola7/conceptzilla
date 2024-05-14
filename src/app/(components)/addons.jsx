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
  return (
    <div className={`w-full px-3 py-32 text-white ${londrina_solid.className} mb-20 min-h-screen`}>
      <div className="flex flex-col tab:flex-row max-w-3xl tab:max-w-6xl mx-auto gap-y-20 tab:space-x-20">
        <div className='w-full tab:w-[35%] flex flex-col space-y-16'>
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

        <div className='w-full tab:w-[65%] border-none grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {
            addons.length > 0 && addons.map((addon, i)=>(
              <div className='bg-[#131213] rounded-2xl p-5 space-y-4 relative' key={i}>
                {
                  addon.premium && 
                  <div className="absolute -top-5  rounded-2xl w-full h-full -z-[1] left-0 bg-[#F4C644] text-center tracking-wider text-[#333333]">
                    PREMIUM
                  </div>
                }
                <h1 className='text-2xl font-[400] tracking-wider !m-0'>
                  { addon.title }
                </h1>
                <div className="min-h-28">
                  <p className='text-[#858479] text-lg tracking-wider font-light'>
                    {
                      addon.description
                    }
                  </p>
                </div>

                <div className='border-t pt-3 border-t-[#262524] text-[#858479] text-lg tracking-wider font-light space-y-3'>
                  <div className="flex flex-row justify-between">
                    <p>
                      Estimated time 
                    </p>
                    <p className='text-white'>
                      {
                        addon.est_time
                      }
                    </p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>
                      Price
                    </p>
                    <p className='text-white'>
                      ${
                        addon.price
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Addons
