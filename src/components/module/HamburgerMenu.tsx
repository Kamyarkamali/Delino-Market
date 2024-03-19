import { motion } from "framer-motion";
import { FC } from "react";
import { IopenMenu } from "../../types/type";
import { data } from "../../data";

import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

// images
import logo from "../../assets/images/logo.png";
import logoHamburger from "../../assets/images/logohamburger.jpg";

const HamburgerMenu: FC<IopenMenu> = ({ openMenu }) => {
  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={openMenu ? "open" : "closed"}
      className="bg-white h-screen w-[250px] p-3 rounded-md"
    >
      <div className="flex flex-col items-center border-b-[2px] border-orange-700">
        <h1 className="font-bold text-blue-600">رستوران فست فود کامیار</h1>
        <img src={logo} alt="/" className="w-[50px]" />
      </div>
      <div>
        <ul className="flex flex-col gap-6 font-bold">
          {data.map((item) => (
            <li
              className="border-b-2 p-2 border-gray-200 hover:mr-3 text-gray-600 hover:scale-105 duration-300 cursor-pointer"
              key={item.id}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-3 mt-4">
        <MdOutlineEmail size={20} />
        <a
          className="text-sm font-bold hover:text-gray-600 duration-300"
          href="mailto:kamyarkamali021@gmail.com"
        >
          kamyarkamali021@gmail.com
        </a>
      </div>
      <div className="flex justify-center mt-9 gap-7">
        <FiGithub size={22} className="cursor-pointer" />
        <FaLinkedinIn size={22} className="cursor-pointer" />
        <FaInstagram size={22} className="cursor-pointer" />
      </div>
      <div className="border-b-2 border-gray-700 mt-5 p-2">
        <p className="font-bold">آدرس:</p>
        <p className="font-bold">تهران,خیابان ولیعصر</p>
      </div>
      <div className="flex justify-center">
        <img src={logoHamburger} alt="/" className="w-full h-[160px]" />
      </div>
    </motion.div>
  );
};

export default HamburgerMenu;
