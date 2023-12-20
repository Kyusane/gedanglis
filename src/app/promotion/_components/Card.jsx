'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({ img, Title , location}) => {
     return (
          <div  className=' bg-indigo-200 
          hover:scale-105 transition-all hover:cursor-pointer border-indigo-300 border-2 justify-center flex items-center gap-5 rounded-2xl flex-col shadow-2xl  '>
               <Image src={img} quality={60} className='rounded-2xl' />
               <div className='w-full p-5 gap-5 flex flex-col '>
                    <h2 className='text-main font-bold'>{Title}</h2>
                    <Link href={`${process.env.BASE_PROTOCOL}${process.env.BASE_URL_SELF}/tracking/${location[0]}I${location[1]}`} className="w-36 h-auto px-7 py-3 bg-blue-500  transition-all hover:scale-110 rounded-3xl text-white text-center" >
                         Show
                    </Link>
               </div>
          </div>
     )
}
export default Card