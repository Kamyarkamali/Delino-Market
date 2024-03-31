import { Link } from "react-router-dom";
import { discount } from "../../data";

function Discount() {
  return (
    <>
      <h1 className="max-w-[1330px] m-auto mt-7 text-3xl text-gray-600 font-bold">
        تخفیف دارها
      </h1>
      <div className="max-w-[1330px] bg-white m-auto p-3 lg:flex grid grid-cols-2 items-center gap-3 justify-between mt-6">
        {discount.map((item) => (
          <div
            key={item.id}
            className="p-3 border-[1px] rounded-md shadow-lg shadow-gray-400 hover:opacity-85 duration-300"
          >
            <Link to={`/${item.name}`}>
              <div className="relative" key={item.id}>
                <img
                  className="w-[310px]  md:w-[500px] border-2 object-cover h-[160px] rounded-md"
                  src={item.image}
                  alt={item.name}
                />

                <p className="absolute p-1 font-bold discount top-0 left-0 text-white bg-red-500">
                  {item.discount} %
                </p>
                <p className="absolute w-full text-sm text-center border-2 rounded-lg bg-white bottom-0 text-gray-800 font-bold p-1">
                  {item.name}
                </p>
                <div className="absolute bg-black/20 top-0 w-full h-full">
                  .
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Discount;
