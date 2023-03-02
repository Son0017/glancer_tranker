import { useState } from "react";
import { signInWithEmailAndPassword, auth } from "../firebase/useAuthConfig";
import { useAuthconfig } from "../hooks/useCantexts";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthconfig();

  const logIn = async (login, password) => {
    setIsPending(true);
    try {
      const data = await signInWithEmailAndPassword(auth, login, password);
      if (!data) {
        throw new Error("someThing went wrong?");
      }
      dispatch({ type: "SIGNUP", peyload: data.user });
    } catch (err) {
      setError(err);
      setIsPending(false);
    }
  };
  return { isPending, error, logIn };
};
