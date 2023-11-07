'use client'

import React from 'react'
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = ({ history, showHistory, showUserPos , userPos }) => {

     const position = [-7.562678, 110.853736];
     const zoom = 16;

     return (
          <div>
               <MapContainer className={"w-full h-[70vh]"} center={position} zoom={zoom} scrollWheelZoom={true}>
                    <TileLayer
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                         <Popup>
                              gerobak
                         </Popup>
                    </Marker>
                    {
                         showUserPos ?
                              <Marker position={userPos}>
                                   <Popup>
                                        Your Position
                                   </Popup>
                              </Marker> : null
                    }

                    {
                         showHistory ?
                              (history.map(p =>
                                   <Marker position={[p.lat, p.long]}>
                                        <Popup>
                                             A pretty CSS3 popup. <br /> Easily customizable.
                                        </Popup>
                                   </Marker>))
                              : null
                    }
               </MapContainer>

          </div>
     )
}

export default Map
