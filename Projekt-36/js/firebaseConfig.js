// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL0_XkF1euCNJtUNmcEr5Tk-ZWSBBe8Xg",
  authDomain: "my-firebase-project-73596.firebaseapp.com",
  databaseURL: "https://my-firebase-project-73596-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-firebase-project-73596",
  storageBucket: "my-firebase-project-73596.appspot.com",
  messagingSenderId: "138994049607",
  appId: "1:138994049607:web:6f47ce983ddaad60eb8762",
  measurementId: "G-0LLDX8XSSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);