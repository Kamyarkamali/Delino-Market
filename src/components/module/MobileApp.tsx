import logo from "../../assets/mobileapp/mobile.png";
import { mobileApp } from "../../data";

function MobileApp() {
  return (
    <div className="bg-[#DDF0E2] flex items-center xl:justify-evenly justify-center max-w-[1279px] mt-9 m-auto p-5">
      <div>
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-700">
            اپلیکیشن موبایل دلینو
          </h1>
          <p className="text-gray-500 text-center">
            برای دریافت لینک دانلود اپلیکیشن دلینو، شماره موبایلت رو وارد کن
          </p>
        </div>
        <div className="flex flex-col items-center xl:flex-row justify-center mt-4">
          <input
            placeholder="0912XXXXXXX"
            type="text"
            className="border-[1px] placeholder:text-center placeholder:text-xl p-5 md:w-[600px] w-[320px] outline-none rounded-md"
          />
          <button className="bg-[#D62C10] lg:h-[67px] xl:w-[160px] w-[310px] md:mt-3 lg:mt-0 md:p-2 p-2 text-white font-bold rounded-md">
            دریافت لینک دانلود
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 flex-wrap mt-8">
          {mobileApp.map((item) => (
            <img
              className="bg-[#222222] cursor-pointer rounded-md w-[180px]"
              key={item.id}
              src={item.imgae}
              alt="/"
            />
          ))}
        </div>
      </div>

      <div>
        <img src={logo} alt="/" className="w-[400px] xl:block hidden" />
      </div>
    </div>
  );
}

export default MobileApp;
