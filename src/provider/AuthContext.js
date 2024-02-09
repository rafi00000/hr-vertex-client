"use client"

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosSecure from "@/axiosConfig/useAxiosSecure";


export const coreContext = createContext(null);

const AuthContext = ({ children }) => {
    const axiosSecure = useAxiosSecure()
    const [user, setUser] = useState({});

    const [loading, setLoading] = useState(false);
    const googleProvider = new GoogleAuthProvider();

    const createUserEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setLoading(false);
                setUser(currentUser);
            }
            else {
                setUser({});

            }
            console.log(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [axiosSecure])

    const authInfo = {
        createUserEmail,
        logOut,
        googleLogIn,
        logIn,
        user,
        loading
    };

    return (
        <coreContext.Provider value={authInfo}>
            {children}
        </coreContext.Provider>
    );
};

export default AuthContext;