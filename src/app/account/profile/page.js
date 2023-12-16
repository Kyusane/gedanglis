'use client'
import React, { useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'

import { useAuthContext } from "@/hooks/useAuthContext"

const page = () => {

     const {user} = useAuthContext()
     const newPassword = useRef(null)
     const coPassword = useRef(null)
     const router = useRouter()

     const changePassword = async (e) => {
          e.preventDefault()
          const newPasswordInput = newPassword.current.value;
          const coPasswordInput = coPassword.current.value;

          if (newPasswordInput == '' || coPasswordInput == '') {
               alert("Please input your newPassword")
               return
          }

          var makeSure = confirm("Anda yakin mengubah password?")
          if (makeSure) {
               try {
                    if (newPasswordInput != coPasswordInput) {
                         alert("Konfirmasi password anda")
                         return
                    }
                    const response = await fetch(`http://${process.env.BASE_URL}/api/user/change/password`, {
                         method: "POST",
                         headers: {
                              'Content-Type': 'application/json;charset=utf-8',
                              "authorization": `Bearer ${user.token}`
                         },
                         body: JSON.stringify({
                              newPassword: newPasswordInput
                         })
                    })
                    const result = await response.json()
                    if (result.token) {
                         router.replace("/account")
                         alert("Password Berhasil diubah")
                    } else {
                         alert(result.error)
                    }
               } catch {
                    alert(error)
               }
          }

     }
     return (
          <div>
               <Navbar userLogin={true} role={user.user.role} email={user.email} />
               <div className='flex justify-center items-start w-screen h-[90vh] bg-secondary p-10'>
                    <form className='w-screen flex text-secondary justify-start  flex-col gap-3 bg-main h-max p-10 rounded-md'>
                         <label className='font-bold'>Username</label>
                         <input className="px-2 py-1 rounded-md text-sm" type="text" value={user.name} disabled></input>
                         <label className='font-bold'>Email</label>
                         <input className="px-2 py-1 rounded-md text-sm" type="text" value={user.email} disabled></input>
                         <label className='font-bold'>Role</label>
                         <input className="px-2 py-1 rounded-md text-sm" type="text" value={user.role} disabled></input>
                         <label className='font-bold'>Device Access</label>
                         <input className="px-2 py-1 rounded-md text-sm" type="text" value={user.device_access} disabled></input>
                         <label className='font-bold'>Password</label>
                         <input className="px-2 py-1 rounded-md text-sm text-black" type="password" ref={newPassword} placeholder='new Password' disabled></input>
                         <input className="px-2 py-1 rounded-md text-sm text-black" type="password" ref={coPassword} placeholder='konfirmasi password' disabled></input>
                         <button className="px-2 py-1 rounded-md text-sm bg-green-600 hover:scale-y-150 transition-all" onClick={changePassword} disabled>Change Password</button>
                    </form>
               </div>
          </div>
     )
}

export default page