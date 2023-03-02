import React from "react";

function Modal() {
  return (
    <div className="absolute flex justify-center top-0 left-0 bg-gray-500 items-center w-full h-[100vh]">
      <div className="bg-gray-400 flex px-10 py-9 gap-4">
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            display name
          </span>
          <input
            type="text"
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="display name"
            required
          />
        </label>
        <button className="border-2 px-3 py-1 rounded border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
          Up date
        </button>
      </div>
    </div>
  );
}

export default Modal;
