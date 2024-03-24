import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "../../data";

//components
import HamburgerMenu from "../module/HamburgerMenu";
import MegaMenu from "../module/MegaMenu";
import ReactCardFlip from "react-card-flip";
import Login from "../module/Login";

//icon
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import StoreShoop from "../module/StoreShoop";

///images
import order from "../../assets/images/order.webp";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";
import RegisterForm from "../module/RegisterForm";

function Header() {
  // open and cose hamburger menu
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const [selected, setSelected] = useState<string>("");

  const [megaMenu, setMegaMenu] = useState<boolean>(false);

  const [register, setRegister] = useState<boolean>(false);

  const [store, setStore] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);

  const [local, setLocal] = useState<[]>([]);

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("cartItem") || "[]");
    setLocal(storeData);
  }, []);

  // select one item in data menu
  const handeleClick = () => {
    setSelected("دسته بندی منو");
    setMegaMenu((megaMenu) => !megaMenu);
  };

  const empityFunc = () => {};

  // close hamburger menu
  const closeHandeler = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else if (megaMenu) {
      setMegaMenu(!megaMenu);
    }
  };

  return (
    <div
      onClick={closeHandeler}
      className={`${openMenu || show || store ? "overlay" : null} `}
    >
      <div className="max-w-[1400px] rounded-md shadow-md p-3 mx-auto flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="w-[60px] rounded-full hidden md:block"
            />
          </Link>
          {/* hamburger menu */}
          <div className="md:hidden relative">
            {!openMenu ? (
              <GiHamburgerMenu
                onClick={() => setOpenMenu(true)}
                size={24}
                color="red"
                className="cursor-pointer"
              />
            ) : (
              <MdOutlineClose
                onClick={() => setOpenMenu(false)}
                size={24}
                color="red"
                className="cursor-pointer border-2 rounded-full bg-white absolute z-20 right-[13.4rem]"
              />
            )}
            <div className="absolute right-[-12px]">
              {/* @ts-ignore */}
              <HamburgerMenu openMenu={openMenu} />
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-14">
            {data.map((item) => (
              <div className="flex items-center" key={item.id}>
                {/* @ts-ignore */}
                <Link to={item.path}>
                  <li
                    onClick={
                      item.title === "دسته بندی منو" ? handeleClick : empityFunc
                    }
                    className={`${
                      selected ? "relative" : null
                    } font-bold hover:border-2 p-[6px] hover:text-white duration-300 hover:bg-orange-500 text-center w-[100px] rounded-full  border-white text-gray-700 cursor-pointer text-sm`}
                  >
                    {item.title}
                  </li>
                </Link>
                <li>{item.icons}</li>
              </div>
            ))}
          </ul>
        </div>

        <div className={`${!openMenu ? "block" : "hidden"} flex gap-6`}>
          <img
            onClick={() => setShow((prev) => !prev)}
            src={user}
            alt="user"
            className="2xl:w-[30px] w-[23px] cursor-pointer"
          />
          <div className="relative">
            <img
              onClick={() => setStore(true)}
              src={order}
              alt="order"
              className="lg:w-[40px] w-[29px] relative cursor-pointer"
            />
            <div className="absolute left-0 h-[27px] w-[25px] top-[-1rem] border-2 rounded-full p-[3px] bg-red-500">
              <p className="text-center text-sm font-bold text-white">
                {local.length}
              </p>
            </div>
            {store && (
              <div className="absolute left-[-1rem]">
                <StoreShoop store={store} setStore={setStore} />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mega menu */}
      {megaMenu && (
        <div className="absolute hidden md:block right-0 left-0 2xl:right-[5rem] z-[10000] xl:right-[1rem]">
          <MegaMenu megaMenu={megaMenu} />
        </div>
      )}
      {/* register form flip back card*/}
      {show && (
        <div>
          <ReactCardFlip flipDirection="horizontal" isFlipped={register}>
            <div>
              <RegisterForm setRegister={setRegister} register={register} />
            </div>
            <div>
              <Login setRegister={setRegister} register={register} />
            </div>
          </ReactCardFlip>
        </div>
      )}
    </div>
  );
}

export default Header;
