'use client'

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = ({ history, showHistory, showUserPos, userPos, position }) => {
     const zoom = 9;
     return (
          <>
               <MapContainer className={"sm:w-3/4 w-full h-[70vh]"} center={position} zoom={zoom} scrollWheelZoom={true}>
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
                                   <Marker position={[p.lat, p.long]} key={p.lat}>
                                        <Popup>
                                             A pretty CSS3 popup. <br /> Easily customizable.
                                        </Popup>
                                   </Marker>))
                              : null
                    }
               </MapContainer>
          </>

     )
}

export default Map
