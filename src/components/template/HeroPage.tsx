import apple from "../../assets/images/apple.jpg";
import gooleplay from "../../assets/images/googleplay.png";
import hero1 from "../../assets/images/logo2.jpg";

function HeroPage() {
  return (
    <div className="max-w-[1400px] relative mx-auto  md:grid-cols-2 justify-around">
      <div className="flex justify-center">
        <img
          className="2xl:w-[1400px] xl:w-[1400px] lg:w-[1200px] md:w-[800px] w-[348px] md:h-[600px] md:object-cover md:mr-3 h-[300px] rounded-l-[20px] rounded-[40px] shadow-lg shadow-gray-400 mt-8"
          src={hero1}
          alt="/"
        />
      </div>

      {/* <div>center</div> */}

      <div className="lg:w-[600px] z-10 absolute left-[5rem] 2xl:top-[5rem] xl:top-[6rem] lg:top-[7rem] lg:left-[1rem] md:top-[2rem] sm:top-[4rem] sm:left-[3rem] sm:w-[200px] md:left-[1.3rem] top-[3rem] flex flex-col justify-center items-center mt-5">
        <h1 className="lg:text-2xl sm:text-[16px]   text-orange-700 flex items-center">
          با{" "}
          <span className="text-orange-600 md:text-xl text-sm font-bold">
            کامیار فود
          </span>
          طعمی متفاوت را امتحان کنید
        </h1>
        <h1 className="lg:text-2xl sm:block hidden text-sm sm:text-[16px] text-md text-center mt-8 text-blue-600 font-bold">
          محیطی گرم و آرام را در کنار خانواده تجربه کنید
        </h1>
        <p className="text-center sm:block hidden text-sm mt-9 sm:text-[16px] lg:text-xl font-bold">
          با استفاده از اپلیکشن رستوران میتوانید سفارش ها را آنلاین انجام دهید
        </p>
        <div>
          <div className="flex text-sm justify-center md:mt-8 mt-[1rem]">
            <button className="bg-red-600 2xl:p-2 p-1 lg:w-[140px] rounded-md text-white hover:bg-orange-600 duration-300">
              سفارش سریع
            </button>
          </div>
          <div className="flex justify-center items-center md:gap-10 sm:gap-3 gap-2 md:mt-9 mt-[2rem]">
            <img
              className="lg:w-[150px] lg:h-[70px] w-[120px] h-[30px] object-cover cursor-pointer"
              src={gooleplay}
              alt=""
            />
            <img
              className="lg:w-[150px] lg:h-[50px] object-cover w-[100px] h-[30px] cursor-pointer"
              src={apple}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
