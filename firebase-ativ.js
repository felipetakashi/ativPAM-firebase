// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClUqFNz7JhKeZViJ6qouipfmy7ya2N2ik",
  authDomain: "ativpam.firebaseapp.com",
  projectId: "ativpam",
  storageBucket: "ativpam.appspot.com",
  messagingSenderId: "468602435855",
  appId: "1:468602435855:web:6098790e587b25f80ea67a",
  measurementId: "G-X7TW8B5WPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);