import { useEffect, useState } from "react";
import { menuZiyafat, menuTooska, menuFastfoodTam, menShani } from "../../data";
import { CartItem, Foodtim } from "../../types/type";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CreatReducer/actionReducer";
import { MESSEGEALERT } from "../../types/enums";
import toast, { Toaster } from "react-hot-toast";
import { sp } from "../../replaceNumber";
import { useParams } from "react-router-dom";

function MenuZiyafat() {
  const [local, setLocal] = useState<CartItem[]>([]);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setLocal(storeData);
  }, []);

  const addToCartHandler = (item: Foodtim) => {
    const updatedCart = [...local, { ...item, quantity: 1 }];
    /* @ts-ignore */
    setLocal(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    dispatch(addToCart(item));
    toast.success(MESSEGEALERT.success);
  };

  let selectedData: any[] = [];
  switch (id) {
    case "رستوران ضیافت نو":
      selectedData = menuZiyafat;
      break;
    case "تهیه غذای محلی توسکا":
      selectedData = menuTooska;
      break;
    case "فست فود تام":
      selectedData = menuFastfoodTam;
      break;
    case "رستوران شانی":
      selectedData = menShani;
      break;
    default:
      selectedData = [];
  }

  return (
    <div className="bg-[#F8F8F8] p-4 flex justify-center rounded-lg max-w-[1400px] m-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 bg-white rounded-lg lg:w-[1400px] w-[390px]">
        {selectedData.map((i) => (
          <div
            key={i.id}
            className="shadow-md hover:scale-105 relative hover:shadow-lg duration-300 mt-5 p-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={i.image}
                className="w-[100px] rounded-md cursor-zoom-in"
                alt="/"
              />

              <span className="font-bold text-gray-700">{i.name}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] mt-3 leading-7 text-gray-700 font-bold">
                {i.title}
              </span>
              <span className="text-[13px] mt-3 text-red-500 font-bold">
                {sp(i.price)} تومان
              </span>
            </div>
            <span className="absolute flex items-center w-[40px] text-center top-0 left-0 bg-red-500 p-1 discount text-white">
              <span>%</span>
              {i.discount}
            </span>

            <div className="absolute border-[1px] rounded-full w-[20px] flex justify-center border-gray-500 text-md cursor-pointer left-4 bottom-3">
              {/* @ts-ignore */}
              <span onClick={() => addToCartHandler(i)}>+</span>
            </div>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
}

export default MenuZiyafat;
