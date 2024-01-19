// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA6twFC0B6TVsipvw9-ISCfQAuHOATee10",
  authDomain: "job-portal-c3290.firebaseapp.com",
  projectId: "job-portal-c3290",
  storageBucket: "job-portal-c3290.appspot.com",
  messagingSenderId: "259404230219",
  appId: "1:259404230219:web:71fb9cdb7c5593b3dbe7ce",
  measurementId: "G-W7CB1F5HEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export {db,auth};