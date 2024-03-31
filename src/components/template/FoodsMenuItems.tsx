import { useParams } from "react-router-dom";
import { foodsMenu } from "../../data";
import toast, { Toaster } from "react-hot-toast";
import { MESSEGEALERT } from "../../types/enums";
import { useEffect, useState } from "react";
import { CartItem, Foodtim } from "../../types/type";
import { RiDeleteBinLine } from "react-icons/ri";

import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../Redux/CreatReducer/actionReducer";
import { useDispatch } from "react-redux";

function FoodsMenuItems() {
  const [local, setLocal] = useState<CartItem[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setLocal(storeData);
  }, []);

  const incrementHandeler = (item: Foodtim) => {
    dispatch(addToCart(item));
    const updateCart = [...local, { ...item, quantity: 1 }];
    /* @ts-ignore */
    setLocal(updateCart);
    localStorage.setItem("cartItems", JSON.stringify(updateCart));
    toast.success(MESSEGEALERT.success);
  };

  const increment = (id: number) => {
    dispatch(incrementQuantity(id));
    toast.success(MESSEGEALERT.incerements);
    const update = local.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setLocal(update);
  };

  const decrements = (id: number) => {
    dispatch(decrementQuantity(id));
    toast.success(MESSEGEALERT.decrement);
    const update = local.map((item) => {
      if (item.quantity === 1) {
        return;
      } else if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    /* @ts-ignore */
    setLocal(update);
  };

  const removeItems = (id: number) => {
    dispatch(removeItem(id));
    toast.error(MESSEGEALERT.delete);
    const updateFillter = local.filter((item) => item.id !== id);
    setLocal(updateFillter);
  };
  const { id } = useParams();
  // @ts-ignore
  const newfoods = foodsMenu[id - 1];
  return (
    <div className="max-w-[1400px] m-auto mt-9 flex justify-center">
      <div className="flex flex-col items-center">
        <img
          src={newfoods.image}
          className="w-full md:w-[500px] rounded-md"
          alt=""
        />
        <div className="flex mt-7">
          <h1 className="text-right text-xl text-gray-500 font-bold w-[200px]">
            {newfoods.title}
          </h1>
          <p className="text-xl text-pink-500 font-bold">
            {newfoods.price} تومان
          </p>
        </div>
        <div className="mt-4">
          {!local.length ? (
            <button
              // @ts-ignore
              onClick={() => incrementHandeler(newfoods)}
              className="bg-green-600 cursor-pointer p-1 mt-4 rounded-md text-white font-bold"
            >
              افزدون به سبد خرید
            </button>
          ) : (
            local.map((i) => (
              <div className="flex gap-4 items-center">
                <button
                  onClick={() => increment(i.id)}
                  className="bg-yellow-400 w-[80px] p-1 rounded-md text-white"
                >
                  +
                </button>
                <span>{i.quantity}</span>
                {i.quantity > 1 ? (
                  <button
                    onClick={() => decrements(i.id)}
                    className="bg-yellow-400 w-[80px] p-1 rounded-md text-white"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => removeItems(i.id)}
                    className="bg-yellow-400 flex justify-center w-[80px] p-1 rounded-md text-white"
                  >
                    <RiDeleteBinLine size={20} />
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default FoodsMenuItems;
