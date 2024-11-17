import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';


const MailLayout = () => {
    const {pathname }= useLocation()
    console.log(pathname)
    
    return (
        <div className={` min-h-screen ${pathname === '/' || pathname === '/destination' ? 'bg-blend-overlay bg-no-repeat bg-cover bg-center bg-[#000000be] bg-bannerImg text-white' :'*:text-black'}`}>
          <nav className='pt-3 pb-7'>
          <NavBar></NavBar>
          </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MailLayout;