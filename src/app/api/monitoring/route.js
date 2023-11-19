import { NextResponse } from "next/server";
import datas from "../../../lib/monitoringDatas.json"
var data = 0;

export const GET = async(req,res) =>{
     if(data <= datas.length-2){
          data++
     }else if(data == datas.length-1){
          data=0;
     }

     return Response.json({
          message : "Berhasil Ambil Data",
          monitoring :datas[data]
     })
}

var realMonitoring = [{daya:"295",tegangan:"87",arus:"3.5",baterai:"96"}]
 
//  export const GET = async(req) =>{
//       return Response.json({
//            message : "Berhasil Ambil Data",
//            monitoring :realMonitoring[0]
//       })
//  }
 
 export async function POST(req){
      const {daya, tegangan, arus, baterai} = await req.json()
      realMonitoring = [{daya:daya,tegangan:tegangan,arus:arus,baterai:baterai}]
      return NextResponse.json({
           message : "POST Berhasil",
           datas :{
               daya:daya,
               tegangan:tegangan,
               arus:arus,
               baterai:baterai
           }
      })
 }
