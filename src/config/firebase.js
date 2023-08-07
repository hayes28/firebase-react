// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBt-lrF1SBe3zdd-t34zPUAbDCwDA492Hk",
    authDomain: "fir-react-45848.firebaseapp.com",
    projectId: "fir-react-45848",
    storageBucket: "fir-react-45848.appspot.com",
    messagingSenderId: "639259426108",
    appId: "1:639259426108:web:79297693c4b21226957239",
    measurementId: "G-YSC5VP00QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
