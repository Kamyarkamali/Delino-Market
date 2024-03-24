import delevry from "../../assets/homepage/delevry.jpg";
import snapp from "../../assets/homepage/snapp.webp";
import delevry2 from "../../assets/homepage/delevery2.jpg";
import preorder from "../../assets/homepage/preorder.webp";

function Delevry() {
  return (
    <div className="hidden md:block">
      {/* <h1 className="mt-8 text-xl text-orange-600 font-bold">
        تحویل در سریعترین زمان ممکن
      </h1> */}
      <div className="max-w-[1400px] lg:flex 2xl:justify-between lg:justify-center mx-auto mt-6 p-3 ">
        <div className="flex justify-center w-[840px] gap-4">
          {/* <div className="border-2 rounded-md w-[300px]">right</div> */}
          <div className="border-2 shadow-lg shadow-gray-600  p-3 duration-300 rounded-md w-[300px] bg-yellow-400">
            <h1 className="text-center mt-5 font-bold text-gray-600">
              ارسال با پیک رستوران در محدوده و خارج از محدوده
            </h1>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <img
                src={preorder}
                alt="snappfod"
                className="w-[70px] h-[70px] mb-14 rounded-full"
              />
            </div>
            <p className="text-center text-sm font-bold">
              میتوانید تا ساعت 8 پیش سفارش ثبن کرده و در تایم مور نظر غذا برای
              شما ارسال شود
            </p>
          </div>

          {/* <div className="border-2 shadow-lg shadow-gray-600 p-3 duration-300 rounded-md w-[300px] bg-green-500">
            <h1 className="text-center mt-5 font-bold text-gray-200">
              ارسال با پیک رستوران در محدوده و خارج از محدوده
            </h1>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <img
                src={delevry2}
                alt="snappfod"
                className="w-[70px] h-[70px] mb-14 rounded-full"
              />
            </div>
            <p className="text-sm text-center font-bold text-gray-200">
              پیک ما در ساعات کاری رستوران در خدمت مشتریان گرامی است
            </p>
          </div> */}

          <div className="border-2 shadow-lg shadow-gray-600 p-3 duration-300 rounded-md w-[300px] bg-green-500">
            <h1 className="text-center mt-5 font-bold text-gray-200">
              ارسال با پیک رستوران در محدوده و خارج از محدوده
            </h1>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <img
                src={delevry2}
                alt="snappfod"
                className="w-[70px] h-[70px] mb-14 rounded-full"
              />
            </div>
            <p className="text-sm text-center font-bold text-gray-200">
              پیک ما در ساعات کاری رستوران در خدمت مشتریان گرامی است
            </p>
          </div>

          <div className="border-2 shadow-lg shadow-gray-600 p-3 duration-300 rounded-md w-[300px] bg-pink-500">
            <h1 className="text-center mt-5 font-bold text-gray-800">
              ارسال با اسنپ فود
            </h1>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <img src={snapp} alt="snappfod" className="w-[90px]" />
            </div>
            <p className="text-sm text-center font-bold text-gray-800">
              میتوانید از ظریق اپلیکشن اسنپ در هر تایمی غذای مورد نظر خود را
              سفارش دهید
            </p>
          </div>
        </div>

        <div>
          <img
            src={delevry}
            className="w-[500px] hidden 2xl:block image hero"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Delevry;
