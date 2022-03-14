
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCaikoddyGxCZPFeEuPLrIGuGtYJAEl3jo",
    authDomain: "ecommerce-ba1c7.firebaseapp.com",
    projectId: "ecommerce-ba1c7",
    storageBucket: "ecommerce-ba1c7.appspot.com",
    messagingSenderId: "836236999468",
    appId: "1:836236999468:web:f04d4d3f58c482a2408a89",
    measurementId: "G-N3MNL4DV3Q"
};




const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);