// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ce1c7.firebaseapp.com",
  projectId: "mern-estate-ce1c7",
  storageBucket: "mern-estate-ce1c7.appspot.com",
  messagingSenderId: "750458134932",
  appId: "1:750458134932:web:47e3a029c70f6d24532f81",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
