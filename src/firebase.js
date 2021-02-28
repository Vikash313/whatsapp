import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFkcwdGjo9t-lXHtfu7MfE8UJFWhW_-NA",
  authDomain: "whats-app-142da.firebaseapp.com",
  projectId: "whats-app-142da",
  storageBucket: "whats-app-142da.appspot.com",
  messagingSenderId: "402405319232",
  appId: "1:402405319232:web:ff2decfbf144c1f755f5a5",
  measurementId: "G-ETTYE5K1PP"
};

const firebaseApp = firebase.initializeApp
(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.
GoogleAuthProvider();

export { auth, provider };
export default db;
