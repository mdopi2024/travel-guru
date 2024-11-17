import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext()
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,  onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';


const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider
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

    const logOut=()=>{
        return signOut(auth)
    }

   useEffect(()=>{
     const unsurcribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
     })
     return ()=>unsurcribe()
   },[])


    const authInFo = {
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