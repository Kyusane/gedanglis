'use client'

import { useMonitoringContext } from '../hooks/useMonitoringContext'
import React ,{ useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Loading from './Loading'

const CircularBar = dynamic(() => import('./CircularBar')
     , {
          ssr: false,
          loading: () => <Loading />
     })

const Graph = dynamic(() => import('./Graph')
     , {
          ssr: false,
          loading: () => <Loading />
     })

const Monitoring = ({deviceID}) => {
     const [value, setValue] = useState({
          value1 : 0,
          value2 : 0,
          value3 : 0,
          value4 : 0,
     });

     useEffect(()=>{
          getMonitoring()
          const interval = setInterval(() => {
               getMonitoring()
          }, 3000);
          return () => clearInterval(interval);
     },[deviceID])

     const getMonitoring = async ()=>{
          const response = await fetch(`http://${process.env.BASE_URL}/api/monitoring/sget/${deviceID}`,{
               method: "GET",
               headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "authorization" : `Bearer ${localStorage.getItem("token")}`
               }
          })
          const result = await response.json()
          const datas = result.datas[0]
          setValue({
               value1: parseFloat(datas.rt_daya),
               value2: parseFloat(datas.rt_tegangan),
               value3: parseFloat(datas.rt_arus),
               value4: parseFloat(datas.rt_baterai),
          })
     }

     const { showSection } = useMonitoringContext()
     const graphData = [
          [3, 13, 1, 55, 123, 545, 12, 3, 4, 12, 3, 3, 5],
          [1, 4, 2, 1, 543, 123, 123, 45, 77, 123, 544, 213, 123],
          [123, 45, 65, 65, 87, 134, 324, 123, 454, 123, 123, 123],
          [100, 98, 97, 95, 91, 89, 87, 86, 81, 78, 70, 67,65]
     ]

     return (
          <div>
               <div className="p-2 w-full h-max sm:grid sm:grid-cols-3 gap-5 items-center rounded-sm sm:top-[10vh] rounded-xl shadow-2xl">
                    <div className="sm:col-span-2">
                         <Graph graphData={graphData[showSection]} />
                    </div>
                    <CircularBar value={value} />
               </div>
          </div>
     )
}

export default Monitoring