'use client'

import Card from "./Card"
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import Loading from "@/components/_loading/Loading"
import AOS from 'aos'
import 'aos/dist/aos.css'


function page() {
  useEffect(() => {
    setLoading(false)
    AOS.init({ duration: 500 })
  }, [])

  const router = useRouter()
  const [loading, setLoading] = useState(true)
  return (
    <>
      {
        loading ? <Loading /> :
          <>
            <Navbar />
            {/* <div className="w-full flex justify-center items-center bg-secondary h-max flex-col gap-10" >
              <Card />
            </div> */}
            <div className="grid sm:grid-cols-3 w-full h-max-content sm:p-16 p-5 gap-5 grid-cols-1 sm:gap-16">
              <div onClick={e => router.push(`/tracking/GDL-001`)} className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={100} data-aos-duration={500} ></div>
              <div onClick={e => router.push(`/tracking/GDL-002`)} className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={100} data-aos-duration={1000} ></div>
              <div onClick={e => router.push(`/tracking/GDL-003`)} className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={100} data-aos-duration={1500} ></div>
            </div>
          </>

      }

    </>
  )
}

export default page