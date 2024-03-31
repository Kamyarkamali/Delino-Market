import { useNavigate } from "react-router-dom";
import { dataFaiveritFood } from "../../data";

function Faivaritse() {
  const navigate = useNavigate();

  const navigateHandeler = () => {
    navigate("/");
  };

  return (
    <>
      <h1 className="max-w-[1300px] m-auto mb-9 text-3xl font-bold text-gray-700">
        دسته های محبوب
      </h1>
      <div className="max-w-[1300px] grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4 justify-center 2xl:gap-3 flex-wrap m-auto">
        {dataFaiveritFood.map((item) => (
          <div
            className="relative flex justify-center"
            key={item.id}
            onClick={navigateHandeler}
          >
            <img
              className="w-[250px] rounded-md"
              src={item.image}
              alt={item.name}
            />
            <p className="absolute bottom-0 text-white z-10 text-[18px] right-[2rem] 2xl:right-[1rem] lg:right-[4rem] sm:right-[4rem] md:right-[3rem]">
              {item.name}
            </p>
            <div className="absolute bg-black/20 bottom-0 2xl:w-full xl:w-[249px] lg:w-[248px] md:w-[248px] sm:w-[244px] w-[190px] h-full">
              .
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faivaritse;
