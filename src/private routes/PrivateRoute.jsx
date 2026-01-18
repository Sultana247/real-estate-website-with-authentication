import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if(loading){
        return <div className='flex justify-center items-center mt-40 mb-40'>
         <span className="loading loading-infinity loading-xl  "></span>
        </div>
    }
    if(user){
        return children;
    }
    
    return (
        <Navigate to='/login' state={{from: location.pathname}}></Navigate>
    );
};

export default PrivateRoute;