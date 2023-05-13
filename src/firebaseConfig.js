// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRHckTC4kbieHwJ1CjMzZ3RHTsHFE2DQs",
  authDomain: "mern-redux-shop.firebaseapp.com",
  projectId: "mern-redux-shop",
  storageBucket: "mern-redux-shop.appspot.com",
  messagingSenderId: "904756181090",
  appId: "1:904756181090:web:dbb65eb6c029d069bfb93b",
  measurementId: "G-KMR4SKSH9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { app, auth, firestore };
