'use client'

import { useMonitoringContext } from '../../hooks/useMonitoringContext'
import { useAuthContext } from "@/hooks/useAuthContext"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Loading from '../_loading/Loading'

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

const Monitoring = ({ deviceID }) => {
     const [value, setValue] = useState({
          value1: 0,
          value2: 0,
          value3: 0,
          value4: 0,
     });

     useEffect(() => {
          getMonitoring()
          getGraphData()
          const interval = setInterval(() => {
               getMonitoring()
          }, 1000);
          return () => clearInterval(interval);
     }, [deviceID])

     const getMonitoring = async () => {
          const response = await fetch(`http://${process.env.BASE_URL}/api/monitoring/sget/${deviceID}`, {
               method: "GET",
               headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "authorization": `Bearer ${user.token}`
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
     const { user } = useAuthContext()
     const { showSection } = useMonitoringContext()
     const [graphDatas, setGraphDatas] = useState([
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     ])

     const getGraphData = async () => {
          const date = new Date().toLocaleString("id-ID",{timeZone: "Asia/Jakarta"}).slice(0,10).replaceAll('/','$2F');          
          const response = await fetch(`http://${process.env.BASE_URL}/api/monitoring/graph/${deviceID}/${date}`, {
               method: "GET",
               headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "authorization": `Bearer ${user.token}`
               }
          })
          const result = await response.json()
          const data = result.data
          var graphData = [
               [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          ]
          data.map(d => {
               const index = d.waktu.slice(0,2) - 6
               graphData[0][index] = d.daya
               graphData[1][index] = d.tegangan
               graphData[2][index] = d.arus
               graphData[3][index] = d.baterai
          })
          setGraphDatas(graphData);
     }
     return (
          <div>
               <div className="p-2 w-full h-max sm:grid sm:grid-cols-3 gap-5 items-center rounded-sm sm:top-[10vh] rounded-xl shadow-2xl">
                    <div className="sm:col-span-2">
                         <Graph graphData={graphDatas[showSection]} />
                    </div>
                    <CircularBar value={value} />
               </div>
          </div>
     )
}

export default Monitoring