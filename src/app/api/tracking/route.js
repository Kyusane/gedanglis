
import { NextResponse } from "next/server";
import datas from "../../../lib/generated.json"
var data = 0;

var realTrack = [{
    latitude : '-7.562678',
   longitude : '110.853736'
}]

// export const GET = async(req) =>{
//      if(data <= datas.length -2){
//           data++
//      }else if(data == datas.length-1){
//           data=0;
//      }
//      return Response.json({
//           message : "Berhasil Ambil Data",
//           location :datas[data]
//      })
// }

export const GET = async(req) =>{
     return Response.json({
          message : "Berhasil Ambil Data",
          location :realTrack[0]
     })
}

export async function POST(req){
     const {latitude, longitude} = await req.json()
     realTrack = [{
          latitude : latitude,
          longitude : longitude
       }
     ]
     return NextResponse.json({
          message : "POST Berhasil",
          datas :{
               latitude : latitude,
               longitude : longitude
          }
     })
}