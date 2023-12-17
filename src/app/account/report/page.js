"use client"
import React from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import Navbar from "@/components/Navbar";
import ReportCard from "./_components/ReportCard";

const page = () => {
     const { user } = useAuthContext()
     return (
          <>
               <Navbar userLogin={true} role={user.user.role} email={user.email} />
               <div className="w-full h-screen bg-secondary p-10 flex flex-col gap-2">
                    {
                         user.user.device_access 
                         && user.user.device_access.map(device =><ReportCard device_id={device}/>)
                    } 
               </div>
          </>
     )
}

export default page