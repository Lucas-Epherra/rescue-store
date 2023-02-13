// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvz80nU2emsDRua0oGtFy6feTuSLqD0LI",
  authDomain: "rescue-store.firebaseapp.com",
  projectId: "rescue-store",
  storageBucket: "rescue-store.appspot.com",
  messagingSenderId: "652263951951",
  appId: "1:652263951951:web:82f34149dc51eac8d0643a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)