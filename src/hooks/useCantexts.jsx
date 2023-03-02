import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthconfig = () => {
  const cantext = useContext(AuthContext);
  return cantext;
};
