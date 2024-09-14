import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9HbExUGJ1pkDKxeyNL0I-6x_TxI4XhP0",
  authDomain: "open-7f75d.firebaseapp.com",
  projectId: "open-7f75d",
  storageBucket: "open-7f75d.appspot.com",
  messagingSenderId: "662853140913",
  appId: "1:662853140913:web:ce00995d3823cbad80bd90",
  measurementId: "G-K2VXWQB2TL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
