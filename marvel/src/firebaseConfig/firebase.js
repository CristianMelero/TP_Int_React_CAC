// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6GpT6k3TkW_EV5CqaQiQZhoJCMwADDeg",
  authDomain: "marvel-cac-23307.firebaseapp.com",
  projectId: "marvel-cac-23307",
  storageBucket: "marvel-cac-23307.appspot.com",
  messagingSenderId: "177367384237",
  appId: "1:177367384237:web:0d6c0c60dc0f71e916c624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db }