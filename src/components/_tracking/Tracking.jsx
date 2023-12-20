'use client'

import React, { useEffect, useState, useMemo } from 'react'
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
          getHistory()
          const interval = setInterval(() => {
               getTracking()
          }, 1000);
          return () => clearInterval(interval);
     }, [deviceID])

     const getTracking = async () => {
          try {
               const response = await fetch(`${process.env.BASE_PROTOCOL}${process.env.BASE_URL}/api/tracking/sget/${deviceID}`, {
                    method: "GET",
                    headers: {
                         'Content-Type': 'application/json;charset=utf-8',
                         "authorization": `Bearer ${user.token}`
                    }
               })
               const result = await response.json()
               const location = result.position
               setDevicePosition([location.rt_lat, location.rt_long])
          } catch { setDevicePosition([0, 0]) }
     }

     const getHistory = async () =>{
          try{
               const response = await fetch(`${process.env.BASE_PROTOCOL}${process.env.BASE_URL}/api/tracking/sget/none/${deviceID}`,{
                    method: "GET",
                    headers: {
                         'Content-Type': 'application/json;charset=utf-8',
                    }
               })
               const result = await response.json()
               const history = result.data
               var parseData = history.map(h => [h.lat , h.lng])
               setHistoryData(parseData)
          }catch{
               setHistoryData([
                    [-7.563666, 110.855615],
                    [-7.565666, 110.857615],
                    [-7.564666, 110.858034]
               ]);
          }
     }

     const { user } = useAuthContext()
     const [showUserPosition, setShowUserPosition] = useState(false)
     const [userPos, setUserPos] = useState([0, 0])
     const [showHistory, setShowHistory] = useState(false)
     const [devicePosition, setDevicePosition] = useState([-7.562678, 110.853736])
     const [historyData, setHistoryData] = useState([
          [-7.563666, 110.855615],
          [-7.565666, 110.857615],
          [-7.564666, 110.858034]
     ])
     function getLocation() {
          if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(showPosition);
          }
     }

     function showPosition(position) {
          setUserPos([position.coords.latitude, position.coords.longitude])
     }

     const displayMap = useMemo(
          () => (
               <Map history={historyData}
                    position={devicePosition}
                    showHistory={showHistory}
                    showUserPos={showUserPosition}
                    userPos={userPos} />
          ),
          [devicePosition, showHistory, showUserPosition]
     )

     return (
          <div className="p-2 sm:w-full h-[90%] flex flex-col sm:flex-row gap-5 items-start justify-center  top-[10vh] rounded-xl shadow-2xl">
               {displayMap}
               <div className="w-full sm:w-auto h-[max-content] sm:grid sm:gap-5 gap-2 flex flex-col p-10 justify-center items-center">
                    <button className={"bg-main px-5 py-2 rounded-xl text-secondary hover:scale-105"} onClick={e => setShowHistory(!showHistory)}>Show History</button>
                    <button className={"bg-main px-5 py-2 rounded-xl text-secondary hover:scale-105"} onClick={e => setShowUserPosition(!showUserPosition)}>Show Your Position</button>
               </div>
          </div>
     )
}

export default Tracking