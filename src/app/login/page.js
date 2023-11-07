'use client'

import React, { useEffect, useState,} from 'react'
import Navbar from '@/components/Navbar'
import Loading from '@/components/Loading'
import FormLogin from '@/components/FormLogin'

import { useAuthContext } from '@/hooks/useAuthContext'

const page = () => {
  useEffect(()=>{
    setLoading(false)
  },[])
    
  const [loading, setLoading] = useState(true)
  const { user, dispatchAuth } = useAuthContext();
  console.log(user);
  return (
    <>
      {
        loading ? <Loading /> :
          <>
            <Navbar />
            <div className='loginPage flex w-full h-screen justify-center items-center fixed'>
              <FormLogin/>
            </div>
          </>

      }

    </>
  )
}

export default page