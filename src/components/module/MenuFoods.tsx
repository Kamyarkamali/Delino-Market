import { FC } from "react";
import { Foodtim, IfoodsState } from "../../types/type";
import toast, { Toaster } from "react-hot-toast";
// enums
import { MESSEGEALERT } from "../../types/enums";

import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CreatReducer/actionReducer";

const MenuFoods: FC<IfoodsState> = ({ showFoods }) => {
  const dispatch = useDispatch();

  const incrementHandeler = (item: Foodtim) => {
    dispatch(addToCart(item));
    toast.success(MESSEGEALERT.success);
  };

  return (
    <div>
      <div className="flex gap-10 flex-wrap justify-center mt-9">
        {showFoods.map((i) => (
          <div
            key={i.id}
            className="border-2 image4 p-6 rounded-lg bg-[#110831]"
          >
            {/* <Link to={`/${i.title}`}> */}
            <img
              className="w-[300px] image4 h-[300px] rounded-md object-cover"
              src={i.image}
              alt={i.title}
            />
            {/* </Link> */}
            <div className="flex items-center justify-between">
              <p className="text-xl text-white mt-4">{i.title}</p>
              <p
                onClick={() => incrementHandeler(i)}
                className="border-2 rounded-full p-1 bg-white cursor-pointer"
              >
                {i.icon}
              </p>
            </div>
            <p className="flex justify-center mt-5 text-md font-bold text-white">
              تومان {i.price}
            </p>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
};

export default MenuFoods;
