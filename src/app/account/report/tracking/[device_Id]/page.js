'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const page = ({ params }) => {
     const router = useRouter()
     const [reportData, setReportData] = useState(null)
     const [selectDate, setSelectDate] = useState(new Date().toLocaleString('id-ID', { timeZone: 'Asia/Bangkok' }).slice(0, 10))

     useEffect(() => {
          getReportData()
     }, [selectDate])

     const getReportData = async () => {
          try {
               const date = selectDate.replaceAll('/', '%2F')
               const response = await fetch(`${process.env.BASE_PROTOCOL}${process.env.BASE_URL}/api/report/tracking/${decodeURIComponent(params.device_Id)}/${date}`)
               const result = await response.json()
               setReportData(result.data)
          } catch { }
     }

     function selectDateHandler(e) {
          e.preventDefault()
          setSelectDate(parseDate(e.target.value))
     }

     function parseDate(date) {
          var day = date.slice(8, 11)
          var month = date.slice(5, 7)
          var year = date.slice(0, 4)
          var pdate = `${day}/${month}/${year}`
          return pdate
     }

     return (
          <div className="w-full h-screen bg-secondary p-10">
               <button
                    onClick={e => router.back()}
                    className='px-10 py-3 rounded-lg bg-main text-secondary hover:cursor-pointer hover:scale-105 transition-all'>Back</button>
               <div className="py-5">
                    <table className="w-1/2">
                         <tr>
                              <th>Device_ID</th>
                              <th className='px-5'>{decodeURIComponent(params.device_Id)}</th>
                         </tr>
                         <tr>
                              <th>Type</th>
                              <th className='px-5'>Tracking</th>
                         </tr>
                         <tr>
                              <th>Date</th>
                              <th><input type='date' className='text-black px-5' onChange={selectDateHandler}></input></th>
                         </tr>
                    </table>
               </div>
               <div className='w-full h-max overflow-scroll'>
                    <table >
                         <tr className='text-secondary'>
                              <th className='border-none bg-main rounded-tl-md'>Timestamp</th>
                              <th className='border-none bg-main '>Latitude</th>
                              <th className='border-none bg-main rounded-tr-md'>Longitude</th>
                         </tr>
                         {reportData && reportData.map(r =>
                              <tr key={r._id}>
                                   <td>{r.date}-{r.time}</td>
                                   <td>{r.lat}</td>
                                   <td>{r.lng}</td>
                              </tr>)}
                         {
                              reportData == null ? <h2 className='p-10'>Data tidak ditemukan</h2> : null
                         }
                    </table>
               </div>

          </div>
     )
}

export default page