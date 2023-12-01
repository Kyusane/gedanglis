'use client'

import React, { useEffect, useState, } from 'react'
import Navbar from '@/components/Navbar'
import FormLogin from '@/components/FormLogin'
import { useRouter } from 'next/navigation'


const page = () => {
  useEffect(()=>{
    localStorage.getItem('token') ? router.push('/account') : null
  },[])

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