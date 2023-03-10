import React, { useState } from "react";
import { useDocCon, Timestamp } from "../firebase/useDocConfig";
import { useAuthconfig } from "../hooks/useCantexts";
import List from "../components/List";
function Home() {
  const [data, setData] = useState({
    name: "",
    price: "",
    amount: 1,
  });
  const current_timestamp = Timestamp.fromDate(new Date());
  const { user } = useAuthconfig();
  const { setDocItem } = useDocCon(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.amount && data.name) {
      setDocItem({ ...data, current_timestamp });
      setData({
        name: "",
        price: "",
        amount: 1,
      });
    }
  };

  return (
    <div className="flex">
      <div className="grow ">
        <h1 className="mb-5 text-4xl">list...</h1>
        <List user={user} />
      </div>
      <div className="grow capitalize">
        <form
          onSubmit={handleSubmit}
          className="bg-emerald-400 py-3 px-4 rounded max-w-sm ml-auto"
        >
          <label className="block mb-4">
            <span className="block mb-1 text-sm font-medium dark:text-gray-900 text-white">
              Name
            </span>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              value={data.name}
              required
            />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm font-medium dark:text-gray-900 text-white">
              price
            </span>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              onChange={(e) => {
                setData({ ...data, price: e.target.value });
              }}
              value={data.price}
              required
            />
          </label>
          <label className="block mb-4">
            <span className="block mb-1 text-sm font-medium dark:text-gray-900 text-white">
              amount
            </span>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Amount"
              onChange={(e) => {
                setData({ ...data, amount: e.target.value });
              }}
              value={data.amount}
            />
          </label>
          <button
            className="border-2 px-3 font-extrabold py-1 rounded border-emerald-200 text-emerald-200 hover:bg-green-400 hover:text-white"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
