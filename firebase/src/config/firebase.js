// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6A4hxRTbj0HzD4ga4ubSpmcfpek-n1Co",
  authDomain: "test-project-beffc.firebaseapp.com",
  projectId: "test-project-beffc",
  storageBucket: "test-project-beffc.firebasestorage.app",
  messagingSenderId: "421097727861",
  appId: "1:421097727861:web:b14cbfeb9769330d72953c",
  measurementId: "G-23X7JG2LZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);