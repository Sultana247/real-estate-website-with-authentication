import React from 'react';
import { NavLink, Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
  import { ToastContainer, toast } from 'react-toastify';
import { useState, useContext } from 'react';
const Register = () => {
     const [user, setUser] = useState(null);
    const [errormessage, setErrormessage] = useState('')
    // toast 
   

    const {registerUser, updateUserInfo} = useContext(AuthContext);
    const handleRegister =e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const checkbox=e.target.check.checked;
        setErrormessage('')
        console.log(name, email, password, photo, checkbox)
        if(!checkbox){
            toast.error('please accept all terms and conditions')
            return ;
        }
        else if(password.length < 6){
            toast.error("Please ensure password length should be greater than 6 character")
            return ;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error("Please ensure One Character must be UPPERCASE!")
            return ;
        }
        else if(!/(?=.*[a-z])/.test(password)){
            toast.error("Please ensure One Character must be LOWERCASE!")
            return ;
        }

        else{
            registerUser(email, password)
            .then(result=>{
                console.log(result.user)
                setUser(result.user)
                toast.success("User registered Successfully!");
                // update name and photourl
                updateUserInfo(name, photo)
                .then(()=>{
                    console.log("Name and photo updated")
                })
                .catch(()=>{
                    console.log("error updating name and photo")
                })
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
    return (
         <div className='bg-gray-200'>
            
            
         
         {/* Register form  */}
            <div className='flex justify-center items-center pt-25 bg-gray-200 '>
                
                <form onSubmit={handleRegister} className="fieldset bg-base-200 border-base-300 rounded-box p-15 border w-1/3 mb-55 ">
                    <legend className=" text-2xl text-center font-bold ">Register your account</legend>
                    <div className='border border-gray-300 mt-8 mb-8'></div>

                    <div className='flex flex-col '>
                        <label className="label">Your Name</label>
                        <input name='name' type="text" className="input " placeholder="Enter your name" required />
                        <label className="label mt-5">Photo url</label>
                        <input name='photo' type="text" className="input " placeholder="Enter your photo" />

                        <label className="label mt-5">Email Address</label>
                        <input name='email' type="email" className="input " placeholder="Enter your email address" required/>

                        <label className="label mt-5">Password</label>
                        <input name='password' type="password" className="input " placeholder="Enter your Password" required/>
                        <div className='flex gap-4 mt-3'>
                            <input name='check' type="checkbox" />
                        <p> Accept terms & conditions</p>
                        <ToastContainer/>
                        </div>
                    </div>
                    
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    <Link to='/login' className='text-blue-700 text-center'>Login now</Link>
                    {errormessage && <p className='text-red-700 mt-4'>{errormessage}</p>}
                
                </form>
            </div>
        </div>

    );
};

export default Register;