// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOEIckLv5F1COqpvqT_bTzsjkhv0VfKqw",
  authDomain: "omribelzer-f0321.firebaseapp.com",
  projectId: "omribelzer-f0321",
  storageBucket: "omribelzer-f0321.firebasestorage.app",
  messagingSenderId: "465993698572",
  appId: "1:465993698572:web:60a4b50f13400986760d29",
  measurementId: "G-8MB4DFT5MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let db = getFirestore(app);



// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "Netflix"), {
  Email: "Tokyo",
  Password: ""
});
console.log("Document written with ID: ", docRef.id);