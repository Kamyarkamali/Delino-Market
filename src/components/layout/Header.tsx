import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

//components
import ReactCardFlip from "react-card-flip";
import Login from "../module/Login";

//icon
import { LuShoppingCart } from "react-icons/lu";
import StoreShoop from "../module/StoreShoop";

///images
import logo from "../../assets/images/logo.png";
import RegisterForm from "../module/RegisterForm";
import SearchBar from "../module/SearchBar";

function Header() {
  // open and cose hamburger menu
  // @ts-ignore
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  // const [selected, setSelected] = useState<string>("");

  // const [megaMenu, setMegaMenu] = useState<boolean>(false);

  const [register, setRegister] = useState<boolean>(false);

  const [store, setStore] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);

  // @ts-ignore
  const [local, setLocal] = useState<[]>([]);

  const [search, setSearch] = useState<string>("");

  const [filtered, seFiltered] = useState<[]>([]);

  const location = useLocation();

  const pathName = location.pathname === "/:id";

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("cartItem") || "[]");
    setLocal(storeData);
  }, []);

  // select one item in data menu
  // const handeleClick = () => {
  //   setSelected("دسته بندی منو");
  //   setMegaMenu((megaMenu) => !megaMenu);
  // };

  // const empityFunc = () => {};

  return (
    <div className={`${show ? "overlay" : null} `}>
      <div className="max-w-[1530px] z-30 bg-white fixed top-[-1px] p-[10px] right-0 left-0 mx-auto flex items-center justify-between border-b-[1px]">
        <div className="flex gap-3">
          <button
            onClick={() => setShow((prev) => !prev)}
            className="border-[1px] border-red-400 w-[60px] p-2 rounded-md"
          >
            ورود
          </button>
          <button
            onClick={() => setShow((prev) => !prev)}
            className="p-2 rounded-md"
          >
            ثبت نام
          </button>
        </div>

        <div>
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="w-[100px] rounded-full hidden md:block"
            />
          </Link>
        </div>

        <div className={`${!openMenu ? "block" : "hidden"} flex gap-6`}>
          <div className="bg-[#EF4123] lg:w-[70px] w-[60px] flex justify-center lg:p-2 p-1 cursor-pointer rounded-md">
            <LuShoppingCart
              onClick={() => setStore(true)}
              size={28}
              color="white"
            />
            {store && (
              <div className="absolute z-20 left-[-1rem]">
                <StoreShoop store={store} setStore={setStore} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* register form flip back card*/}
      {show && (
        <div className="flex justify-center">
          <ReactCardFlip flipDirection="horizontal" isFlipped={register}>
            <div>
              <RegisterForm
                show={show}
                setShow={setShow}
                setRegister={setRegister}
                register={register}
              />
            </div>
            <div>
              <Login
                setRegister={setRegister}
                register={register}
                show={show}
                setShow={setShow}
              />
            </div>
          </ReactCardFlip>
        </div>
      )}

      {/* searchbar */}
      {!pathName && (
        <div
          className={`max-w-[1400px] m-auto mb-14 ${show ? "hidden" : "block"}`}
        >
          <SearchBar
            search={search}
            setSearch={setSearch}
            filtered={filtered}
            seFiltered={seFiltered}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
