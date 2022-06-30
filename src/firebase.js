import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiACeSQuYqpXbQBvJ2j0O2dOqxZW6XFzM",
  authDomain: "my-slack-d07c6.firebaseapp.com",
  projectId: "my-slack-d07c6",
  storageBucket: "my-slack-d07c6.appspot.com",
  messagingSenderId: "488064498670",
  appId: "1:488064498670:web:b080f14838b9ccca5cecff",
  measurementId: "G-E6KZYBPJNQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
