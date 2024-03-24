// enum
import { CATEGORY } from "./types/enums";

import { Ifoods, Imenu, dataFoods } from "./types/type";

//icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { FaShoppingCart } from "react-icons/fa";

import image1 from "../src/assets/hamburger/hamburger1.jpg";
import image2 from "../src/assets/hamburger/hamburger2.jpg";
import image3 from "../src/assets/hamburger/hamburger3.jpg";
import image4 from "../src/assets/pizza/pizza1.jpg";
import image5 from "../src/assets/pizza/pizza2.jpg";
import image6 from "../src/assets/pizza/pizza3.jpg";
import image7 from "../src/assets/pizza/pizza4.jpg";
import image8 from "../src/assets/pizza/pizza5.jpg";
import image9 from "../src/assets/hamburger/hamburger4.jpg";
import image10 from "../src/assets/hamburger/hamburger5.jpg";
import image11 from "../src/assets/hamburger/hamburger6.jpg";
import image12 from "../src/assets/pizza/pizza6.jpg";
import image13 from "../src/assets/pizza/pizza7.jpg";
import image14 from "../src/assets/pizza/pizza8.jpg";

const data: Imenu[] = [
  { id: 1, title: "صفحه اصلی", path: "/" },
  {
    id: 2,
    title: "دسته بندی منو",
    icons: <MdOutlineKeyboardArrowDown size={23} />,
  },
  { id: 3, title: "سرویس ها" },
  { id: 4, title: "تماس با ما" },
  { id: 5, title: "درباره ما" },
];

const foodsData: dataFoods[] = [
  { id: 1, title: "همبرگر قارچ و پنیر", image: image1 },
  { id: 2, title: "همبرگر معمولی", image: image2 },
  { id: 3, title: "دوبل برگر سفارشی", image: image3 },
  { id: 4, title: "پیتزا پپرونی", image: image4 },
  { id: 5, title: "پیتزا پپرونی ویژه", image: image5 },
  { id: 6, title: "پیتزا سبزیجات", image: image6 },
  { id: 7, title: "پیتزا مخصوص", image: image7 },
  { id: 8, title: "پیتزا مخصوص", image: image8 },
];

const foodsMenu: Ifoods[] = [
  {
    id: 1,
    title: "همبرگر قارچ و پنیر",
    image: image1,
    icon: <FaShoppingCart size={22} color="green" />,
    price: 3000000,
    category: CATEGORY.Hamburger,
  },
  {
    id: 2,
    title: "همبرگر معمولی",
    image: image2,
    icon: <FaShoppingCart size={22} color="green" />,
    price: 3200000,
    category: CATEGORY.Hamburger,
  },
  {
    id: 3,
    title: "دوبل برگر سفارشی",
    image: image3,
    icon: <FaShoppingCart size={22} color="green" />,
    price: 340000,
    category: CATEGORY.Hamburger,
  },
  {
    id: 4,
    title: "همبرگرذغالی",
    image: image9,
    icon: <FaShoppingCart size={22} color="green" />,
    price: 440000,
    category: CATEGORY.Hamburger,
  },
  {
    id: 5,
    title: "چیزبرگر",
    image: image10,
    icon: <FaShoppingCart size={22} color="green" />,
    price: 4000000,
    category: CATEGORY.Hamburger,
  },
  {
    id: 6,
    title: "دوبل برگر",
    image: image11,
    icon: <FaShoppingCart size={22} color="green" />,
    price: 4000000,
    category: CATEGORY.Hamburger,
  },
  {
    id: 7,
    title: "بیف برگر",
    image: image11,
    icon: <FaShoppingCart size={22} color="green" />,
    price: 5000000,
    category: CATEGORY.Hamburger,
  },
  {
    id: 8,
    title: "پیتزا مخلوط",
    image: image12,
    icon: <FaShoppingCart size={22} color="green" />,
    price: 6000000,
    category: CATEGORY.Pizza,
  },
  {
    id: 9,
    title: "پیتزا مخصوص",
    image: image13,
    icon: <FaShoppingCart size={22} color="green" />,
    price: 6600000,
    category: CATEGORY.Pizza,
  },
  {
    id: 10,
    title: "پیتزا دونفره",
    image: image14,
    icon: <FaShoppingCart size={22} color="green" />,
    price: 7000000,
    category: CATEGORY.Pizza,
  },
];

export { data, foodsData, foodsMenu };
