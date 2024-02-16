// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ_W93MHin24JUl93PkU8G99eiPwLonVM",
  authDomain: "unogame-c81ce.firebaseapp.com",
  projectId: "unogame-c81ce",
  storageBucket: "unogame-c81ce.appspot.com",
  messagingSenderId: "1071789266719",
  appId: "1:1071789266719:web:9196e9de9cda7e73cfc22a",
  measurementId: "G-J8GG9KR34Q",
  databaseURL: "https://unogame-c81ce-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const auth = getAuth(app);
