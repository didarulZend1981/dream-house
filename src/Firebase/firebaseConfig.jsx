// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD9mLoPalziT80cvW-3dm1itLFMGaMMKg0",
  authDomain: "state-auth.firebaseapp.com",
  projectId: "state-auth",
  storageBucket: "state-auth.appspot.com",
  messagingSenderId: "224323089265",
  appId: "1:224323089265:web:d19edc0c419addeea6fcd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;