'use client'
import React, { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'
import Loading from './Loading'

const Map = dynamic(() => import('./Map')
  , {
    ssr: false,
    loading: () => <Loading />
  })


const Tracking = () => {
     useEffect(()=>{
          getLocation()
          getTracking()
          const interval = setInterval(() => {
               getTracking()
             }, 1000);
          return () => clearInterval(interval);
     
     },[])

     const getTracking = async ()=>{
          const response = await fetch('http://localhost:3000/api/tracking')
          const result = await response.json()
          const location = result.location
          // setDevicePosition([parseFloat(location.latitude), parseFloat(location.longitude)])
          setDevicePosition([location.latitude, location.longitude])
     }
     
     const [showUserPosition, setShowUserPosition] = useState(false)
     const [userPos, setUserPos] = useState([0,0])

     const [showHistory, setShowHistory] = useState(false)
     const [devicePosition, setDevicePosition] = useState([-7.562678,110.853736])

     const history = [
          {
               lat: -7.5510,
               long: 110.8635
          },

          {
               lat: -7.5580,
               long: 110.8710
          },

          {
               lat: -7.5590,
               long: 110.8650
          },

     ]

     function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          }
        }
        
        function showPosition(position) {
          setUserPos([position.coords.latitude,position.coords.longitude])
        }

     return (
          <div className="p-2 w-full h-[90%] flex gap-5 items-start  top-[10vh] rounded-xl shadow-2xl">
               <Map history={history} position={devicePosition} showHistory={showHistory} showUserPos={showUserPosition} userPos={userPos} />
               <div className=" h-[max-content] grid gap-5 p-10">
                    <button className={"bg-main px-5 py-2 rounded-xl text-secondary hover:scale-105"} onClick={e => setShowHistory(!showHistory)}>Show History</button>
                    <button className={"bg-main px-5 py-2 rounded-xl text-secondary hover:scale-105"} onClick={e => setShowUserPosition(!showUserPosition)}>Show Your Position</button>
               </div>
          </div>
     )
}

export default Tracking