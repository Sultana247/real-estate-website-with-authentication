import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const authinfo ={user};

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser);
            console.log('observing current user', currentuser);
        });
        return unsubscribe;
    },[])
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;