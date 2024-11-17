import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const LogIn = () => {
    const {logInForm,registerGoogle}=useContext(AuthContext)
    const navigate= useNavigate()

    const handleLogIn=(e)=>{
        e.preventDefault()
        console.log('log in')
       const form= new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
      
        logInForm(email,password)
        .then(res=>{
            console.log(res)
            navigate('/')

        }).catch(err=>{
            console.log(err)
        })
    }
    const handleGoogleLogIn=()=>{
        registerGoogle()
        .then(res=>{
            console.log(res)
            navigate('/')
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className='flex justify-center items-center flex-col pb-6'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <div className='flex justify-between items-center'>
                            <div className="form-control">
                                <label className="cursor-pointer label gap-4">
                                    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                                    <span className="label-text">Remember me</span>

                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button  className="btn btn-primary">Login</button>
                    </div>
                    <h1 className='font-semibold text-center'>Don't have an accout <Link to='/register' className='text-red-600 hover:underline'>Register now ?</Link></h1>
                </form>
            </div>
            <div className='flex justify-center items-center flex-col space-y-3 mt-1'>
                <div className='divider'>or</div>

                <button className='flex items-center gap-4 font-semibold border-2 py-1 px-4 rounded-lg'> <span><FaFacebook className='text-3xl ' /></span>Login With Facebook</button>
                <button onClick={handleGoogleLogIn} className='flex items-center gap-4 font-semibold border-2 py-2 px-4 rounded-lg'> <span><FaGoogle className='text-3xl ' /></span>Login With Google</button>
            </div>
        </div>
    );
};

export default LogIn;