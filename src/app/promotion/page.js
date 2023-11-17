'use client'

import Card from "./Card"
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"

import Loading from "@/components/Loading"
import AOS from 'aos'
import 'aos/dist/aos.css'


function page() {
  useEffect(() => {
    setLoading(false)
    AOS.init({duration:500})
  }, [])

  const [loading, setLoading] = useState(true)
  return (
    <>
      {
        loading ? <Loading /> :
          <>
            <Navbar />
            <div className="w-full flex justify-center items-center bg-secondary h-max flex-col gap-10" >
              <Card />
            </div>
            <div className="grid grid-cols-3 w-full h-max-content p-16 gap-16">
                <div className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={300} data-aos-duration={500} ></div>
                <div className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={300} data-aos-duration={1000} ></div>
                <div className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={300} data-aos-duration={1500} ></div>
                <div className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={300} data-aos-duration={500} ></div>
                <div className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={300} data-aos-duration={1000} ></div>
                <div className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={300} data-aos-duration={1500} ></div>
                <div className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={300} data-aos-duration={500} ></div>
                <div className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={300} data-aos-duration={1000} ></div>
                <div className="bg-main w-full h-60" data-aos="fade-up" data-aos-offset={300} data-aos-duration={1500} ></div>
              </div>
          </>

      }

    </>
  )
}

export default page