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
    if (localStorage.getItem('token') != null) {
      setLoading(false);
      setLogin(localStorage.getItem('token')? true : false)
    } else {
      router.push("/")
    }

  }, [])

  const [deviceID, setDeviceID] = useState("GDL-001")
  const { user } = useAuthContext()
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
              <nav className="flex sm:flex-row flex-col  gap-5 p-2" >
                <select className="bg-secondary border-main border-2 shadow-lg rounded-md px-6 py-2" onChange={e => setDeviceID(e.target.value)}>
                  <option value="GDL-001">GDL-001</option>
                  <option value="GDL-002">GDL-002</option>
                  <option value="GDL-003">GDL-003</option>
                </select>
                <button className={`${show? 'bg-main text-secondary': 'bg-secondary text-main border-2 border-main'} px-5 py-2 rounded-md hover:scale-105 transition-all hover:opacity-70`} onClick={e => setShow(true)}>Monitoring</button>
                <button className={`${!show? 'bg-main text-secondary': 'bg-secondary text-main border-2 border-main'} px-5 py-2 rounded-md hover:scale-105 transition-all hover:opacity-70`} onClick={e => setShow(false)}>Tracking</button>
              </nav>
              {
                show ? <MonitoringContextProvider><Monitoring deviceID={deviceID} /></MonitoringContextProvider> : <Tracking deviceID={deviceID}/>
              }
            </div>
          </div>)
      }

    </>
  )
}

export default page