// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3F7tZ25x2AdDfqU1NRN0-x43SYHiKkLk",
  authDomain: "react-curso-925da.firebaseapp.com",
  projectId: "react-curso-925da",
  storageBucket: "react-curso-925da.appspot.com",
  messagingSenderId: "712092236442",
  appId: "1:712092236442:web:f3b932c5ee8f637556fd23"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore( FirebaseApp )