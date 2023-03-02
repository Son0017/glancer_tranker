import React from "react";
import { useAuthconfig } from "../hooks/useCantexts";
import { signOut, auth } from "../firebase/useAuthConfig";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, dispatch } = useAuthconfig();

  const handleSignOut = async () => {
    await signOut(auth);
    dispatch({ type: "SIGNOUT", peyload: null });
  };

  return (
    <div className="bg-emerald-200 py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl">myMoney</h1>
        </Link>
        <nav>
          {!user && (
            <div className="flex gap-4">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
          {user && (
            <div className="flex gap-3 items-center">
              <h2 className="capitalize ,">
                <span>hello</span> {user.displayName}
              </h2>
              <button
                onClick={handleSignOut}
                className="border-2 px-3 py-1 rounded border-red-400 hover:bg-red-400 hover:text-white"
              >
                Sign Out
              </button>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
