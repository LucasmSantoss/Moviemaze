import React from "react";
import Image from "../Image/Image";
import logo from "../../Imgs/favicon.png";
import logoutActions from '../../Store/LogoutReload/actions';
import axios from 'axios'
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import logout from '../../Imgs/logout.png'
import profile from "../../Imgs/profile.png"
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
    <div className="bg-black text-white">
    <div className="flex justify-between items-center p-2">
      <Anchor to="/">
        <div className="flex items-center pl-2">
          <Image className="h-12" src={logo} alt="Logo" />
          <p className="text-2xl font-bold ml-2">MovieMaze</p>
        </div>
      </Anchor>
      <div className="flex items-center pr-2">
        {token ? null : <Anchor className="text-sm p-1" to="/signin">Login</Anchor>}
        {token ? null : <Anchor className="text-sm p-1" to="/signup">Register</Anchor>}
        {token ? (
          <Anchor  className="p-1">
            <Image className="h-8" src={profile} alt="Logout" />
          </Anchor>
        ) : null}
        {token ? (
          <Anchor onClick={handleLogout} className="p-1">
            <Image className="h-8" src={logout} alt="Logout" />
          </Anchor>
        ) : null}
      </div>
    </div>
  </div>
  
  );
}

export default Header;
