import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

// icons
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

// types
import { CartItem, Istore } from "../../types/type";

// redux
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../Redux/CreatReducer/actionReducer";
import { MESSEGEALERT } from "../../types/enums";

const StoreShoop: FC<Istore> = ({ store, setStore }) => {
  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      x: 10,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const dispatch = useDispatch();

  const [local, setLocal] = useState<CartItem[]>([]);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setLocal(storeData);
  }, []);

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

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={store ? "open" : "closed"}
      className="bg-slate-100 w-[300px] p-2 rounded-md h-screen border-2 relative"
    >
      <div className="absolute top-0 right-0">
        <IoClose
          onClick={() => setStore(!store)}
          size={22}
          className="cursor-pointer"
        />
      </div>
      <h1 className="text-center font-bold">سبد خرید شما</h1>
      {!local.length ? (
        <div className="flex flex-col items-center justify-center h-[300px]">
          <p className="bg-red-400 w-full text-center p-1 rounded-md text-white font-bold">
            سبد خرید خال است
          </p>
        </div>
      ) : (
        <div className="flex flex-col p-3 items-center border-2 rounded-md justify-center gap-4">
          {local.map((item) => (
            <div className="flex flex-col items-center" key={item.id}>
              <img
                src={item.image}
                alt="/"
                className="w-[100px] rounded-full"
              />
              {/* @ts-ignore */}

              <p className="text-sm mb-2 font-bold">{item.name}</p>
              <div className="flex gap-5">
                <button
                  onClick={() => increment(item.id)}
                  className="bg-yellow-400 flex justify-center items-center w-[80px] rounded-sm"
                >
                  <FaPlus size={13} />
                </button>
                <span>{item.quantity ? item.quantity : 0}</span>
                {item.quantity > 1 ? (
                  <button
                    onClick={() => decrements(item.id)}
                    className="bg-yellow-400 w-[70px] rounded-sm font-bold"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => removeItems(item.id)}
                    className="bg-yellow-400 flex justify-center items-center w-[80px] rounded-sm font-bold"
                  >
                    <RiDeleteBinLine size={17} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <Toaster />
    </motion.div>
  );
};

export default StoreShoop;
