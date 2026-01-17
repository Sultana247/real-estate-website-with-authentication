import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub } from "react-icons/fa";

const Login = () => {
     const [error, setError]=useState('')
    const navigate = useNavigate();
    const {loginUser, loginWithPopUp} = useContext(AuthContext);
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
    // google login
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = ()=>{
        loginWithPopUp(googleProvider)
        .then(resutl=>{
            console.log(resutl.user)
            toast.success("Successfully logged in with Google");
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    // Github login
    const githubProvider = new GithubAuthProvider();
    const handleGithubLogin =() =>{
        loginWithPopUp(githubProvider)
        .then(resutl=>{
            console.log(resutl.user)
            toast.success("Successfully logged in with GitHub");
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
         <div className='bg-gray-200 p-55'>
            
         
         {/* login form  */}
            <div className='flex flex-col justify-center items-center bg-base-200 border border-gray-300 rounded-box  p-8'>
                
                <form onSubmit={handleLogin} className="fieldset   w-1/3  ">
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
                   
                </form>
                <button onClick={handleGoogleLogin} className='btn flex gap-3 w-1/3 mt-5'><FcGoogle /> Sign In With Google</button>
                <button onClick={handleGithubLogin} className='btn flex gap-3 w-1/3 mt-5'><FaGithub /> Sign In With Github</button>
                 <p className='text-center mt-5 '>Don't have an account?<Link to='/register' className='text-red-400'>Register</Link></p>
            </div>
        </div>

    );
};

export default Login;