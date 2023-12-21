'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const CardTeam = ({ image, nama, role, children }) => {
     const [click, setClick] = useState(false)
     return (
          <div className='w-[300px] h-auto drop-shadow-2xl first:' onClick={e => setClick(!click)} >
               <div className='w-full h-max bg-black  overflow-clip rounded-t-xl'>
                    <Image src={image} quality={60} alt="team"
                         className='hover:scale-105 transition-all hover:opacity-70 rounded-t-xl' />
               </div>
               <div className='w-full h-2/6 p-5 gap-1 flex flex-col bg-secondary items-center justify-center rounded-b-xl leading-3'>
                    <h4 className='font-bold text-md'>{nama}</h4>
                    <h6 className='text-sm'><i>Electrical Engineering 21</i></h6>
                    <h5 className='text-md font-semibold mt-3'>{role}</h5>
                    <h6 className='text-sm'>{children}</h6>
               </div>




          </div>
     )
}

export default CardTeam