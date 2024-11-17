import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const NavBar = () => {
    const {logOut}=useContext(AuthContext)
    const navigate = useNavigate()

    const link =<>
    <li><NavLink to='/' className={({isActive})=>isActive? '!bg-buttonColor text-black font-semibold':''}>Home</NavLink></li>

    <li><NavLink to='/destination' className={({isActive})=>isActive? '!bg-buttonColor text-black font-semibold':''}>Destination</NavLink></li>

    <li><NavLink to='/blog' className={({isActive})=>isActive? '!bg-buttonColor text-black font-semibold':''}>Blog</NavLink></li>

    <li><NavLink to='/contack' className={({isActive})=>isActive? '!bg-buttonColor text-black font-semibold':''}>Contact</NavLink></li>
    </>

    const hadleLogOut=()=>{
        console.log('log out')
        logOut()
        .then(res=>{
            console.log(res)
            navigate('/login')
        }).catch(err=>console.log(err))
    }
    return (
        <div class="navbar  ">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {
                        link
                       }
                    </ul>
                </div>
                <a class="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    
                    {
                        link
                    }
                </ul>
            </div>
            <div class="navbar-end">
               <NavLink to="/login" className={({isActive})=>isActive? '!bg-buttonColor text-black font-semibold btn':'btn border border-yellow-600'}>Login</NavLink>
               <button className='btn' onClick={hadleLogOut}>Log out</button>
            </div>
        </div>
    );
};

export default NavBar;