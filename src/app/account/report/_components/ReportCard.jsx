import React from 'react'
import { useRouter } from 'next/navigation'

const ReportCard = ({ device_id }) => {
     const router = useRouter()
     return (
          <div className='flex w-full shadow-lg h-max  px-10 sm:px-20 py-5 justify-between items-center
          bg-slate-100 border-main border-2 rounded-md text-black hover:text-secondary hover:bg-main font-bold'>
               <h1>{device_id}</h1>
               <div className='flex sm:gap-10 gap-2 flex-col sm:flex-row'>
                    <button className='hover:bg-secondary px-5 py-1 rounded-lg hover:text-main' onClick={e => router.push(`/account/report/monitoring/${device_id}`)}>Monitoring</button>
                    <button className='hover:bg-secondary px-5 py-1 rounded-lg hover:text-main' onClick={e => router.push(`/account/report/tracking/${device_id}`)}>Tracking</button>
               </div>
          </div>
     )
}

export default ReportCard