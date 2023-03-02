import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthconfig } from "../hooks/useCantexts";

function Protected({ children }) {
  const { user } = useAuthconfig();
  console.log(user);
  if (user) {
    return <Navigate to={"/"} replace />;
  }
  return children;
}
function ProtectedOne({ children }) {
  const { user } = useAuthconfig();
  console.log(user);
  if (!user) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
}
export { Protected, ProtectedOne };
