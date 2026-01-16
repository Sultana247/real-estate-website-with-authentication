import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
     const [error, setError]=useState('')
    const navigate = useNavigate();
    const {loginUser} = useContext(AuthContext);
    const handleLogin =(e)=>{
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
        .then(result=>{
            console.log(result.user)
            navigate('/')
        })
        .catch(error=>{
            setError(error.message);
            toast.error("Email or Password not matched")
        })
    }

    return (
         <div className='bg-gray-200'>
            
         
         {/* login form  */}
            <div className='flex justify-center items-center pt-25 bg-gray-200 '>
                
                <form onSubmit={handleLogin} className="fieldset bg-base-200 border-base-300 rounded-box p-15 border w-1/3 mb-55 ">
                    <legend className=" text-2xl text-center font-bold ">Login your account</legend>
                    <div className='border border-gray-300 mt-8 mb-8'></div>

                    <div className='flex flex-col '>
                        <label className="label">Email Address</label>
                    <input name='email' type="email" className="input " placeholder="Enter your email address" required/>

                    <label className="label mt-5">Password</label>
                    <input name='password' type="password" className="input " placeholder="Enter your Password" required/>
                    </div>
                    <ToastContainer/>

                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    <p className='text-center'>Don't have an account?<Link to='/register' className='text-red-400'>Register</Link></p>
                </form>
                
            </div>
        </div>

    );
};

export default Login;