import initializeAthentication from "./Firebase.inite"
import { getAuth,
         signInWithPopup, 
         GoogleAuthProvider,
         signOut,onAuthStateChanged,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword 
        } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAthentication();
const useFirebase =()=>{
    const [user,setUser]=useState({})
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();


    const signInUsingGoogle =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
            console.log(result);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            }
          });
    },[])

    const handleRegister =(email,Password)=>{
        createUserWithEmailAndPassword(auth,email,Password)
        .then(result=>{
           console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    const handleLogin =(email,Password)=>{
        signInWithEmailAndPassword(auth,email,Password)
        .then(result=>{
            console.log(result.user);
        })
    }
    return{
        signInUsingGoogle,
        logOut,
        user,
        handleRegister,
        handleLogin

    }
}


export default useFirebase;