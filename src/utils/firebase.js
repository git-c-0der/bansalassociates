// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiIapkO4Or0H-B2OonP4GAw_2jLoKu8m8",
  authDomain: "bansalassociates-6730b.firebaseapp.com",
  projectId: "bansalassociates-6730b",
  storageBucket: "bansalassociates-6730b.firebasestorage.app",
  messagingSenderId: "945684556667",
  appId: "1:945684556667:web:af25e576248c7b7f642bde",
  measurementId: "G-658BS0BGH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);