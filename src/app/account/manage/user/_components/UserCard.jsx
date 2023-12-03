import { useAuthContext } from '@/hooks/useAuthContext'
import React from 'react'
import { useRouter } from 'next/navigation'

const UserCard = ({ data }) => {
     const router = useRouter()
     const {user , dispatchAuth} =useAuthContext()
     const disableHandler = async (target, isActive) => {
          const response = await fetch(`http://${process.env.BASE_URL}/api/user/change/isactive`, {
               method: "POST",
               headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "authorization": `Bearer ${user.token}`
               },
               body : JSON.stringify({
                    isActive : isActive ,
                    target : target
               })
          })

     dispatchAuth({type:"REFRESH"})

     }
     return (
          <div className={` ${data.isactive ? 'bg-green-400' : 'bg-red-400'} flex w-full shadow-lg h-max  px-10 sm:px-20 py-3 justify-between items-center
          bg-slate-100 rounded-md text-green-950 hover:text-secondary hover:bg-main font-bold`}>
               <div className='flex gap-2 flex-col'>
                    <h1>Name: {data.name}</h1>
                    <h1>Email : {data.email}</h1>
               </div>
               <h1>Device Access : {data.device_access}</h1>
               <div className='flex sm:gap-10 gap-2'>
                    <button className='hover:bg-secondary px-5 py-1 rounded-lg hover:text-main'
                         onClick={e => disableHandler(data.user_id,data.isactive? '0':'1')}>{data.isactive? "Disable" : "Active"}</button>
                    <button className='hover:bg-secondary px-5 py-1 rounded-lg hover:text-main'
                         onClick={e => router.push(`/account/report/tracking/`)}>Delete</button>
               </div>
          </div>
     )
}

export default UserCard