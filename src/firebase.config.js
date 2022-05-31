import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY-dDK2maij09PvuoyzV_AsAObrXB67nc",
  authDomain: "house-market-app-89394.firebaseapp.com",
  projectId: "house-market-app-89394",
  storageBucket: "house-market-app-89394.appspot.com",
  messagingSenderId: "404763975435",
  appId: "1:404763975435:web:0312581f71d6ccee4acc0e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()