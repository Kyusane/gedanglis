'use client'
import React, { useState , useEffect} from 'react'
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


const page = ({ params }) => {
     useEffect(() => {
          getTracking()
          const interval = setInterval(() => {
               getTracking()
          }, 1000);
          return () => clearInterval(interval);
     }, [params.device_Id])

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
     const zoom = 10;
     return (
          <>
               <MapContainer className={"w-full h-[90vh]"} center={position} zoom={zoom} scrollWheelZoom={true}>
                    <TileLayer
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                         <Popup>
                              gerobak
                         </Popup>
                    </Marker>
               </MapContainer>
          </>

     )
}

export default page
