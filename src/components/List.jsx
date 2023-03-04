import React, { useEffect } from "react";
import { MdOutlineDeleteOutline } from "react-icons/all";
import { useDocCon } from "../firebase/useDocConfig";
// import { useAuthconfig } from "../hooks/useCantexts";

function List({ user }) {
  const { liststate, getsdata, deletaOneItem } = useDocCon(user);
  useEffect(() => {
    getsdata();
  }, []);
  let total = 0;
  liststate.data &&
    liststate.data.forEach((element) => {
      total += element.amount * element.price;
    });
  return (
    <div className="flex flex-col gap-2">
      {liststate.isPending && <div>Loading...</div>}
      {liststate.error && <div>{liststate.error}</div>}

      {liststate.data &&
        liststate.data.map((item) => {
          return (
            <div
              key={item.id}
              className="px-4 py-3 border rounded flex justify-between items-center "
            >
              <h3 className="cursor-pointer">{item.name}</h3>
              <span className="text-2xl flex gap-1 items-center">
                <span className="text-sm">
                  <span>{item.amount}x</span>
                  <span>{item.price}$</span>
                </span>
                <button
                  onClick={() => {
                    deletaOneItem(item.id);
                  }}
                  className="text-3xl cursor-pointer hover:text-red"
                >
                  <MdOutlineDeleteOutline />
                </button>
              </span>
            </div>
          );
        })}

      <div>{total}$</div>
    </div>
  );
}

export default List;
