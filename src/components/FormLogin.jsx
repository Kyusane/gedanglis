import React, {useRef, useState} from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '../hooks/useAuthContext'

const FormLogin = () => {

     const {user, dispatchAuth} = useAuthContext()

     const Router = useRouter()
     const emailInputRef = useRef(null);
     const passwordInputRef = useRef(null);
     const [error, setError] = useState(null)

     const loginHandler = (e) => {
          e.preventDefault()
          const email = emailInputRef.current.value;
          const password = passwordInputRef.current.value;

          const dataUser = {
               email : "",
               password : ""
          }

          if(email == dataUser.email && password ==dataUser.password){
               emailInputRef.current.value = '';
               passwordInputRef.current.value = '';
               sessionStorage.setItem("user", true)
               dispatchAuth({ type: "LOGIN", payload: email });
               Router.replace("/account")
          }else{
               setError("Username / Password tidak tepat")
          }
     }
     return (
          <>
               <form className='bg-main w-[max-content] h-[max-content] p-10 gap-3 flex justify-center items-start flex-col rounded-2xl shadow-2xl text-secondary transition-all'>
                    <label className="font-bold">Username</label>
                    <input type='email' className='bg-secondary h-10 w-[400px] p-3 text-black focus:rounded-xl transition-all rounded-md' ref={emailInputRef} required />
                    <label className="font-bold">Password</label>
                    <input type='password' className='bg-secondary h-10 w-[400px] p-3 text-black focus:rounded-xl transition-all rounded-md' ref={passwordInputRef} required />
                    {
                         (error!=null)?
                         <div>
                              <h3>{error}</h3>
                         </div> : null
                    }
                    <button type='submit' onClick={loginHandler} className='w-full h-10 bg-slate-100 mt-8 hover:bg-blue-400 text-main rounded-3xl hover:scale-105 transition-all'>Login</button>
               </form>
          </>

     )
}

export default FormLogin