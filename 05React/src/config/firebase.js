// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg8WbmH9oyNa1yGl6smHrCVIGefE9BZOo",
  authDomain: "vite-contact-879f2.firebaseapp.com",
  projectId: "vite-contact-879f2",
  storageBucket: "vite-contact-879f2.firebasestorage.app",
  messagingSenderId: "700945479724",
  appId: "1:700945479724:web:0ff3e27b6c39ab0cf6f989"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);