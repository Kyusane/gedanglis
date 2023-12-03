'use client'

import React, { useEffect, useState } from 'react'
import { useAuthContext } from "@/hooks/useAuthContext"
import dynamic from 'next/dynamic'
import Loading from '../_loading/Loading'

const Map = dynamic(() => import('./Map')
     , {
          ssr: false,
          loading: () => <Loading />
     })

const Tracking = ({ deviceID }) => {
     useEffect(() => {
          getLocation()
          getTracking()
          const interval = setInterval(() => {
               getTracking()
          }, 1000);
          return () => clearInterval(interval);
     }, [deviceID])

     const getTracking = async () => {
          try {
               const response = await fetch(`http://${process.env.BASE_URL}/api/tracking/sget/${deviceID}`, {
                    method: "GET",
                    headers: {
                         'Content-Type': 'application/json;charset=utf-8',
                         "authorization": `Bearer ${user.token}`
                    }
               })
               const result = await response.json()
               const location = result.position[0]
               setDevicePosition([parseFloat(location.rt_lat), parseFloat(location.rt_long)])
          } catch { setDevicePosition([0, 0]) }

     }
     const { user } = useAuthContext()
     const [showUserPosition, setShowUserPosition] = useState(false)
     const [userPos, setUserPos] = useState([0, 0])
     const [showHistory, setShowHistory] = useState(false)
     const [devicePosition, setDevicePosition] = useState([-7.562678, 110.853736])
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
          setUserPos([position.coords.latitude, position.coords.longitude])
     }

     return (
          <div className="p-2 sm:w-full h-[90%] flex flex-col sm:flex-row gap-5 items-start justify-center  top-[10vh] rounded-xl shadow-2xl">
               <Map history={history} position={devicePosition} showHistory={showHistory} showUserPos={showUserPosition} userPos={userPos} />
               <div className="w-full sm:w-auto h-[max-content] sm:grid sm:gap-5 gap-2 flex flex-col p-10 justify-center items-center">
                    <button className={"bg-main px-5 py-2 rounded-xl text-secondary hover:scale-105"} onClick={e => setShowHistory(!showHistory)}>Show History</button>
                    <button className={"bg-main px-5 py-2 rounded-xl text-secondary hover:scale-105"} onClick={e => setShowUserPosition(!showUserPosition)}>Show Your Position</button>
               </div>
          </div>
     )
}

export default Tracking