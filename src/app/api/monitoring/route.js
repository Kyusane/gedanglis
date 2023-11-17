
import datas from "../../../lib/monitoringDatas.json"
var data = 0;

export const GET = async(req,res) =>{
     if(data <= datas.length -2){
          data++
     }else if(data == datas.length-1){
          data=0;
     }
     return Response.json({
          message : "Berhasil Ambil Data",
          monitoring :datas[data]
     })
}
