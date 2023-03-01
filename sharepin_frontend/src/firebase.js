// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB30zWaV_KiWFm_uLmjhLKRDZrOtpeYpeA",
  authDomain: "shareit-c5acb.firebaseapp.com",
  projectId: "shareit-c5acb",
  storageBucket: "shareit-c5acb.appspot.com",
  messagingSenderId: "619921216395",
  appId: "1:619921216395:web:16e2607e570082ba4e158e",
  measurementId: "G-Y87H9BP0JH",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };

