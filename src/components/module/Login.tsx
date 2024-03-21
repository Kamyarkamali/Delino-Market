import { FC } from "react";
import login from "../../assets/images/login.jpg";
import { IsetRegister } from "../../types/type";

const Login: FC<IsetRegister> = ({ setRegister }) => {
  return (
    <div className="fixed right-[2rem] left-0 top-[3rem] flex 2xl:right-[27rem] xl:right-[20rem] lg:right-[13rem] md:right-[11rem] 2xl:top-[-3rem] xl:top-[-2rem] lg:top-[-3rem] md:top-[3rem] 2xl:w-[700px] xl:w-[700px] lg:w-[600px] md:w-[400px] 2xl:h-[600px] w-[320px] h-[400px]">
      <img
        src={login}
        alt="register"
        className="2xl:w-[350px] rounded-r-md xl:w-[300px] lg:w-[300px] hidden lg:block 2xl:h-[597px] object-cover"
      />
      <div className="flex justify-center w-full lg:rounded-l-md rounded-r-none rounded-md bg-[#F0B501]">
        <form className="flex flex-col justify-center 2xl:h-[500px] items-center">
          <h1 className="text-xl text-blue-600 font-bold mt-3">فرم ورود</h1>
          <label className="mt-4 text-blue-600 font-bold" htmlFor="name">
            نام کاربری
          </label>
          <input
            className="mt-4 p-2 rounded-md outline-none 2xl:w-[300px] lg:w-[230px] md:w-[300px] md:p-2 "
            type="text"
            name="name"
            placeholder="نام کاربری"
          />

          <label className="mt-4 text-blue-600 font-bold" htmlFor="password">
            رمز عبور
          </label>
          <input
            className="mt-4 p-2 rounded-md outline-none 2xl:w-[300px] lg:w-[230px] md:w-[300px] md:p-2 "
            type="password"
            name="password"
            placeholder="رمز عبور"
          />
          <div className="flex justify-center mt-9">
            <button
              type="submit"
              className="bg-blue-600 md:mb-9 mb-4 p-1 w-[140px] rounded-md text-white"
            >
              ورود به اکانت
            </button>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white font-bold">اکانت دارم</p>
            <p
              onClick={() => setRegister((register) => !register)}
              className="text-blue-600 font-bold"
            >
              ساخت اکانت
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
