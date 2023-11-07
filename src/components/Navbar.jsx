'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

import { useAuthContext } from "../hooks/useAuthContext"

const Navbar = ({userLogin}) => {
  
  const router = useRouter()
  const {dispatchAuth} = useAuthContext()

  function logoutHandler(){
    if(typeof window !== 'undefined'){
      dispatchAuth({type :"LOGOUT"})
      sessionStorage.removeItem('user')
      router.push('/')
    }
  }

  return (
    <>
      <nav className=" bg-main w-full text-secondary h-[10vh] flex px-10 items-center justify-between z-1">
        <div className="image font-bold ">
          GEDANGLIS
        </div>
        {
          userLogin ?
            <div>
              <button onClick={logoutHandler} className="hover:scale-125 transition-all">Logout</button>
            </div>

            :

            <div className="menu flex justify-center items-center gap-10 font-bold">
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