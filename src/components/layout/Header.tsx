import { useState } from "react";
import { data } from "../../data";

//components
import HamburgerMenu from "../module/HamburgerMenu";
import MegaMenu from "../module/MegaMenu";

//icon
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

///images
import order from "../../assets/images/order.webp";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";

function Header() {
  // open and cose hamburger menu
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const [selected, setSelected] = useState<string>("");

  const [megaMenu, setMegaMenu] = useState<boolean>(false);

  // select one item in data menu
  const handeleClick = () => {
    setSelected("دسته بندی منو");
    setMegaMenu((megaMenu) => !megaMenu);
  };

  const empityFunc = () => {};

  return (
    <div className={`${openMenu ? "overlay" : null} `}>
      <div className="max-w-[1400px] rounded-md shadow-md p-3 mx-auto flex items-center justify-between">
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-[60px] rounded-full hidden md:block"
          />
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
                <li>{item.icons}</li>
              </div>
            ))}
          </ul>
        </div>

        <div className={`${!openMenu ? "block" : "hidden"} flex gap-6`}>
          <img src={user} alt="order" className="w-[30px] cursor-pointer" />
          <div className="relative">
            <img
              src={order}
              alt="order"
              className="lg:w-[40px] w-[30px] relative cursor-pointer"
            />
            <div className="absolute left-0 h-[27px] w-[25px] top-[-1rem] border-2 rounded-full p-[3px] bg-red-500">
              <p className="text-center text-sm font-bold text-white">0</p>
            </div>
          </div>
        </div>
      </div>
      {/* mega menu */}
      {megaMenu && (
        <div className="absolute hidden md:block right-0 left-0 2xl:right-[5rem] xl:right-[1rem]">
          <MegaMenu />
        </div>
      )}
    </div>
  );
}

export default Header;
