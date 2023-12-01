'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuthContext } from "../hooks/useAuthContext"
import { useState } from "react"
import Image from 'next/image'

import Bars from '../../public/img/bars-sort.svg'
import UserIcon from '../../public/img/user-icon.svg'


const Navbar = ({ userLogin }) => {

  const router = useRouter()
  const { dispatchAuth ,user} = useAuthContext()
  const [isVisible, setIsVisible] = useState({ box: false, bars: false, userbar: false })

  function logoutHandler() {
    if (typeof window !== 'undefined') {
      dispatchAuth({ type: "LOGOUT" })
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      router.push('/')
    }
  }

  return (
    <>
      <nav className=" bg-main sm:w-full text-secondary h-[10vh] flex px-10 items-center justify-between z-1">
        <div className="image font-bold flex gap-5 ">
          {
            userLogin ? <Image src={Bars} width={20} height={20} alt="bars" className="cursor-pointer hover:scale-110" onClick={e => setIsVisible({ box: false, bars: false, userbar: !isVisible.userbar })} /> : null
          }
          <div className={`absolute bg-secondary shadow-2xl h-[90vh] -left-10 z-10 top-[10vh] p-5
        ${isVisible.userbar ? "sm:w-1/4 w-full" : "w-0 "} transition-all z-[9999]`}>

            <div className="menu flex flex-col justify-center text-black items-start gap-2 font-bold overflow-hidden pl-10">
              <Link href="/" className="hover:scale-105 transition-all">HOME</Link>
              <Link href="/about" className="hover:scale-105 transition-all">ABOUT</Link>
              <Link href="/promotion" className="hover:scale-105 transition-all">PROMOTION</Link>
              <Link href="/login" className="hover:scale-105 transition-all">LOGIN</Link>
            </div>

          </div>
          GEDANGLIS
        </div>
        {
          userLogin ?
            <div >
              <div className=" hover:cursor-pointer w-max bg-slate-100 rounded-3xl h-10 h-max p-1 flex gap-1 items-center" onClick={e => setIsVisible({ box: !isVisible.box, bars: false, userbar: false})} >
                <div className="bg-secondary sm:bg-main w-7 h-7 sm:w-10 sm:h-10 rounded-3xl flex items-center justify-center overflow-hidden">
                  <Image src={UserIcon} width={20} height={20} alt="user" />
                </div>
                <h3 className="text-black sm:p-1 sm:block hidden">
                  {localStorage.getItem('email')}
                </h3>
              </div>

              <div className={` w-40 sm:w-56 absolute transition-all p-2 mt-5 right-5 bg-secondary shadow-sm rounded-md text-black border-2 border-slate-300 ${isVisible.box ? "" : "hidden"}`}>
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
                <Image src={Bars} width={25} height={25} alt="bars" onClick={e => setIsVisible({ box: false, bars: !isVisible.bars, userbar: false })} />
              </div>
            </div>

        }
        <div className={`absolute bg-main opacity-90 w-full h-[100vh] left-0 z-10 top-[10vh]
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