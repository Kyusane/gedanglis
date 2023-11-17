import { NextResponse } from "next/server"

export const POST = async(req) =>{  
     const {username, password} = await req.json()
     var status
     if(username == "admin@admin.com" && password == "admin123"){
          status = true
     }else{
          status = false
     }
     return NextResponse.json({
          message : "Berhasil Login",
          datas : {
               loginStatus : status
          }   
     })
}
