import { useState } from "react";
import image1 from "../../assets/faiveritse/kabab2.jpg";
import tamLogo from "../../assets/logo/tam.webp";
import toskaLogo from "../../assets/logo/toskalogo.webp";
import shanipage from "../../assets/homepage/shanipage.jpg";
import logo from "../../assets/logo/ziyafat.png";
import tamlogo from "../../assets/homepage/tamlogo.jpg";
import shani from "../../assets/logo/shanilogo.png";
import toskalogo from "../../assets/homepage/toka.jpg";
import { IoIosStar } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import MenuZiyafat from "../module/MenuZiyafat";
import CommentUsers from "../module/CommentUsers";
import { Link, useParams } from "react-router-dom";

function Ziyafat() {
  const [ziyafat, setZiyafat] = useState<boolean>(true);

  const [comments, setComments] = useState<boolean>(false);

  const { id } = useParams();

  const ziyafatHandeler = () => {
    setComments(false);
    setZiyafat(true);
  };

  const commentsHandeler = () => {
    setComments(true);
    setZiyafat(false);
  };

  return (
    <div className="max-w-[1500px] m-auto">
      <div className="mt-[4.5rem] relative">
        <img
          src={
            id === "رستوران ضیافت نو"
              ? image1
              : id === "تهیه غذای محلی توسکا"
              ? toskalogo
              : id === "فست فود تام"
              ? tamlogo
              : id === "رستوران شانی"
              ? shanipage
              : ""
          }
          alt="/"
          className="w-full lg:h-[500px] rounded-md"
        />
        <div className="absolute bg-black/30 top-0 w-full lg:h-[500px] md:h-[474px] h-[190px]"></div>
        <p className="absolute discount left-5 bottom-0 text-white bg-red-600 p-1">
          تا 10 % تخفیف
        </p>
        <img
          src={
            id === "رستوران ضیافت نو"
              ? logo
              : id === "تهیه غذای محلی توسکا"
              ? toskaLogo
              : id === "فست فود تام"
              ? tamLogo
              : id === "رستوران شانی"
              ? shani
              : ""
          }
          alt="/"
          className="lg:w-[130px] w-[100px] absolute bottom-6 left-0 xl:right-[8rem] lg:right-[5rem] md:right-[3rem] right-[1.5rem] rounded-lg "
        />
      </div>
      {/* bottom menu */}
      <div className="flex mt-7">
        <div className="flex flex-col items-center w-full gap-2">
          <h1 className="lg:text-3xl text-xl text-gray-700 font-bold">
            {id === "رستوران ضیافت نو"
              ? "رستوران ضیافت نو"
              : id === "تهیه غذای محلی توسکا"
              ? "رستوران توکا"
              : id === "فست فود تام"
              ? "فست فود تام"
              : null}
          </h1>
          <div className="flex gap-1 items-center">
            <IoIosStar size={18} color="yellow" />
            <IoIosStar size={18} color="yellow" />
            <IoIosStar size={18} color="yellow" />
            <IoIosStar size={18} color="yellow" />
            <span className="bg-[#21C64F] w-[30px] p-[2px] text-center rounded-sm text-white font-bold">
              4
            </span>
            <span className="border-[1px] text-gray-500 text-[13px] p-1 border-orange-700 rounded-md">
              مشاهده 38 نظر
            </span>
          </div>
          <div className="flex items-center">
            <SlLocationPin size={19} color="gray" />
            <span className="text-gray-600s">تهران</span>
          </div>
        </div>
        {/* <div>center</div> */}
        {/* <div>left</div> */}
      </div>

      {/* menu */}
      <div className="flex gap-5 justify-start border-t-[1px] p-2 border-gray-400">
        <div>
          <span
            onClick={ziyafatHandeler}
            className={`${
              ziyafat
                ? "border-b-[2px] border-red-600 cursor-pointer"
                : "cursor-pointer"
            }`}
          >
            منوی رستوران
          </span>
          {/* {ziyafat && <MenuZiyafat />} */}
        </div>

        <div>
          <div>
            <span
              onClick={commentsHandeler}
              className={`${
                comments
                  ? "border-b-[2px] border-red-600 cursor-pointer"
                  : "cursor-pointer"
              }`}
            >
              نظرات کاربران
            </span>
          </div>
        </div>
        <Link to={"/"}>صفحه اصلی</Link>
      </div>
      {comments ? <CommentUsers /> : null}
      {ziyafat && <MenuZiyafat />}
    </div>
  );
}

export default Ziyafat;
