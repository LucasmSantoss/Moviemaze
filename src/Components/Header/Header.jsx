import React from "react";
import Image from "../Image/Image";
import logo from "../../Imgs/favicon.png";
import logoutActions from '../../Store/LogoutReload/actions';
import axios from 'axios'
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import logout from '../../Imgs/logout.png'
import { NavLink as Anchor } from "react-router-dom";

const { logoutReload } = logoutActions

function Header() {
  const token = localStorage.getItem('token');

    const dispatch = useDispatch();

    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let url = 'http://localhost:8080/api/auth/signout'
    let user = JSON.parse(localStorage.getItem('user'))

    async function handleLogout() {
        try {
            await axios.post(url, "", headers)
            Swal.fire({
                title: 'Logout Succefull',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            dispatch(logoutReload({ state: true }))
            window.location.reload();
        } catch (error) {
            console.log(error)

        }
    }


  return (
    <div className="">
      <div className="flex justify-between bg-slate-800 text-white p-2 ">
        <Anchor to="/"><div className="flex pl-2 ">
          <Image className="h-24 " src={logo}></Image>
          <p className="text-5xl pt-4 p-1 items-center">MovieMaze</p>
          </div></Anchor>
        
          <div className="flex items-center pr-2">
        { token ? "" : <Anchor className="text-sm p-1" to="/signin">Login</Anchor>}
        { token ? "" : <Anchor className=" text-sm p-1" to="/signup">Register</Anchor>}
        {token ? <Anchor onClick={handleLogout}><Image className="h-12 p-1" src={logout} ></Image></Anchor> : "" }
        </div>
        
       
        
       
      </div>
      {/* <div className="flex justify-center from-stone-300 p-2">
        <button
          className="w-20 p-1 mr-2
bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 text-black   "
        >
          Inicio
        </button>
        <button
          className="w-20 p-1 mr-2
bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 text-black  "
        >
          Inicio
        </button>
        <button
          className="w-20 p-1 mr-2
bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 text-black  "
        >
          Inicio
        </button>
        <button
          className="w-20 p-1 mr-2
bg-cyan-500  rounded-full shadow-lg shadow-cyan-500/50 text-black  "
        >
          Inicio
        </button>
        <button
          className="w-20 p-1 mr-2
bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 text-black  "
        >
          Inicio
        </button>
      </div> */}
    </div>
  );
}

export default Header;
