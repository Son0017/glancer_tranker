import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../firebase/useAuthConfig";
import { useAuthconfig } from "../hooks/useCantexts";

import { updateProfile } from "firebase/auth";

function useSignup() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthconfig();
  const signup = async (displayName, login, password) => {
    setIsPending(true);
    setError(null);

    try {
      const res = await createUserWithEmailAndPassword(auth, login, password);
      if (!res) {
        throw new Error("you`re wrong");
      }
      await updateProfile(auth.currentUser, { displayName });

      dispatch({ type: "SIGNUP", peyload: res.user });

      setIsPending(false);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      setIsPending(false);
    }
  };

  return { isPending, error, signup };
}

export default useSignup;
