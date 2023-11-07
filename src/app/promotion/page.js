'use client'

import Card from "./Card"
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"

import Loading from "@/components/Loading"

function page() {
  useEffect(() => {
    setLoading(false)
  }, [])

  const [loading, setLoading] = useState(true)
  return (
    <>
      {
        loading ? <Loading /> :
          <>
            <Navbar />
            <div className="w-full flex justify-center items-center bg-secondary h-max flex-col gap-10" >
              <Card />
            </div>
          </>

      }

    </>
  )
}

export default page