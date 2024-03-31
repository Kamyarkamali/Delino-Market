import { FC } from "react";
import registers from "../../assets/images/register.jpg";
import { IsetRegister } from "../../types/type";
import { IoMdClose } from "react-icons/io";

// fixed right-[5rem] flex 2xl:right-[27rem] xl:right-[20rem] lg:right-[13rem] md:right-[11rem] 2xl:top-[-3rem] xl:top-[-2rem] lg:top-[-3rem] md:top-[3rem] 2xl:w-[700px] xl:w-[700px] lg:w-[600px] md:w-[400px] 2xl:h-[600px] w-[320px]

const RegisterForm: FC<IsetRegister> = ({ setRegister, setShow, show }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[840px]">
      <div className="z-50 relative rounded-md flex justify-center 2xl:w-[800px] w-[400px] h-[600px]">
        <img
          src={registers}
          alt="register"
          className="2xl:w-[350px] xl:w-[300px] lg:w-[300px] hidden lg:block 2xl:h-[597px] object-cover"
        />
        <div className="absolute top-0 left-0">
          <IoMdClose
            onClick={() => setShow(!show)}
            size={22}
            color="white"
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-center w-full p-3 rounded-md shadow-lg bg-red-600">
          <form className="flex flex-col items-center">
            <h1 className="text-xl text-blue-600 font-bold mt-3">
              فرم ساخت اکانت
            </h1>
            <label className="mt-4 text-blue-600 font-bold" htmlFor="name">
              نام کاربری
            </label>
            <input
              className="mt-4 p-2 shadow-lg shadow-red-900 rounded-md outline-none 2xl:w-[300px] lg:w-[230px] md:w-[300px] md:p-2 "
              type="text"
              name="name"
              placeholder="نام کاربری"
            />
            <label className="mt-4 text-blue-600 font-bold" htmlFor="email">
              نام کاربری
            </label>
            <input
              className="mt-4 shadow-lg shadow-red-900 p-2 rounded-md outline-none 2xl:w-[300px] lg:w-[230px] md:w-[300px] md:p-2 "
              type="email"
              name="email"
              placeholder="ایمیل"
            />
            <label className="mt-4 text-blue-600 font-bold" htmlFor="password">
              رمز عبور
            </label>
            <input
              className="mt-4 p-2 shadow-lg shadow-red-900 rounded-md outline-none 2xl:w-[300px] lg:w-[230px] md:w-[300px] md:p-2 "
              type="password"
              name="password"
              placeholder="رمز عبور"
            />
            <label
              className="mt-4 text-blue-600 font-bold"
              htmlFor="confirmpassword"
            >
              تکرار رمز عبور
            </label>
            <input
              className="mt-4 p-2 shadow-lg shadow-red-900 rounded-md outline-none 2xl:w-[300px] lg:w-[230px] md:w-[300px] md:p-2 "
              type="password"
              name="confirmpassword"
              placeholder="تکرار رمز عبور"
            />
            <div className="flex justify-center mt-9">
              <button
                type="submit"
                className="bg-blue-600 md:mb-9 shadow-lg shadow-red-800 mb-4 p-2 w-[140px] rounded-md text-white"
              >
                ساخت اکانت
              </button>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-white font-bold">اکانت دارم</p>
              <p
                onClick={() => setRegister((register) => !register)}
                className="text-blue-600 cursor-pointer font-bold"
              >
                ورود به اکانت
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
