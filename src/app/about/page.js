'use client'

import Navbar from "@/components/Navbar";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, } from 'react'

function page() {
  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full h-screen">About</div>
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
  )
}

export default page