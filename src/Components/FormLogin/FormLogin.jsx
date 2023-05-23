import React, { useRef } from 'react';
import logo from '../../Imgs/favicon.png';
import Image from '../Image/Image';
import axios from "axios";
import { NavLink as Anchor } from "react-router-dom";
import Swal from 'sweetalert2';

const FormLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const token = localStorage.getItem('token');
  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      [emailRef.current.name]: emailRef.current.value,
      [passwordRef.current.name]: passwordRef.current.value,
    };

    const url = 'http://localhost:8080/api/auth/signin';

    let admin;
    try {
      await axios.post(url, data).then((res) => {
        res.data.user.is_admin ? (admin = true) : (admin = false);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: res.data.user._id,
            name: res.data.user.name,
            lastname: res.data.user.lastName,
            mail: res.data.user.mail,
            country: res.data.user.country,
            
            admin,
          })
        );
        setInterval(() => (window.location.href = "/"), 1000);
      });
      Swal.fire({
        icon: 'success',
        title: 'Loggin success',
        timer: 1500
      });

      event.target.reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong'
      });
    }
  
  };


  return (
    
    <div className='flex items-center justify-center h-screen bg-gradient-to-t from-black to-transparent '>
      <form className='form-container h-3/4 flex flex-col justify-center bg-gradient-to-t from-black to-transparent rounded-lg' onSubmit={handleSubmit}>
        <div className='flex flex-col items-center '>
          <h2 className='p-3 text-4xl  hover:text-black pb-10 italic hover:not-italic' >Log In in MovieMaze!!</h2>
          <Image className='w-1/4 pt-5 pb-5 ' src={logo} alt='logo' />
        </div>
        <div className='flex flex-col p-9 '>
          <label className='block p-5'>
            <span className="after:content-'*' after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
              Email
            </span>
            <input type='email' name='mail' ref={emailRef} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='you@example.com' />
          </label>
          <label className='block p-5'>
            <span className="after:content-'*' after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
              Password
            </span>
            <input type='password' name='password' ref={passwordRef} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' />
          </label>
        </div>
        <div className='flex flex-col items-center'>
        <button type="submit" className="w-1/4 p-1 m-5
		rounded-full bg-white  ">Sign In</button>
        <p className='text-white text-sm'>You don't have account?   
{<Anchor to={"/signup"} className="text-white p-1 text-orange-600 ">
               Register
            </Anchor> }</p>
        </div>
      </form>

    </div>
  );
};


export default FormLogin;
