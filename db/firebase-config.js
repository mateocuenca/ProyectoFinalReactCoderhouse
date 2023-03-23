"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQHA07lDw6s6mWokKo0aczBjnRTMOlkdY",
  authDomain: "coder-test-af640.firebaseapp.com",
  projectId: "coder-test-af640",
  storageBucket: "coder-test-af640.appspot.com",
  messagingSenderId: "384151364978",
  appId: "1:384151364978:web:c2b67c538cd4b84a1629eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
