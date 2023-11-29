'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuthContext } from "../hooks/useAuthContext"
import { useState } from "react"

const Navbar = ({ userLogin }) => {

  const router = useRouter()
  const { dispatchAuth } = useAuthContext()
  const [isVisible, setIsVisible] = useState(false)

  function logoutHandler() {
    if (typeof window !== 'undefined') {
      dispatchAuth({ type: "LOGOUT" })
      localStorage.removeItem('user')
      router.push('/')
    }
  }

  return (
    <>
      <nav className=" bg-main sm:w-full text-secondary h-[10vh] flex px-10 items-center justify-between z-1">
        <div className="image font-bold ">
          GEDANGLIS
        </div>
        {
          userLogin ?
            <div >
              <div className=" hover:cursor-pointer w-max bg-slate-100 rounded-3xl h-max p-1 flex gap-2 items-center" onClick ={e => setIsVisible(!isVisible)}>
                <div className="bg-blue-400 w-7 h-7 sm:w-10 sm:h-10 rounded-3xl"></div>
                <h3 className="text-black p-1">
                  Admin
                </h3>
              </div>
              
              <div className={` w-40 sm:w-56 absolute transition-all p-2 mt-5 right-5 bg-secondary shadow-sm rounded-md text-black border-2 border-slate-300 ${isVisible ? "" : "hidden"}`}>
                <button onClick={logoutHandler} className="transition-all hover:bg-slate-200 w-full h-full text-left p-1 rounded-sm">Logout</button>
              </div>
            </div>
            :
            <div className="menu sm:flex sm:justify-center sm:items-center sm:gap-10 font-bold hidden sm:block">
              <Link href="/" className="hover:scale-125 transition-all">HOME</Link>
              <Link href="/about" className="hover:scale-125 transition-all">ABOUT</Link>
              <Link href="/promotion" className="hover:scale-125 transition-all">PROMOTION</Link>
              <Link href="/login" className="hover:scale-125 transition-all">LOGIN</Link>
            </div>
        }
      </nav>
    </>
  )
}

export default Navbar