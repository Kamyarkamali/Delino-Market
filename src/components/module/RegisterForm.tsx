import register from "../../assets/images/register.jpg";

function RegisterForm() {
  return (
    <div className="fixed rounded-md flex left-0 2xl:right-[26rem] 2xl:top-[5rem] border-2 2xl:w-[700px] 2xl:h-[600px]">
      <img
        src={register}
        alt="register"
        className="2xl:w-[350px] 2xl:h-[597px] object-cover"
      />
      <div className="flex justify-center w-full bg-red-600">
        <form className="flex flex-col items-center">
          <h1 className="text-xl text-blue-600 font-bold mt-3">فرم ورود</h1>
          <label className="mt-4 text-blue-600 font-bold" htmlFor="name">
            نام کاربری
          </label>
          <input
            className="mt-4 p-2 rounded-md outline-none w-[300px]"
            type="text"
            name="name"
            placeholder="نام کاربری"
          />
          <label className="mt-4 text-blue-600 font-bold" htmlFor="email">
            نام کاربری
          </label>
          <input
            className="mt-4 p-2 rounded-md outline-none w-[300px]"
            type="email"
            name="email"
            placeholder="ایمیل"
          />
          <label className="mt-4 text-blue-600 font-bold" htmlFor="password">
            رمز عبور
          </label>
          <input
            className="mt-4 p-2 rounded-md outline-none w-[300px]"
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
            className="mt-4 p-2 rounded-md outline-none w-[300px]"
            type="password"
            name="confirmpassword"
            placeholder="تکرار رمز عبور"
          />
          <div className="flex justify-center mt-9">
            <button
              type="submit"
              className="bg-blue-600 p-1 w-[140px] rounded-md text-white"
            >
              ساخت اکانت
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
