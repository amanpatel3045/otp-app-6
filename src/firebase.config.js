// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbkktWycYzEs35-AmQChvXAY7HPNE6WR8",
  authDomain: "amanpatel-2575d.firebaseapp.com",
  projectId: "amanpatel-2575d",
  storageBucket: "amanpatel-2575d.appspot.com",
  messagingSenderId: "271067397263",
  appId: "1:271067397263:web:ce3bc1ed1b336150af04fa",
  measurementId: "G-GCXH90V5J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

























