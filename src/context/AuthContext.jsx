import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChanged, auth } from "../firebase/useAuthConfig";
export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP": {
      return { ...state, user: action.peyload };
    }
    case "AuthChange": {
      return { ...state, user: action.peyload, authReady: true };
    }
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authReady: false,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "AuthChange",
        peyload: user,
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
