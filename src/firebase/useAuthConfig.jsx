import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDy9HVRtq2_toLRCxCefBmg4rMads3Pw0M",
  authDomain: "finance-traker-65d35.firebaseapp.com",
  projectId: "finance-traker-65d35",
  storageBucket: "finance-traker-65d35.appspot.com",
  messagingSenderId: "969162962951",
  appId: "1:969162962951:web:749f54645be8f0bcc8d2a2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
};
