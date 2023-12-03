import React from 'react'

const DeviceCard = ({ data }) => {
     return (
          <div className='flex w-full shadow-lg h-max  px-10 sm:px-20 py-3 justify-between items-center
          bg-slate-100 border-main border-2 rounded-md text-black hover:text-secondary hover:bg-main font-bold'>
               <div className='flex gap-2 flex-col'>
                    <h1>Device ID : {data.device_id}</h1>
                    <h1>User ID : {data.user_id}</h1>
               </div>
               <div className='flex sm:gap-10 gap-2'>
                    <button className='hover:bg-secondary px-5 py-1 rounded-lg hover:text-main'
                         onClick={e => router.push(`/account/report/tracking/`)}>Delete</button>
               </div>
          </div>
     )
}

export default DeviceCard