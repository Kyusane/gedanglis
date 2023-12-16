import React from 'react'
import Image from 'next/image'

const CardTeam = ({image}) => {
     return (
          <div className='w-[300px] h-auto drop-shadow-2xl '>
               <div className='w-full h-max bg-black  overflow-clip rounded-t-xl'>
                    <Image src={image} alt="track" 
                    className='hover:scale-105 transition-all hover:opacity-70 rounded-t-xl' />
               </div>
               <div className='w-full h-2/6 p-5 gap-3 flex flex-col bg-secondary items-center justify-center rounded-b-xl'>
                    <h4 className='font-bold text-xl'>Riyadh Pratama Saputra</h4>
                    <h4 className='text-xl'>Chief Executive Officer</h4>
                    <h5><i>Electrical Engginering 21</i></h5>
               </div>
          </div>
     )
}

export default CardTeam