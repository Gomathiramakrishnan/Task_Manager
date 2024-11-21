// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD-YUZOV1_NhoopQVo6jTGhZelmp9d1AA",
  authDomain: "taskmanager-e4c61.firebaseapp.com",
  projectId: "taskmanager-e4c61",
  storageBucket: "taskmanager-e4c61.firebasestorage.app",
  messagingSenderId: "1014038401859",
  appId: "1:1014038401859:web:bb6625c2de4ddc430c15f6",
  measurementId: "G-PQF8WQ7HWW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);