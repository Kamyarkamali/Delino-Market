import hero from "../../assets/homepage/pleased-happy-young-woman-gazes-with-happiness-points-with-thumb-aside-free-space-eats-pizza-shows-direction-keeps-jaw-dropped-exclaims-happiness-isolated-yellow-wall-min.jpg";
import hero2 from "../../assets/homepage/her2.jpg";
import hero3 from "../../assets/homepage/her3.jpg";
import { IoArrowForward } from "react-icons/io5";

function Hero2Page() {
  return (
    <>
      <div className="max-w-[1400px] z-10 hidden her3 shadow-lg  md:gap-9 shadow-yellow-400  hero2 md:flex justify-between items-center mx-auto mt-9 bg-[#FFDF68] p-3 h-[300px]">
        <div>
          <div className="relative">
            <img
              src={hero3}
              alt="/"
              className="2xl:w-[400px] xl:w-[350px] lg:w-[330px] mr-4 shadow-md hero3 hover:scale-110 duration-300 hero object-cover"
            />
            <h2 className="absolute w-[200px] text-red-600 2xl:text-[19px] 2xl:top-[4rem] xl:top-[3rem]  2xl:right-[1rem] xl:right-[1.7rem] lg:right-[1rem] lg:top-[3rem] font-bold top-0 left-0 right-0">
              شرکت در قرعه کشی
            </h2>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src={hero2}
              alt="/"
              className="2xl:w-[400px] xl:w-[350px] lg:w-[330px] shadow-md hover:scale-110 duration-300 hero object-cover"
            />
            <h2 className="absolute w-[200px] text-red-600 2xl:text-[17px] 2xl:top-[4rem] xl:top-[3rem] 2xl:right-[0.3rem] xl:right-[0.2rem] lg:right-[0.1.1rem] lg:top-[3rem] font-bold top-0 left-0 right-0">
              تخفیف 40% درصدی
            </h2>
          </div>
        </div>
        <div className="relative">
          <img
            src={hero}
            alt="/"
            className="2xl:w-[400px] xl:w-[350px] lg:w-[330px] shadow-md hover:scale-110 duration-300 hero object-cover"
          />
          <h2 className="absolute text-red-600 2xl:text-[19px] 2xl:top-[4rem] lg:top-[3rem] xl:top-[3rem] 2xl:right-[0.3rem] xl:right-[0.5rem] font-bold top-0 left-0 right-0">
            سوپرایزی ویژه برای مشتریان!
          </h2>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-orange-500 hidden lg:flex gap-3 text-white items-center p-2 rounded-sm">
          <IoArrowForward
            size={22}
            className="border-[1px] bg-yellow-300 rounded-full"
          />
          دیدن اطلاعات بیشتر
        </button>
      </div>
      {/* size mobile */}
      <div className="gap-3 md:hidden justify-center p-2 rounded-md w-[300px] mx-auto">
        <div className="relative">
          <img
            src={hero}
            alt="/"
            className="w-[300px] shadow-lg shadow-gray-400 image1 hover:scale-105 duration-300 rounded-md mt-3"
          />
          <p className="absolute top-8 right-0 text-sm text-red-600 font-bold">
            سوپرایزی ویژه برای مشتریان!
          </p>
        </div>
        <div className="relative">
          <img
            src={hero2}
            alt="/"
            className="w-[300px] shadow-lg shadow-gray-400 image2 hover:scale-105 duration-300 rounded-md mt-3"
          />
          <p className="absolute top-8 right-0 text-sm text-red-600 font-bold">
            تخفیف 40% درصدی
          </p>
        </div>
        <div className="relative">
          <img
            src={hero3}
            alt="/"
            className="w-[300px] shadow-lg shadow-gray-400 image3 hover:scale-105 duration-300 rounded-md mt-3"
          />
          <p className="absolute top-8 right-0 text-sm text-red-600 font-bold">
            شرکت در قرعه کشی
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero2Page;
