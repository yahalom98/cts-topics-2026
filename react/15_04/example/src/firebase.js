// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWSgSmicxs0fQTp2MZQEhsJ62TpaiYE2g",
  authDomain: "alchamdulila.firebaseapp.com",
  projectId: "alchamdulila",
  storageBucket: "alchamdulila.firebasestorage.app",
  messagingSenderId: "759379088090",
  appId: "1:759379088090:web:0b149926adb0be7e974be3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let db = getFirestore(app)
