'use client'

import React, { useEffect, useState, } from 'react'
import Navbar from '@/components/Navbar'
import FormLogin from '@/components/FormLogin'


const page = () => {
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