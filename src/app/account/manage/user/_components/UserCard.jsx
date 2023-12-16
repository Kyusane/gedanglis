'use client'
import { useAuthContext } from '@/hooks/useAuthContext'
import React from 'react'
import { useRouter } from 'next/navigation'
import ConfirmModal from '../../../../../components/ConfirmModal'
import { useState } from 'react'

const UserCard = ({ data }) => {
     const router = useRouter()
     const { user, dispatchAuth } = useAuthContext()
     const [ShowModalDelete, setShowModalDelete] = useState(false);
     const [ShowModalStatus, setShowModalStatus] = useState(false);

     const disableHandler = async (target, isActive) => {
          const response = await fetch(`${process.env.BASE_PROTOCOL}${process.env.BASE_URL}/api/user/change/isactive`, {
               method: "POST",
               headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "authorization": `Bearer ${user.token}`
               },
               body: JSON.stringify({
                    isActive: isActive,
                    target: target
               })
          })
          dispatchAuth({ type: "REFRESH" })
     }

     const deleteHandler = async (target) => {
          const response = await fetch(`${process.env.BASE_PROTOCOL}${process.env.BASE_URL}/api/user/delete`, {
               method: "DELETE",
               headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "authorization": `Bearer ${user.token}`
               },
               body: JSON.stringify(
                    {
                         target: target
                    }
               )
          })
          if (!response.ok) {
               const error = await response.json()
               alert(error.error)
          }
          dispatchAuth({ type: "REFRESH" })
     }
     return (
          <>

               <div className={` ${data.isactive ? "bg-green-400 " : "bg-red-400"} flex w-full shadow-lg h-max  px-10 sm:px-20 py-5 justify-between items-start
               sm:flex-row sm:items-center flex-col gap-5 rounded-md text-green-950 hover:text-secondary hover:bg-main font-bold`}>
                    <div className='flex gap-2 flex-col'>
                         <h1>Name: {data.name}</h1>
                         <h1>Email : {data.email}</h1>
                    </div>
                    <h1>Device Access : {data.device_access}</h1>
                    <div className='flex sm:gap-10 gap-2'>
                         <button className='hover:bg-secondary px-5 py-1 rounded-lg hover:text-main border-2 border-secondary'
                              onClick={e => setShowModalStatus(true)}>{data.isactive ? "Disable" : "Active"}</button>
                         <button className='hover:bg-secondary px-5 py-1 rounded-lg hover:text-main  border-2 border-secondary'
                              onClick={e => setShowModalDelete(true)}>Delete</button>
                         {
                              ShowModalDelete ?
                                   <ConfirmModal option={"Hapus"} onClose={() => setShowModalDelete(false)} onConfirm={() => deleteHandler(data.user_id)}>
                                        Yakin ingin menghapus Akun?
                                   </ConfirmModal>
                                   : null

                         }
                         {
                              ShowModalStatus?
                              <ConfirmModal option={"Ubah"} onClose={() => setShowModalStatus(false)} onConfirm={() => disableHandler(data.user_id, data.isactive ? '0' : '1')}>
                                   Yakin ingin mengubah Status Akun?
                              </ConfirmModal>
                              : null

                         }
                    </div>
               </div>

          </>
     )
}

export default UserCard