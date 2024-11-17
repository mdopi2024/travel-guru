import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Register = () => {
    const { registerGoogle,registerForm,logInFacebook } = useContext(AuthContext)
    const navigate = useNavigate()

    const handlGoogle =()=>{
        registerGoogle()
        .then(res=>{
            console.log(res)
            navigate('/')

        }).catch(error=>{
            console.log(error)
        })
        
    }
    


    const handlForm =(e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const firstName = form.get('fname')
        const lastName = form.get('lname')
        const email = form.get('email')
        const password = form.get('password')
        const cPassword = form.get('cpassword')
        // console.log({firstName,lastName,email,password,cPassword})
        registerForm (email,password)
        .then(res=>{
            console.log(res)
            navigate('/')
        
        }).catch(erro =>{
            console.log(erro.message)
        })
        
    }

    const handleFacebook=()=>{
        logInFacebook()
        .then(res=>{
            console.log(res)
            navigate('/')
        }).catch(error=>console.log(error.code))}
  

    return (
        <div className='flex justify-center items-center flex-col pb-6'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handlForm} className="card-body">

                <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input name='fname' type="text" placeholder="First Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input name='lname' type="text" placeholder="Last Name" className="input input-bordered" required />
                    </div>


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
                      
                    </div>
                     
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">conform password</span>
                        </label>
                        <input name='cpassword' type="password" placeholder="conform password" className="input input-bordered" required />
                      
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <h1 className='font-semibold text-center'>Already have an accout <Link to='/login' className='text-red-600 hover:underline'>Login ?</Link></h1>
                </form>
            </div>
            <div className='flex justify-center items-center flex-col space-y-3 mt-1'>
                <div className='divider'>or</div>

                <button onClick={handleFacebook} className='flex items-center gap-4 font-semibold border-2 py-1 px-4 rounded-lg'> <span><FaFacebook className='text-3xl ' /></span>Continue With Facebook</button>
                <button onClick={handlGoogle} className='flex items-center gap-4 font-semibold border-2 py-2 px-4 rounded-lg'> <span><FaGoogle className='text-3xl ' /></span>Continue With Google</button>
            </div>
        </div>
    );
};

export default Register;