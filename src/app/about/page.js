'use client'

import Link from 'next/link'
import Navbar from "@/components/Navbar";
import CardTeam from "./_components/CardTeam";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, } from 'react'

import Riyadh from '../../../public/img/team/riyadh.jpg'
import Rahmat from '../../../public/img/team/rahmat.jpg'
import Ilham from '../../../public/img/team/ilham.jpg'
import Heri from '../../../public/img/team/heri.jpg'

function page() {
  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])

  return (
    <>
      <Navbar />
      <div className='bg-images w-full h-screen fixed -z-10'></div>
      <section className='w-full h-screen bg-opacity-70 bg-main'>
        <div className="w-full sm:w-2/5 h-full p-5 bg-main sm:p-20 flex flex-col gap-10 justify-center items-start">
          <h2 className="text-[2rem] sm:text-[3rem] font-bold text-white">GEDANGLIS</h2>
          <p className="p-5 border-l-2 text-justify text-white">Merupakan produk inovasi dari tim Hibah-MBKM Baskara. Gerobak ini mendukung
            perekonomian yang ada di Indonesia dengan konsep gerobak yang dapat berkeliling.
            Gedanglis ini dilengkapi dengan motor listrik sehingga memudahkan pedagang untuk
            berpindah tempat. Selain itu Gedanglis dilengkapi dengan sistem tracking sehingga pembeli dapat mengetahui lokasi Gedanglis.</p>
          <Link href="#service" className="px-7 py-3 bg-blue-500  transition-all hover:scale-110 rounded-3xl text-white">Read More</Link>
        </div>
      </section>
      <section id="service" className='w-full h-screen  bg-secondary flex justify-end'>
        <div className="w-full sm:w-3/5 h-full bg-main p-5 sm:p-20 flex flex-col gap-10 justify-center items-end">
          <h2 className="text-[2rem] sm:text-[3rem]font-bold text-white">Teknik Elektro UNS</h2>
          <p className="p-5 border-r-2 text-justify text-white">Program Studi Teknik Elektro merupakan salah satu program studi di Fakultas Teknik Universitas Sebelas Maret (UNS) Surakarta yang berdiri sejak tanggal 29 April 2014 melalui Surat Keputusan Menteri Pendidikan dan Kebudayaan No. 17/E/O/2014.
            Kurikulum Program Studi Teknik Elektro UNS berpegang pada pedoman FORTEI (Forum Pendidikan Tinggi Teknik Elektro Indonesia) merupakan ringkasan yang disusun bersama tim asesor BAN PT (Badan Akreditasi Nasional Perguruan Tinggi) tahun 2011 , yang akan digunakan sebagai acuan BAN PT dalam menjaga kualitas perguruan tinggi di Indonesia. Pedoman Pengelolaan Program Studi Teknik Elektro tersebut meliputi : Bidang Peminatan, Kurikulum, Laboratorium dan Sumber Daya Manusia.
             </p>
          <Link href="https://elektro.ft.uns.ac.id" className="px-7 py-3 bg-blue-500  transition-all hover:scale-110 rounded-3xl text-white">Read More</Link>
        </div>
      </section>
      <section className='w-full h-screen bg-secondary bg-opacity-80'>
        <div className="w-full sm:w-2/5 h-full bg-main p-5 sm:p-20 flex flex-col gap-10 justify-center items-start">
          <h2 className="text-[2rem] sm:text-[3rem] font-bold text-white">Baskara</h2>
          <p className="p-5 border-l-2 text-justify text-white">Merupakan produk inovasi dari tim Hibah-MBKM Baskara. Gerobak ini mendukung
            perekonomian yang ada di Indonesia dengan konsep gerobak yang dapat berkeliling.
            Gedanglis ini dilengkapi dengan motor listrik sehingga memudahkan pedagang untuk
            berpindah tempat. Selain itu Gedanglis dilengkapi dengan sistem tracking sehingga pembeli dapat mengetahui lokasi Gedanglis.</p>
        </div>
      </section>
      <section className="w-full h-max p-10 bg-main flex flex-col justify-center items-center bg-opacity-80">
        <h2 className="text-[3rem] font-bold text-white border-b-2 mb-10">Our Team</h2>
        <div className="flex flex-wrap sm:gap-5 gap-10 items-center justify-center">
          <CardTeam image={Riyadh} />
          <CardTeam image={Rahmat} />
          <CardTeam image={Ilham} />
          <CardTeam image={Heri} />
          <CardTeam image={Heri} />
          <CardTeam image={Heri} />
          <CardTeam image={Heri} />
        </div>
      </section>
      <section></section>

    </>
  )
}

export default page