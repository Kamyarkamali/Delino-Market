import apple from "../../assets/images/apple.jpg";
import gooleplay from "../../assets/images/googleplay.png";
import hero from "../../assets/homepage/istockphoto-177497648-612x612.jpg";

function HeroPage() {
  return (
    <div className="max-w-[1400px] mx-auto lg:flex grid grid-cols-1 md:grid-cols-2 justify-around mt-9">
      <div>
        <img className="w-[700px] rounded-md" src={hero} alt="/" />
      </div>

      {/* <div>center</div> */}

      <div className="lg:w-[600px] flex flex-col items-center mt-5">
        <h1 className="lg:text-2xl text-xl text-blue-500 flex items-center">
          با <span className="text-orange-600 font-bold">کامیار فود</span>طعمی
          متفاوت را امتحان کنید
        </h1>
        <h1 className="lg:text-2xl text-md text-center mt-8 text-blue-600 font-bold">
          محیطی گرم و آرام را در کنار خانواده تجربه کنید
        </h1>
        <p className="text-center mt-9 lg:text-xl font-bold">
          با استفاده از اپلیکشن رستوران میتوانید سفارش ها را آنلاین انجام دهید
        </p>
        <div>
          <div className="flex justify-center mt-8">
            <button className="bg-red-600 2xl:p-2 p-1 lg:w-[140px] rounded-md text-white hover:bg-orange-600 duration-300">
              سفارش سریع
            </button>
          </div>
          <div className="flex justify-center items-center gap-10 mt-9">
            <img
              className="lg:w-[150px] lg:h-[70px] w-[130px] h-[60px] cursor-pointer"
              src={gooleplay}
              alt=""
            />
            <img
              className="lg:w-[150px] lg:h-[50px] w-[120px] h-[40px] cursor-pointer"
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
