// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ_W93MHin24JUl93PkU8G99eiPwLonVM",
  authDomain: "unogame-c81ce.firebaseapp.com",
  projectId: "unogame-c81ce",
  storageBucket: "unogame-c81ce.appspot.com",
  messagingSenderId: "1071789266719",
  appId: "1:1071789266719:web:9196e9de9cda7e73cfc22a",
  measurementId: "G-J8GG9KR34Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);