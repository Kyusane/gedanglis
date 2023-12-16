'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuthContext } from "../hooks/useAuthContext"
import { useState, useEffect } from "react"
import Image from 'next/image'
import Baskara from '../../public/img/baskara.png'

import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Navbar = ({ userLogin, role, email }) => {
  const router = useRouter()
  const { dispatchAuth } = useAuthContext()
  const [isVisible, setIsVisible] = useState({ box: false, bars: false, userbar: false })
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;
    if (backgroundTransparacyVar < 1) {
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  function logoutHandler() {
    if (typeof window !== 'undefined') {
      dispatchAuth({ type: "LOGOUT" })
      localStorage.removeItem('credential')
      router.push('/')
    }
  }

  return (
    <>
      <nav className={`bg-main sm:w-full w-screen text-secondary h-[10vh] flex px-10 items-center justify-between z-50 ${userLogin ? '' : 'fixed'}`}
        style={{
          background: `rgba(27, 47, 69, ${userLogin ? '100' : backgroundTransparacy})`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div className="image font-bold flex gap-5 ">
          {
            userLogin ? <div className="w-full flex justify-center items-center"> <FaBars alt="bars" className="cursor-pointer hover:scale-110" onClick={e => setIsVisible({ box: false, bars: false, userbar: !isVisible.userbar })} /> </div> : null
          }
          <div className={`absolute bg-secondary shadow-2xl h-[90vh] -left-10 z-10 top-[10vh] p-5
        ${isVisible.userbar ? "sm:w-1/4 w-full" : "w-0 "} transition-all z-[9999]`}>
            <div className="menu flex flex-col justify-center text-black items-start gap-2 font-bold overflow-hidden pl-10">
              <Link href="/account" className="transition-all hover:bg-main hover:bg-opacity-70 rounded-md w-full p-2">Dashboard</Link>
              {
                role == 1 ?
                  <Link href="/account/manage" className="transition-all hover:bg-main hover:bg-opacity-70 rounded-md w-full p-2">Manage</Link> : null
              }
              <Link href="/account/report" className="transition-all hover:bg-main hover:bg-opacity-70 rounded-md w-full p-2">Report</Link>
            </div>
          </div>
          <Image src={Baskara} width={100} height={50} alt="baskara" />
        </div>
        {
          userLogin ?
            <div >
              <div className=" hover:cursor-pointer w-max bg-slate-100 rounded-3xl h-10 h-max p-1 flex gap-1 items-center" onClick={e => setIsVisible({ box: !isVisible.box, bars: false, userbar: false })} >
                <div className="bg-secondary sm:bg-main w-7 h-7 sm:w-10 sm:h-10 rounded-3xl flex items-center justify-center overflow-hidden">
                  <FaUser alt="user" />
                </div>
                <h3 className="text-black sm:p-1 sm:block hidden">{email}</h3>
              </div>

              <div className={` w-40 sm:w-56 absolute transition-all p-2 mt-5 right-5 bg-secondary shadow-sm rounded-md text-black border-2 border-slate-300 ${isVisible.box ? "" : "hidden"}`}>
                <button onClick={e => router.push('/account/profile')} className="transition-all hover:bg-slate-200 w-full h-full text-left p-1 rounded-sm">Profile</button>
                <button onClick={logoutHandler} className="transition-all hover:bg-slate-200 w-full h-full text-left p-1 rounded-sm">Logout</button>
              </div>
            </div>
            :
            <div>
              <div className="menu sm:flex sm:justify-center sm:items-center sm:gap-10 font-bold hidden sm:block">
                <Link href="/" className="hover:scale-105 transition-all">HOME</Link>
                <Link href="/about" className="hover:scale-105 transition-all">ABOUT</Link>
                <Link href="/promotion" className="hover:scale-105 transition-all">PROMOTION</Link>
                <Link href="/login" className="hover:scale-105 transition-all">LOGIN</Link>
              </div>
              <div className="sm:hidden">
                <FaBars onClick={e => setIsVisible({ box: false, bars: !isVisible.bars, userbar: false })} />
              </div>
            </div>
        }

        <div className={`absolute bg-main opacity-90 w-full h-[100vh] left-0 z-[999999] top-[10vh]
        ${isVisible.bars ? "" : "hidden"} transition-all`}>
          <div className="flex flex-col p-5 gap-3">
            <Link href="/" className="hover:scale-105 transition-all">HOME</Link>
            <Link href="/about" className="hover:scale-105 transition-all">ABOUT</Link>
            <Link href="/promotion" className="hover:scale-105 transition-all">PROMOTION</Link>
            <Link href="/login" className="hover:scale-105 transition-all">LOGIN</Link>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar