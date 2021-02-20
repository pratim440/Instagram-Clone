import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmDicN3c2NS1zoXVjefde9vzPP7qQtTR0",
  authDomain: "instagram-clone-d272c.firebaseapp.com",
  projectId: "instagram-clone-d272c",
  storageBucket: "instagram-clone-d272c.appspot.com",
  messagingSenderId: "532854333044",
  appId: "1:532854333044:web:0d98e5830a5b58e2f57b21",
  measurementId: "G-Y6KPM16CM8",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
