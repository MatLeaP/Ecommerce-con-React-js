import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCmSy0yOx6JpJ79yVMNhivDAc4L_HZYoQU",
    authDomain: "prueba-18295.firebaseapp.com",
    projectId: "prueba-18295",
    storageBucket: "prueba-18295.appspot.com",
    messagingSenderId: "105434654004",
    appId: "1:105434654004:web:1117fb7a721101c1433161",
    measurementId: "G-L32XR66FPT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firestoredb = getFirestore(app)