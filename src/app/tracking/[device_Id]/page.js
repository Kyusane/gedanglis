'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { MapContainer, Marker, TileLayer, Popup, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const page = ({ params }) => {
     useEffect(() => {
          if (params.device_Id.includes('GDL-')) {
               getTracking()
               const interval = setInterval(() => {
                    getTracking()
               }, 1000);
               return () => clearInterval(interval);
          } else {
               setPosition(params.device_Id.split('I'))
          }
     }, [params.device_Id])

     function LocationMarker() {
          const map = useMapEvents({
               click() {
                    map.flyTo(position, 17)
               }
          })
     }

     const getTracking = async () => {
          try {
               const response = await fetch(`http://${process.env.BASE_URL}/api/tracking/sget/${params.device_Id}`, {
                    method: "GET",
                    headers: {
                         'Content-Type': 'application/json;charset=utf-8',
                         "authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJtYXN0ZXJAZ2VkYW5nbGlzLmNvbSIsImlhdCI6MTcwMTQwODE3MywiZXhwIjoxNzAxNjY3MzczfQ.FKUSiFewdTzqJ9LYqA23Oz9IZAlPirZys--RatNGiBE`
                    }
               })
               const result = await response.json()
               const location = result.position[0]
               setPosition([parseFloat(location.rt_lat), parseFloat(location.rt_long)])
          } catch {
               setPosition([-7.562678, 110.853736])
          }
     }
     const [position, setPosition] = useState([-7.562678, 110.853736])
     const zoom = 17;
     const router = useRouter();
     return (
          <>
               <button
                    onClick={e => router.back()}
                    className=' hover:scale-105 z-[999] fixed px-10 py-3 bg-main rounded-lg right-0 text-secondary mt-5 mr-5'>BACK</button>
               <MapContainer className={"w-full h-screen"} center={position} zoom={zoom} scrollWheelZoom={true}>
                    <TileLayer
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />
                    <Marker position={position}>
                         <Popup>
                              Location
                         </Popup>
                    </Marker>
               </MapContainer>
          </>

     )
}

export default page
