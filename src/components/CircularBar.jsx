'use client'

import { useMonitoringContext } from '../hooks/useMonitoringContext';

import React, { useEffect, useState } from 'react'
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularBar= () => {
     
     const [value, setValue] = useState({
          value1 : 0,
          value2 : 0,
          value3 : 0,
          value4 : 0,
     });
     
     const {dispatchMonitoring} =  useMonitoringContext()

     useEffect(()=>{
          getMonitoring()
          const interval = setInterval(() => {
               getMonitoring()
             }, 1000);
          return () => clearInterval(interval);
     },[])

     const getMonitoring = async ()=>{
          const response = await fetch('https://gedanglis.vercel.app/api/monitoring')
          const result = await response.json()
          const datas = result.monitoring
          setValue({
               value1: parseFloat(datas.daya),
               value2: parseFloat(datas.tegangan),
               value3: parseFloat(datas.arus),
               value4: parseFloat(datas.baterai),
          })
     }

     return (
          <div className='grid grid-cols-2  gap-10 h-full p-10'>
               <div className='hover:cursor-pointer hover:scale-90 transition-all' style={{ width: 170, height: 170 }} onClick={()=>dispatchMonitoring({type:"SHOW", payload:0})}>
                    <CircularProgressbar value={(value.value1)/500*100} text={`${value.value1} W`} strokeWidth={15} styles={
                         buildStyles({
                              strokeLinecap: 'round',
                              textSize: '20px',
                              pathTransitionDuration: 0.5,
                              pathColor: `rgba(53,129,184 ,${(value.value1)/1000*100/100})`,
                              textColor: '#121212',
                              trailColor: '#E2E2E2',
                              backgroundColor: '#3e98c7',
                         })
                    } />

               </div>
               <div className='hover:cursor-pointer hover:scale-90 transition-all' style={{ width: 170, height: 170  }} onClick={()=>dispatchMonitoring({type:"SHOW", payload:1})}>
                    <CircularProgressbar value={(value.value2)/200*100} text={`${value.value2} V`} strokeWidth={15} styles={
                         buildStyles({
                              strokeLinecap: 'round',
                              textSize: '20px',
                              pathTransitionDuration: 0.5,
                              pathColor: `rgba(53,129,184,${(value.value2)/200*100/ 100})`,
                              textColor: '#121212',
                              trailColor: '#E2E2E2',
                              backgroundColor: '#3e98c7',
                         })
                    } />
               </div>
               <div className='hover:cursor-pointer hover:scale-90 transition-all' style={{width: 170, height: 170 }} onClick={()=>dispatchMonitoring({type:"SHOW", payload:2})}>
                    <CircularProgressbar value={(value.value3/10*100)} text={`${value.value3} A`} strokeWidth={15} styles={
                         buildStyles({
                              strokeLinecap: 'round',
                              textSize: '20px',
                              pathTransitionDuration: 0.5,
                              pathColor: `rgba(53,129,184,${(value.value3/10*100)/ 100})`,
                              textColor: '#121212',
                              trailColor: '#E2E2E2',
                              backgroundColor: '#3e98c7',
                         })
                    } />
               </div>
               <div className='hover:cursor-pointer hover:scale-90 transition-all' style={{ width: 170, height: 170  }} onClick={()=>dispatchMonitoring({type:"SHOW", payload:3})}>
                    <CircularProgressbar value={value.value4} text={`${value.value4} %`} strokeWidth={15} styles={
                         buildStyles({
                              strokeLinecap: 'round',
                              textSize: '16px',
                              pathTransitionDuration: 0.5,
                              pathColor: `rgba(53,129,184 ,${value.value4/ 100})`,
                              textColor: '#121212',
                              trailColor: '#E2E2E2',
                              backgroundColor: '#3e98c7',
                         })
                    } />
               </div>
          </div>
     )
}

export default CircularBar