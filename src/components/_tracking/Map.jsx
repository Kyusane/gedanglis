'use client'

import { MapContainer, Marker, TileLayer, Popup, useMapEvents, Polyline} from "react-leaflet"
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
                    {
                         showHistory ?
                              (
                                   <Polyline pathOptions={{ color: 'blue', weight:'10'}}  positions={history} />
                              )
                              : null
                    }

               </MapContainer>
          </>
     )
}

export default Map
