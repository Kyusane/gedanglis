"use client"

import { useAuthContext } from "@/hooks/useAuthContext"
import { MonitoringContextProvider } from "@/context/MonitoringContext"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import Loading from "@/components/Loading"
import Navbar from "@/components/Navbar"

import Tracking from "@/components/Tracking"
import Monitoring from "@/components/Monitoring"

function page() {
  useEffect(() => {
      if(user != null || localStorage.getItem('user')){
        setLoading(false);
        setLogin(localStorage.getItem('user'))
      }else{
        router.push("/")
      }
      
  }, [])

  const {user} = useAuthContext()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(true)
  const [login, setLogin] = useState(false)

  return (
    <>
      {
        loading ? <Loading /> : (
          <div>
            <Navbar userLogin={login} />
            <div className="w-full h-[90vh] bg-secondary p-5 flex flex-col sm:gap-5">
              <nav className="flex gap-5 p-2" >
                <button className={`bg-main px-5 py-2 rounded-xl text-secondary hover:scale-105 transition-all hover:opacity-70`} onClick={e => setShow(true)}>Monitoring</button>
                <button className={"bg-main px-5 py-2 rounded-xl text-secondary hover:scale-105 transition-all hover:opacity-70"} onClick={e => setShow(false)}>Tracking</button>
              </nav>
              {
                show?<MonitoringContextProvider><Monitoring/></MonitoringContextProvider> :<Tracking/>
              }
            </div>
          </div>)
      }

    </>
  )
}

export default page