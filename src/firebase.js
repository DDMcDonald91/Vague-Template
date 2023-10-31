// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuZnkMxCHc7znqhpO0pHVOvaJwlTm14Eo",
  authDomain: "tia-s-candles.firebaseapp.com",
  projectId: "tia-s-candles",
  storageBucket: "tia-s-candles.appspot.com",
  messagingSenderId: "1010413283598",
  appId: "1:1010413283598:web:15bdf93c97fb052738cf5f",
  measurementId: "G-YNQGH7C9YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);