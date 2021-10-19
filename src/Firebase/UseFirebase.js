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
 const [isloading,setIsloading]=useState(true)
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();


const signInUsingGoogle =()=>{
       setIsloading(true)
 signInWithPopup(auth,googleProvider)   
        .then(result=>{
            setUser(result.user)
            console.log(result);
        })
        .catch(error=>{
            console.log(error.message);
        })
        .finally(()=>setIsloading(false))
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
            setIsloading(false)
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
        handleLogin,
        isloading

    }
}


export default useFirebase;