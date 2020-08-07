import firebase from "firebse";
export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnqBpUutwXsMwEXSM7MNWCThP17uN4V2U",
  authDomain: "clone-84d45.firebaseapp.com",
  databaseURL: "https://clone-84d45.firebaseio.com",
  projectId: "clone-84d45",
  storageBucket: "clone-84d45.appspot.com",
  messagingSenderId: "412787858355",
  appId: "1:412787858355:web:e6cf799b4addd9d94649c6",
  measurementId: "G-CYSYTSF4WF",
});
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
