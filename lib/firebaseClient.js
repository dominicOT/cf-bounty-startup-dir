import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9lkSNuGaHw6MTO6btk6_hyX5CdWnjNIk",
    authDomain: "bounty-f84de.firebaseapp.com",
    projectId: "bounty-f84de",
    storageBucket: "bounty-f84de.firebasestorage.app",
    messagingSenderId: "252797681124",
    appId: "1:252797681124:web:0821652cfae54990ee5bf1"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
