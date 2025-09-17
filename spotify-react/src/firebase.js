// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7oi0WxgRzyHA-EBMg6cxI6h5zyI3whDA",
  authDomain: "spotify-login-signup.firebaseapp.com",
  projectId: "spotify-login-signup",
  storageBucket: "spotify-login-signup.firebasestorage.app",
  messagingSenderId: "611453824056",
  appId: "1:611453824056:web:42c5f900a3b8727108cacd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
