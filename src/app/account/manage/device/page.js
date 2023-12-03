'use client'

import React, { useEffect, useState } from 'react'
import { useAuthContext } from "@/hooks/useAuthContext"
import Navbar from '@/components/Navbar'
import DeviceCard from './_components/DeviceCard'

const page = () => {
     useEffect(() => {
          getData()
     }, [])

     const getData = async () => {
          const response = await fetch(`http://${process.env.BASE_URL}/api/user/administrator/getdevice`, {
               method: "GET",
               headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "authorization": `Bearer ${user.token}`
               }
          })
          const result = await response.json()
          setDatas(result.fields)
     }

     const { user } = useAuthContext()
     const [datas, setDatas] = useState(null)

     return (
          <div>
               <Navbar userLogin={true} role={user.user.role} email={user.email} />
               <div className="w-full h-screen bg-secondary p-10 flex flex-col gap-2">
                    {datas && datas.map(d => <DeviceCard data={d} />)}
               </div>
          </div>
     )
}

export default page