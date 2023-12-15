"use client"

import { createContext , useReducer } from "react";

export const AuthContext = createContext()
export const AuthReducer = (state, action) =>{
     switch(action.type){
          case 'LOGIN' :
               return {user : action.payload, refresh : state.refresh}
          case 'LOGOUT' :
               return {user : {user:{role:0},email:""}, refresh :state.refresh}
          case 'REFRESH' :
               return {user : state.user, refresh :!state.refresh}
          default:
               return state
     }
}
export const AuthContextProvider = ({children}) => {
     const [state, dispatchAuth] = useReducer (AuthReducer,{
          user :{
               user :{role : 0},
               email :""
          },
          refresh : false
     })
     console.log(state)
     return(
          <AuthContext.Provider value={{ ...state, dispatchAuth }}>
               {children}
          </AuthContext.Provider>
     )
}