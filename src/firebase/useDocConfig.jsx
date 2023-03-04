import {
  collection,
  getFirestore,
  addDoc,
  onSnapshot,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useReducer } from "react";

import { app } from "./useAuthConfig";

const db = getFirestore(app);
// const usersCollectionRef = collection(db, "users");

const getList = (state, action) => {
  switch (action.type) {
    case "SUCCES":
      return {
        ...state,
        data: action.peyload,
        success: true,
        isPending: false,
      };
    case "error":
      return {
        ...state,
        error: action.peyload,
        success: false,
        isPending: false,
        data: null,
      };
    default:
      return state;
  }
};
const useDocCon = (user) => {
  const [liststate, listDispatch] = useReducer(getList, {
    data: null,
    success: false,
    error: null,
    isPending: true,
  });
  const setDocItem = async (docs) => {
    try {
      await addDoc(collection(db, `${user.uid}`), { ...docs });
    } catch (err) {
      listDispatch({ type: "error", peyload: "Something went wrong!!" });
    }
  };

  const getsdata = () => {
    onSnapshot(collection(db, `${user.uid}`), (docs) => {
      if (!docs.empty) {
        const data = [];
        docs.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        listDispatch({ type: "SUCCES", peyload: data });
      } else {
        listDispatch({ type: "error", peyload: "No action" });
      }
    });
  };

  const deletaOneItem = async (id) => {
    await deleteDoc(doc(db, `${user.uid}`, id));
  };
  return { liststate, getsdata, setDocItem, deletaOneItem };
};

export { useDocCon, Timestamp };
