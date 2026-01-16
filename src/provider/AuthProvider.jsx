import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    
    // create user with email and password
    const registerUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sigin in with email and password
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    // update current user profile
    const updateUserInfo=(name, photourl)=>{
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: photourl
        })
    }
    // logout
    const logout=()=>{
        return signOut(auth);
    }

    const authinfo ={user, registerUser, loginUser, logout, updateUserInfo};
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