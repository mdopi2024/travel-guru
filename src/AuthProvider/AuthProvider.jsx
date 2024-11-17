import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext()
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider,  onAuthStateChanged,  sendPasswordResetEmail,  signInWithEmailAndPassword,  signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';


const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider
    const facebookProvider = new FacebookAuthProvider
    const [user,setUser]=useState(null)
    console.log(user)


    const registerGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const registerForm = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInForm =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logInFacebook=()=>{
        return signInWithPopup(auth,facebookProvider)
    }

    const logOut=()=>{
        return signOut(auth)
    }


    const resetPass =(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

   useEffect(()=>{
     const unsurcribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
     })
     return ()=>unsurcribe()
   },[])



    const authInFo = {
        resetPass,
        logInFacebook,
        logOut,
        logInForm,
        registerForm ,
        registerGoogle,
    }
    return (
        <AuthContext.Provider value={authInFo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;