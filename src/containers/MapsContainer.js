import React from 'react';
import {Map} from '../components'
import {showDataOnMap} from '../utils/util'
import '../utils/util.css'
import {  MapContainer, TileLayer } from "react-leaflet";
export function MapsContainer({countries,casesType,center,zoom}){
    console.log("test",casesType)
    return(
        <Map>
           <MapContainer center={center} zoom={zoom} style={{height:"100%"}}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries,casesType)}
            </MapContainer>
        </Map>
    )
}