import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    // create user with email and password
    const registerUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sigin in with email and password
    const loginUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // update current user profile
    const updateUserInfo=(name, photourl)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: photourl
        })
    }

    // sign in with google
    const loginWithPopUp=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    // logout
    const logout=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const authinfo ={user, registerUser, loginUser, logout, updateUserInfo, loginWithPopUp, loading};
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser);
            console.log('observing current user', currentuser);
            setLoading(false);
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