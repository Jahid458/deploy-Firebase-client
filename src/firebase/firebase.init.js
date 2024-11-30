// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUVHNnR2-OfydGgvPT0sURwGoqxbmGWQg",
  authDomain: "coffee-store-72370.firebaseapp.com",
  projectId: "coffee-store-72370",
  storageBucket: "coffee-store-72370.firebasestorage.app",
  messagingSenderId: "996108117498",
  appId: "1:996108117498:web:9a6ba57e03b0c3b95bf043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
