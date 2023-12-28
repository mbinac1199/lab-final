// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuD4ZStLSKP1uG23nKy1WtzCjgOwJqoM8",
  authDomain: "universities-717d3.firebaseapp.com",
  projectId: "universities-717d3",
  storageBucket: "universities-717d3.appspot.com",
  messagingSenderId: "1089447541964",
  appId: "1:1089447541964:web:c673dfbff25e46a238d669",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
