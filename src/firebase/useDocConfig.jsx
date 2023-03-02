import {
  collection,
  getFirestore,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDy9HVRtq2_toLRCxCefBmg4rMads3Pw0M",
  authDomain: "finance-traker-65d35.firebaseapp.com",
  projectId: "finance-traker-65d35",
  storageBucket: "finance-traker-65d35.appspot.com",
  messagingSenderId: "969162962951",
  appId: "1:969162962951:web:749f54645be8f0bcc8d2a2",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const usersCollectionRef = collection(db, "users");

export const addDocs = () => {
  const setDocItem = async (docs, userId) => {
    try {
      await addDoc(collection(db, `${userId}`), { ...docs });
    } catch (err) {
      console.log(err);
    }
  };
  return setDocItem;
};

const updateItem = () => {
  const updateEl = async (userId, elID) => {
    await updateDoc(doc(db, `${userId}`, elID));
  };
  return updateEl;
};

export { collection, onSnapshot, db, updateItem };
