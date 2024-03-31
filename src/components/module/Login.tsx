import { FC } from "react";
import login from "../../assets/images/login.jpg";
import { IsetRegister } from "../../types/type";
import { IoMdClose } from "react-icons/io";

const Login: FC<IsetRegister> = ({ setRegister, setShow, show }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[840px]">
      <div className="flex relative justify-center lg:w-[800px] w-[400px] md:h-[600px] h-[400px]">
        <img
          src={login}
          alt="register"
          className="2xl:w-[350px] rounded-r-md xl:w-[300px] lg:w-[300px] hidden lg:block 2xl:h-[597px] object-cover"
        />
        <div className="absolute top-0 left-0">
          <IoMdClose
            onClick={() => setShow(!show)}
            size={22}
            color="white"
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-center w-full lg:rounded-l-md rounded-r-none rounded-md bg-[#F0B501]">
          <form className="flex flex-col justify-center 2xl:h-[500px] items-center">
            <h1 className="text-xl text-blue-600 font-bold mt-3">فرم ورود</h1>
            <label className="mt-4 text-blue-600 font-bold" htmlFor="name">
              نام کاربری
            </label>
            <input
              className="mt-4 shadow-lg shadow-yellow-600 p-2 rounded-md outline-none 2xl:w-[300px] lg:w-[230px] md:w-[300px] md:p-2 "
              type="text"
              name="name"
              placeholder="نام کاربری"
            />

            <label className="mt-4 text-blue-600 font-bold" htmlFor="password">
              رمز عبور
            </label>
            <input
              className="mt-4 p-2 shadow-lg shadow-yellow-600 rounded-md outline-none 2xl:w-[300px] lg:w-[230px] md:w-[300px] md:p-2 "
              type="password"
              name="password"
              placeholder="رمز عبور"
            />
            <div className="flex justify-center mt-9">
              <button
                type="submit"
                className="bg-blue-600 shadow-lg shadow-yellow-600 md:mb-9 mb-4 p-1 w-[140px] rounded-md text-white"
              >
                ورود به اکانت
              </button>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-white font-bold">اکانت دارم</p>
              <p
                onClick={() => setRegister((register) => !register)}
                className="text-blue-600 cursor-pointer font-bold"
              >
                ساخت اکانت
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
