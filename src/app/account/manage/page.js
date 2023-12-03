'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'

import { useAuthContext } from '@/hooks/useAuthContext'

const page = () => {
     const router = useRouter()
     const {user} = useAuthContext()
     return (
          <div>
               <Navbar userLogin={true} role={user.user.role} email={user.email} />
               <div className="w-full h-screen bg-secondary p-10 flex sm:flex-row flex-col gap-10 justify-start items-start">
                    <button onClick={e => router.push('/account/manage/user')} className='px-32 py-10 font-bold text-xl bg-main text-secondary rounded-lg hover:scale-110 transition-all'>User</button>
                    <button onClick={e => router.push('/account/manage/device')} className='px-32 py-10 font-bold text-xl bg-main text-secondary rounded-lg hover:scale-110 transition-all'>Device</button>
               </div>
          </div>
     )
}

export default page