import React, { useEffect, useState } from "react";
import { onSnapshot, collection, db } from "../firebase/useDocConfig";
import { BsPencil, MdOutlineDeleteOutline } from "react-icons/all";
import { useAuthconfig } from "../hooks/useCantexts";
// import Modal from "./Modal";
function List() {
  const { user } = useAuthconfig();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {
    setIsPending(true);
    onSnapshot(collection(db, `${user.email}`), (docs) => {
      if (!docs.empty) {
        const data = [];
        docs.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setData(data);
        setIsPending(false);
      } else {
        setIsPending(false);
        setError("No recipies to lead");
      }
    });
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {isPending && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {/* {showModal && <Modal />} */}
      {data &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              className="px-4 py-3 border rounded flex justify-between items-center "
            >
              <h3 className="cursor-pointer">{item.name}</h3>
              <span className="text-2xl flex gap-1 items-center">
                <span className="text-sm">18:25</span>
                <span className="cursor-pointer">
                  <BsPencil />
                </span>
                <span className="text-3xl cursor-pointer">
                  <MdOutlineDeleteOutline />
                </span>
              </span>
            </div>
          );
        })}
    </div>
  );
}

export default List;
