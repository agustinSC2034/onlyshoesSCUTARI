// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7ANw7kYgZ5VGTwElR_deckYG7FcofaXg",
  authDomain: "onlyshoes-coderhouse.firebaseapp.com",
  projectId: "onlyshoes-coderhouse",
  storageBucket: "onlyshoes-coderhouse.appspot.com",
  messagingSenderId: "511667661704",
  appId: "1:511667661704:web:9b10dda141d8e0e76de83d",
  measurementId: "G-B68LJE1QWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);