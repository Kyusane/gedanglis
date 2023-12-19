'use client'

import { MapContainer, Marker, TileLayer, Popup, useMapEvents, Circle, Polyline} from "react-leaflet"
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = ({ history, showHistory, showUserPos, userPos, position }) => {
     const zoom = 17;
     const lokasi = { lat: position[0], lng: position[1] }
     function LocationMarker() {
          const map = useMapEvents({
               click() {
                    map.flyTo(lokasi, 17)
               }
          })
     }

     return (
          <>
               <MapContainer className={"sm:w-3/4 w-full sm:h-[70vh] h-screen"}
                    center={position}
                    zoom={zoom}
                    scrollWheelZoom={true}
               >
                    <TileLayer
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />
                    <Marker position={position}>
                         <Popup>gerobak</Popup>
                    </Marker>
                    <Circle center={position} pathOptions={{ fillColor: 'blue' }} radius={30} />
                    {
                         showUserPos ? <Marker position={userPos}><Popup>Your Position</Popup></Marker> : null
                    }
                    {
                         // showHistory ?
                         //      (history.map(p =>
                         //           <Circle center={[p.lat, p.long]} pathOptions={{ color: 'blue' }} radius={30} />))
                         //      : null
                         showHistory ?
                              (
                                   <Polyline pathOptions={{ color: 'lime', weight:'10'}}  positions={history} />
                              )
                              : null
                    }

               </MapContainer>
          </>
     )
}

export default Map
