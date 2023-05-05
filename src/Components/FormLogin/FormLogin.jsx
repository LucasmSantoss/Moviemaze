import React, { useRef } from 'react';
import logo from '../../Imgs/favicon.png'
import Image from '../Image/Image'

const FormLogin = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async (event) => {
    event.preventDefault()

    let data = {
      [emailRef.current.name]: emailRef.current.value,
      [passwordRef.current.name]: passwordRef.current.value,
    }

    // Aquí deberías hacer algo con los datos recopilados
  }

  return (
    <div className='flex  h-screen justify-center p-5 bg-white dark:bg-slate-900  px-6 py-8 ring-1 ring-slate-900/5 shadow-xl'>
      <form className='flex flex-col justify-center bg-slate-600 rounded-lg' onSubmit={handleSubmit}>
      <h2 className='p-3 text-3xl text-white flex justify-center'>Log In in MovieMaze!!</h2>
      <Image className="w-2/4 justify-center" src={logo}></Image>
      <div className='flex flex-col justify-center p-5'>
      <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="mail"  ref={emailRef} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label>
<label class="block">
<span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Password
  </span>
        <input type="password" name="password"  ref={passwordRef} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
        </label>
        </div>
      </form>

      
    </div>
  )
}

export default FormLogin;
