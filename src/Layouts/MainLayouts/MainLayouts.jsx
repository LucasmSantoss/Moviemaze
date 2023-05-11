import React from 'react';
import Header from '../../Components/Header/Header.jsx';
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer.jsx'


function MainLayouts() {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
}

export default MainLayouts;