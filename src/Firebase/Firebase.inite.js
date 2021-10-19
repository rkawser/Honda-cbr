import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";


const initializeAthentication =()=>{
    initializeApp(firebaseConfig);
}

export default initializeAthentication;