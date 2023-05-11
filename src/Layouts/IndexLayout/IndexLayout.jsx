import React from 'react';
import Header from '../../Components/Header/Header.jsx';
import { Outlet } from 'react-router-dom'


function IndexLayout() {
    return (
        <div>
        <Header/>
        <Outlet />
        </div>
    );
}

export default IndexLayout;