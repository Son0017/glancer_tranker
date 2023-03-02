import React, { useState } from "react";
// import { useAuthconfig } from "../hooks/useCantexts";
import { useLogin } from "../hooks/useLogin";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isPending, error, logIn } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="mb-10 text-3xl font-bold">Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            email name
          </span>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </label>
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            password
          </span>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            required
          />
        </label>
        {!isPending && (
          <button
            className="border-2 px-3 py-1 rounded border-green-400 hover:bg-green-400 hover:text-white"
            type="submit"
          >
            Signup
          </button>
        )}
        {isPending && (
          <button
            className="border-2 px-3 py-1 rounded border-green-400 hover:bg-green-400 hover:text-white"
            type="submit"
            disabled
          >
            Loading...
          </button>
        )}
      </form>
    </div>
  );
}

export default Signup;
