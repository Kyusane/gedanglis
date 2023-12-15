"use client"

import { useAuthContext } from "@/hooks/useAuthContext"
import { MonitoringContextProvider } from "@/context/MonitoringContext"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import Loading from "@/components/_loading/Loading"
import Navbar from "@/components/Navbar"

import Tracking from "@/components/_tracking/Tracking"
import Monitoring from "@/components/_monitoring/Monitoring"

function page() {
     useEffect(() => {
          user.email == "" ? dispatchAuth({type: "LOGIN", payload: JSON.parse(localStorage.getItem("credential"))}):null
          if (user.email !="") {
               setLoading(false);
               setLogin(user.token ? true : false)
               setAccess(user.user.device_access)
          } else {
               router.push("/")
          }
     }, [])
     const [deviceID, setDeviceID] = useState("GDL-001")
     const { user, dispatchAuth } = useAuthContext()
     const router = useRouter()
     const [loading, setLoading] = useState(true)
     const [show, setShow] = useState(true)
     const [login, setLogin] = useState(false)
     const [access, setAccess] = useState(null)
     return (
          <>
               {
                    loading ? <Loading /> : (
                         <div>
                              <Navbar userLogin={login} role={user.user.role} email={user.email} />
                              <div className="w-full h-[90vh] bg-secondary p-5 flex flex-col sm:gap-5">
                                   <nav className="flex sm:flex-row flex-col  gap-5 p-2" >
                                        <select className="bg-secondary border-main border-2 shadow-lg rounded-md px-6 py-2" onChange={e => setDeviceID(e.target.value)}>
                                             {
                                                  access && access.map(a => <option value={a} key={a}>{a}</option>)
                                             }
                                        </select>
                                        <button className={`${show ? 'bg-main text-secondary' : 'bg-secondary text-main border-2 border-main'} px-5 py-2 rounded-md hover:scale-105 transition-all hover:opacity-70`} onClick={e => setShow(true)}>Monitoring</button>
                                        <button className={`${!show ? 'bg-main text-secondary' : 'bg-secondary text-main border-2 border-main'} px-5 py-2 rounded-md hover:scale-105 transition-all hover:opacity-70`} onClick={e => setShow(false)}>Tracking</button>
                                   </nav>
                                   {
                                        show ? <MonitoringContextProvider><Monitoring deviceID={deviceID} /></MonitoringContextProvider> : <Tracking deviceID={deviceID} />
                                   }
                              </div>
                         </div>)
               }

          </>
     )
}

export default page