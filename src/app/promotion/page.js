'use client'

import Card from "./_components/Card"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"
import Loading from "@/components/_loading/Loading"

import AOS from 'aos'
import 'aos/dist/aos.css'

import Hero from "../../../public/img/promotion_hero.jpg"
import About from '../../../public/img/promotion/about.jpg'
import Img1 from '../../../public/img/promotion/1.png'
import Img2 from '../../../public/img/promotion/2.png'
import Img3 from '../../../public/img/promotion/3.png'
import Img4 from '../../../public/img/promotion/4.png'
import Img5 from '../../../public/img/promotion/5.png'
import Img6 from '../../../public/img/promotion/6.png'


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
                              <Image
                                   alt="home"
                                   src={Hero}
                                   quality={70}
                                   style={{
                                        position: 'fixed',
                                        zIndex: '-10',
                                        backgroundSize: 'cover',
                                        width: '100%',
                                        height: '100vh'
                                   }}
                              />
                              <section className="w-full h-screen flex items-center justify-center text-secondary bg-main bg-opacity-70">
                                   <h1 className="font-bold text-5xl">Promotions</h1>
                              </section>
                              <section className="w-full h-screen flex items-center sm:flex-row flex-col justify-center gap-20 text-main bg-secondary  p-5 sm:p-10">
                                   <Image src={About} width={200} quality={60} />
                                   <div className="flex flex-col gap-5">
                                        <h2 className="font-bold text-4xl">Apa itu SI GEDANGLIS</h2>
                                        <p className="text-justify">SI GEDANGLIS merupakan sistem informasi dari Gerobak Dagang Listrik yang mencakup gerobak-gerobak yang terintegrasi. Pada halaman ini kamu bisa mengetahui lokasi gerobak dan melakukan pemesanan makanan melalui kontak WhatsApp. SI GEDANGLIS menawarkan berbagai
                                             kemudahan yang akan memanjakanmu dimanapun tempatmu berada.</p>
                                        <ul className="list-disc ml-10">
                                             <li>Mengetahui Lokasi Pedagang</li>
                                             <li>Mendapatkan Informasi Menu</li>
                                        </ul>
                                   </div>
                              </section>
                              <section className="w-full h-screen flex items-center  flex-col justify-center text-secondary gap-10 bg-main bg-opacity-70">
                                   <h2 className="font-bold text-4xl">Cari Tau Sekarang!!!</h2>
                                   <h3 className="text-center">Tunggu apa lagi? Cari Lokasi dengan menekan <br></br>tombol berikut!</h3>
                                   <Link href="#daftar" className="px-7 py-3 bg-blue-500  transition-all hover:scale-110 rounded-3xl text-white">Cari Tau</Link>
                              </section>
                              <section id="daftar" className="w-full h-max flex flex-col items-center justify-center gap-5 bg-secondary p-5">
                                   <h2 className="text-[3rem] font-bold text-main border-b-2 mb-10">TEMUKAN</h2>
                                   <div className="grid sm:grid-cols-3 w-full h-max-content sm:p-16 p-5 gap-5 grid-cols-1 sm:gap-16">
                                        <Card img={Img1} Title={"Ayam Geprek Bu Puji"} location={[-7.572327, 110.830074]} />
                                        <Card img={Img2} Title={"Sate Ayam Raos Echo"} location={[-7.560049, 110.853849]} />
                                        <Card img={Img3} Title={"Soto Banjar Bu Rum"} location={[-7.555641, 110.854607]} />
                                        <Card img={Img4} Title={"Warung Budhe Siti Lamongan"} location={[-7.550864, 110.860520]} />
                                        <Card img={Img5} Title={"Ankringan Cak Ihang Alsi Nomer 1"} location={[-7.550188, 110.865868]} />
                                        <Card img={Img6} Title={"Es Teh Jumbo Dewa Zeus"} location={[-7.569450, 110.829395]} />
                                   </div>
                              </section>
                         </>

               }

          </>
     )
}

export default page