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

const Monitoring = () => {
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
             }, 1000);
          return () => clearInterval(interval);
     },[])

     const getMonitoring = async ()=>{
          const response = await fetch(`http://${process.env.BASE_URL}/api/monitoring`)
          const result = await response.json()
          const datas = result.monitoring
          setValue({
               value1: parseFloat(datas.daya),
               value2: parseFloat(datas.tegangan),
               value3: parseFloat(datas.arus),
               value4: parseFloat(datas.baterai),
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
               <div className="p-2 w-full h-[90%]  grid grid-cols-3 gap-5 items-center rounded-sm top-[10vh] rounded-xl shadow-2xl">
                    <div className="col-span-2">
                         <Graph graphData={graphData[showSection]} />
                    </div>
                    <CircularBar value={value} />
               </div>
          </div>


     )
}

export default Monitoring