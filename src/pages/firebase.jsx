// src/pages/firebase.jsx
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
        apiKey: "AIzaSyAdtHrJHylyqN240Ga_Kv_As7epuAZ2zC4",
        authDomain: "educater-s-dd345.firebaseapp.com",
        projectId: "educater-s-dd345",
        storageBucket: "educater-s-dd345.firebasestorage.app",
        messagingSenderId: "248864891194",
        appId: "1:248864891194:web:4e6479e57a33fdda7ff003",
        measurementId: "G-2HGW218LS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export Firebase auth methods
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
};
