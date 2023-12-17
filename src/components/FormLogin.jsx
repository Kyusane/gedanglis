'use client'
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '../hooks/useAuthContext'
import ReCAPTCHA from 'react-google-recaptcha'
import Loading from './_loading/Loading'

const FormLogin = () => {
     const { dispatchAuth } = useAuthContext()
     const Router = useRouter()
     const emailInputRef = useRef(null);
     const passwordInputRef = useRef(null);
     const [error, setError] = useState(null)
     const [btnDisabled, setbtnDisabled] = useState(true)
     const [loading, setLoading] = useState(false)

     const loginHandler = async (e) => {
          try {
               setLoading(true)
               e.preventDefault()
               const email = emailInputRef.current.value;
               const password = passwordInputRef.current.value;
               if (email == '' || password == '') {
                    setError("Please input your Username/Password")
                    setLoading(false)
                    return
               }
               const response = await fetch(`${process.env.BASE_PROTOCOL}${process.env.BASE_URL}/api/user/login`, {
                    method: "POST",
                    headers: {
                         'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                         email: email,
                         password: password
                    })
               })
               const result = await response.json()
               if (result.token) {
                    localStorage.setItem('credential',JSON.stringify(result))
                    dispatchAuth({ type: "LOGIN", payload: result })
                    Router.replace("/account")
               } else {
                    setLoading(false)
                    setError(result.error)
               }
          } catch {
               setLoading(false)
          }
     }
     return (
          <>
               {
                    loading ? <Loading /> :
                         <>
                              <form className='bg-main w-[max-content] h-[max-content] p-5 sm:p-10 gap-3 flex justify-center items-start flex-col rounded-2xl shadow-2xl text-secondary transition-all'>
                                   <label className="font-bold">Username</label>
                                   <input type='email' className='bg-secondary h-10 focus:outline-main w-[300px] sm:w-[400px] p-3 text-black focus:rounded-xl transition-all rounded-md' ref={emailInputRef} placeholder='admin@admin.com' />
                                   <label className="font-bold">Password</label>
                                   <input type='password' autoComplete="off" className='bg-secondary focus:outline-main h-10 w-[300px] sm:w-[400px] p-3 text-black focus:rounded-xl transition-all rounded-md' ref={passwordInputRef} />
                                   {
                                        (error != null) ?
                                             <div className="w-full h-[max-content] bg-red-300 text-red-500 border-2 border-red-600 p-5">
                                                  <h3>{error}</h3>
                                             </div> : null
                                   }
                                   <ReCAPTCHA className='w-full flex flex-col-reverse items-center'
                                        sitekey={process.env.SITE_KEY} onChange={() => setbtnDisabled(false)}>
                                        {
                                             btnDisabled ?
                                                  <button type='submit' disabled className='w-[300px] sm:w-full h-10 bg-slate-100 mt-8 hover:text-slate-100 hover:bg-red-600 text-main rounded-3xl hover:scale-105 transition-all'>Login</button>
                                                  :
                                                  <button type='submit' onClick={loginHandler} className='w-[300px] sm:w-full  h-10 bg-slate-100 mt-8 hover:bg-blue-400 text-main rounded-3xl hover:scale-105 transition-all'>Login</button>
                                        }
                                   </ReCAPTCHA>
                              </form>
                         </>
               }
          </>
     )
}

export default FormLogin