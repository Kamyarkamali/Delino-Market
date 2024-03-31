import { redsurant } from "../../data";
import logo1 from "../../assets/logo/1.png";
import logo2 from "../../assets/logo/2.png";
import logo3 from "../../assets/logo/3.png";

function Resturan() {
  return (
    <>
      <div className="max-w-[1300px] m-auto mt-7">
        <h1 className="text-3xl font-bold text-gray-700">
          رستوران های پرطرفدار
        </h1>
        <p className="text-gray-500 font-bold mt-3">
          گزیده‌ای از بهترین و پرطرفدارترین رستوران‌ها در دلینو
        </p>
      </div>
      <div className="max-w-[1300px] grid 2xl:grid-cols-8 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-4 mt-9 flex-wrap justify-center m-auto">
        {redsurant.map((item) => (
          <img
            className="w-[100px] rounded-md hover:scale-125 duration-300 cursor-pointer"
            src={item.imgae}
            alt="/"
          />
        ))}
      </div>
      <div className="max-w-[1300px] mt-[6rem] m-auto flex flex-col items-center">
        <h1 className="lg:text-3xl text-center text-xl text-gray-600 font-bold">
          سفارش آنلاین غذا از بهترین رستوران‌‌ها و فست‌فود‌‌ها
        </h1>
        <span className="lg:w-[900px] leading-[30px] text-center text-sm mt-9 text-gray-800">
          با استفاده از وبسایت و اپلیکیشن سفارش آنلاین غذای دلینو شما میتونید به
          راحتی و در سریع ترین زمان ممکن غذای مورد علاقه‌ی خودتون رو از بهترین
          رستوران‌ها و فست فود‌های تهران، قم، کرج، گرگان، یزد، ارومیه و سایر
          شهرهای ایران سفارش بدین.
        </span>
      </div>
      <div className="max-w-[1500px] m-auto border-t-[1px] mt-3  border-gray-300">
        <div className="flex items-center justify-center mt-7">
          <img className="w-[100px]" src={logo1} alt="/" />
          <img className="w-[100px]" src={logo2} alt="/" />
          <img className="w-[100px]" src={logo3} alt="/" />
        </div>
        <div className="flex justify-center mt-5 text-center">
          <span className="text-[14px] text-gray-500">
            تمامی کالاها و خدمات این سایت، دارای مجوزهای لازم از مراجع مربوطه
            می‌باشند و فعالیت‌های این سایت تابع قوانین و مقررات جمهوری اسلامی
            ایران است.
          </span>
        </div>
      </div>
    </>
  );
}

export default Resturan;
