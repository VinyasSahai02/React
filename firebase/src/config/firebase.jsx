// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7bvoEu32GqpGpoanpwE-0ElJoDbmDCic",
  authDomain: "fir-project-4a657.firebaseapp.com",
  projectId: "fir-project-4a657",
  storageBucket: "fir-project-4a657.appspot.com",
  messagingSenderId: "443293610863",
  appId: "1:443293610863:web:9de50b35378aa64d40ae9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

