"use client"

import { createContext , useReducer } from "react";
export const MonitoringContext = createContext()

export const MonitoringReducer = (state, action) =>{
     switch(action.type){
          case 'SHOW' :
               return {showSection : action.payload}
          default:
               return state
     }
}
export const MonitoringContextProvider = ({children}) => {
     const [state, dispatchMonitoring] = useReducer (MonitoringReducer,{
          showSection :null,
     })

     console.log(state)
     return(
          <MonitoringContext.Provider value={{ ...state, dispatchMonitoring }}>
               {children}
          </MonitoringContext.Provider>
     )
}