'use client'

import React, { useEffect } from 'react'
import { useAuthContext } from "@/hooks/useAuthContext"
import Navbar from '@/components/Navbar'
import FormLogin from '@/components/FormLogin'
import { useRouter } from 'next/navigation'

const page = () => {
  useEffect(()=>{
    user.email != "" ? router.push('/account') : null
  },[])

  const {user}= useAuthContext()
  const router = useRouter()
  return (
    <>
        <Navbar />
        <div className='loginPage flex w-full h-screen justify-center items-center fixed'>
          <FormLogin />
        </div>
    </>
  )
}

export default page