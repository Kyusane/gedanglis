'use client'
import React, { useEffect, useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import UserCard from './_components/UserCard'
import { useAuthContext } from "@/hooks/useAuthContext"

const page = () => {
     const { user, refresh , dispatchAuth } = useAuthContext()
     const [datas, setDatas] = useState(null)

     const inputUsername = useRef(null)
     const inputUserid = useRef(null)
     const inputEmail = useRef(null)
     const [access, setAccess] = useState([])


     useEffect(() => {
          getData()
     }, [refresh])

     const getData = async () => {
          const response = await fetch(`http://${process.env.BASE_URL}/api/user/administrator/getuser`, {
               method: "GET",
               headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "authorization": `Bearer ${user.token}`
               }
          })
          const result = await response.json()
          setDatas(result.fields)
     }

     const createAccount = async (e) => {
          e.preventDefault()
          const response = await fetch(`http://${process.env.BASE_URL}/api/user/signup`, {
               method: "POST",
               headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "authorization": `Bearer ${user.token}`
               },
               body: JSON.stringify(
                    {
                         email: inputEmail.current.value,
                         password: inputUsername.current.value,
                         user_id: inputUserid.current.value,
                         name: inputUsername.current.value,
                         role: 2,
                         device_access: access
                    }
               )
          })
          if(!response.ok){
               const error = await response.json()
               alert(error.error)
          }

          inputEmail.current.value = ''
          inputUsername.current.value =''
          inputUserid.current.value =''

          dispatchAuth({type:"REFRESH"})
          
     }

     const accessHandler = async (e) => {
          var filtered = []
          e.currentTarget.checked ? setAccess([...access, e.currentTarget.value])
               : (filtered = access.filter(d => d != e.currentTarget.value), setAccess(filtered))
     }

     return (
          <div>
               <Navbar userLogin={true} role={user.user.role} email={user.email} />
               <div className='flex justify-center items-start w-screen h-[90vh] bg-secondary p-10'>
                    <form className='w-screen flex text-secondary justify-start  flex-col gap-3 bg-main h-max p-10 rounded-md'>
                         <label className='font-bold'>Username</label>
                         <input className="px-2 py-1 rounded-md text-sm text-black" type="text" ref={inputUsername} ></input>
                         <label className='font-bold'>User ID</label>
                         <input className="px-2 py-1 rounded-md text-sm text-black" type="text" ref={inputUserid} ></input>
                         <label className='font-bold'>Email</label>
                         <input className="px-2 py-1 rounded-md text-sm text-black" type="text" ref={inputEmail} ></input>
                         <label className='font-bold'>Device Access</label>
                         <div className='flex gap-5 flex-wrap'>
                              <span >
                                   <input type="checkbox" value="GDL-001" onChange={accessHandler}></input>
                                   <label className='ml-2'>GDL-001</label>
                              </span>
                              <span >
                                   <input type="checkbox" value="GDL-002" onChange={accessHandler}></input>
                                   <label className='ml-2'>Device 2</label>
                              </span>
                         </div>
                         <button className="px-2 py-1 rounded-md text-sm bg-green-600 hover:scale-105 transition-all" onClick={createAccount} >Create Account</button>
                    </form>
               </div>

               <div className="w-full h-screen bg-secondary p-10 flex flex-col gap-2">
                    {datas && datas.map(d => <UserCard data={d} />)}
               </div>
          </div>
     )
}

export default page