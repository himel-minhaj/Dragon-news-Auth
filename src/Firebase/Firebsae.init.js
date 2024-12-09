// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiEZfDcr5sdsWVBj8qvMuggmcJ6drbkB0",
  authDomain: "dragon-news-82e7f.firebaseapp.com",
  projectId: "dragon-news-82e7f",
  storageBucket: "dragon-news-82e7f.firebasestorage.app",
  messagingSenderId: "1028243885668",
  appId: "1:1028243885668:web:a827e4e15622704e799971",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
