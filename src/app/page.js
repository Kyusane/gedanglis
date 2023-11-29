'use client'

import Image from 'next/image'
import Link from 'next/link'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, } from 'react'

import Navbar from '@/components/Navbar'
import TrackImg from '../../public/img/Track.png'
import DonutImg from '../../public/img/donatnminum.png'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])

  return (
    <>
      <div>
        <Navbar />
        <section className=" flex items-end justify-start w-full h-screen bg-slate-200 px-[10vw] py-[20vh]">
          <div className=' text-blue-950' data-aos="fade-right" >
            <h1 className="text-[2.5rem] sm:text-[4rem] font-extrabold">GEDANGLIS</h1>
            <h2 className="text-[2rem] sm:text-[3.5rem]  pb-10 " >Gerobak Dagang Listrik</h2>
            <Link href="/about"
              className='px-[5rem] sm:px-[10rem] py-[1rem] bg-main text-secondary  hover:opacity-60 transition-all '>
              SELENGKAPNYA</Link>
          </div>
        </section>
        <section className=" flex flex-col sm:flex-row items-end justify-center sm:justify-between w-full h-screen bg-slate-300 px-[10vw] py-[20vh]">
          <Image src={DonutImg} width={300} height={300} data-aos='fade-up' data-aos-offset={400} alt="promosi" />
          <div className=' text-slate-500' data-aos="fade-left" data-aos-offset={200}>
            <h1 className="text-[2.5rem] sm:text-[4rem] font-extrabold">Promotion</h1>
            <h2 className="text-[2rem] sm:text-[3.5rem] pb-10 " >Gerobak Dagang Listrik</h2>
            <Link href="/promotion"
              className='px-[5rem] sm:px-[10rem] py-[1rem] bg-slate-50 text-slate-950 hover:bg-opacity-60'>
              SELENGKAPNYA</Link>
          </div>
        </section>
        <section className=" flex items-end sm:flex-row flex-col justify-end sm:justify-between w-full h-screen bg-slate-200 px-[10vw] py-[20vh]">
          <div className=' text-slate-800' data-aos="fade-right" data-aos-offset={200}>
            <h1 className="text-[2.5rem] sm:text-[4rem]  font-extrabold">Tracking</h1>
            <h2 className="text-[2rem] sm:text-[3.5rem]  pb-10 " >Gerobak Dagang Listrik</h2>
            <Link href="/tracking"
              className='px-[5rem] sm:px-[10rem] py-[1rem] bg-slate-50 text-slate-950 hover:bg-opacity-60'>
              SELENGKAPNYA</Link>
          </div>
          <Image src={TrackImg} width={300} height={300} data-aos="fade-up" data-aos-offset={200} alt="track" />
        </section>
      </div>

    </>
  )
}
