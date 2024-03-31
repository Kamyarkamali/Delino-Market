// enum
import { CATEGORY } from "./types/enums";

import {
  IApp,
  Icomment,
  Idiscount,
  Ifaiverits,
  Ifoods,
  Imenu,
  ImenuZiyafat,
  dataFoods,
} from "./types/type";

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

import iranian from "../src/assets/faiveritse/iranian.jpg";
import hamburger from "../src/assets/faiveritse/hamburger.jpg";
import kabab from "../src/assets/faiveritse/kabab.jpg";
import pasta from "../src/assets/faiveritse/pasta.jpg";
import pizza from "../src/assets/faiveritse/pizza.jpg";
import salad from "../src/assets/faiveritse/salad.jpg";
import sobhane from "../src/assets/faiveritse/sobhane.jpg";
import sokhari from "../src/assets/faiveritse/sokhari.jpg";
import sup from "../src/assets/faiveritse/sop.jpg";
import stayke from "../src/assets/faiveritse/stayke.jpg";

import shani from "../src/assets/discount/shani.jpg";
import tam from "../src/assets/discount/tam.webp";
import toska from "../src/assets/discount/toska.jpg";
import ziyafat from "../src/assets/discount/ziyafat.webp";

import logo1 from "../src/assets/mobileapp/1.png";
import logo2 from "../src/assets/mobileapp/2.png";
import logo3 from "../src/assets/mobileapp/3.png";
import logo4 from "../src/assets/mobileapp/4.png";
import logo5 from "../src/assets/mobileapp/5.png";
import logo6 from "../src/assets/mobileapp/5.png";

import restoran1 from "../src/assets/resturan/1.png";
import restoran2 from "../src/assets/resturan/2.jpg";
import restoran3 from "../src/assets/resturan/3.jpg";
import restoran4 from "../src/assets/resturan/4.png";
import restoran5 from "../src/assets/resturan/5.jpg";
import restoran6 from "../src/assets/resturan/6.png";
import restoran7 from "../src/assets/resturan/7.png";
import restoran8 from "../src/assets/resturan/8.png";
import restoran9 from "../src/assets/resturan/9.png";
import restoran10 from "../src/assets/resturan/10.png";
import restoran11 from "../src/assets/resturan/11.png";
import restoran12 from "../src/assets/resturan/12.jpg";
import restoran13 from "../src/assets/resturan/13.png";
import restoran14 from "../src/assets/resturan/14.jpg";
import restoran15 from "../src/assets/resturan/15.png";
import restoran16 from "../src/assets/resturan/16.png";
import restoran17 from "../src/assets/resturan/17.png";
import restoran18 from "../src/assets/resturan/18.png";
import restoran19 from "../src/assets/resturan/19.png";
import restoran20 from "../src/assets/resturan/20.jpg";
import restoran21 from "../src/assets/resturan/21.png";
import restoran22 from "../src/assets/resturan/22.png";
import restoran23 from "../src/assets/resturan/23.png";

import ziyafat1 from "../src/assets/menuziyafat/1.jpg";
import ziyafat2 from "../src/assets/menuziyafat/2.jpg";
import ziyafat3 from "../src/assets/menuziyafat/3.jpg";
import ziyafat4 from "../src/assets/menuziyafat/4.jpg";
import ziyafat5 from "../src/assets/menuziyafat/5.jpg";
import ziyafat6 from "../src/assets/menuziyafat/6.jpg";
import ziyafat7 from "../src/assets/menuziyafat/7.jpg";
import ziyafat9 from "../src/assets/menuziyafat/9.jpg";
import ziyafat10 from "../src/assets/menuziyafat/10.jpg";
import ziyafat11 from "../src/assets/menuziyafat/11.jpg";

import toska1 from "../src/assets/tooska/1.jpg";
import toska2 from "../src/assets/tooska/2.jpg";
import toska3 from "../src/assets/tooska/3.jpg";
import toska4 from "../src/assets/tooska/4.jpg";
import toska5 from "../src/assets/tooska/5.jpg";

import tam1 from "../src/assets/tam/1.jpg";
import tam2 from "../src/assets/tam/2.jpg";
import tam3 from "../src/assets/tam/3.jpg";
import tam4 from "../src/assets/tam/4.jpg";
import tam5 from "../src/assets/tam/5.jpg";

import shani1 from "../src/assets/shani/1.jpg";
import shani2 from "../src/assets/shani/2.jpg";
import shani3 from "../src/assets/shani/3.jpg";
import shani4 from "../src/assets/shani/4.jpg";
import shani5 from "../src/assets/shani/5.jpg";
import shani6 from "../src/assets/shani/6.jpg";
import shani7 from "../src/assets/shani/7.jpg";

import user from "../src/assets/icon/userIcon.jpg";

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

const dataFaiveritFood: Ifaiverits[] = [
  { id: 1, name: "غذای ایرانی", image: iranian },
  { id: 2, name: "ساندویچ", image: hamburger },
  { id: 3, name: "پیتزا", image: pizza },
  { id: 4, name: "کباب", image: kabab },
  { id: 5, name: "پاستا", image: pasta },
  { id: 6, name: "سالاد", image: salad },
  { id: 7, name: "صبحانه", image: sobhane },
  { id: 8, name: "سوخاری", image: sokhari },
  { id: 9, name: "سوپ", image: sup },
  { id: 10, name: "استیک", image: stayke },
];

const discount: Idiscount[] = [
  {
    id: 1,
    name: "رستوران ضیافت نو",
    image: ziyafat,
    discount: 5,
    path: "/ziyafat",
  },
  {
    id: 2,
    name: "تهیه غذای محلی توسکا",
    image: toska,
    discount: 15,
    path: "/toska",
  },
  { id: 3, name: "فست فود تام", image: tam, discount: 10, path: "/tam" },
  { id: 4, name: "رستوران شانی", image: shani, discount: 13, path: "/shati" },
];

const mobileApp: IApp[] = [
  { id: 1, imgae: logo1 },
  { id: 2, imgae: logo2 },
  { id: 3, imgae: logo3 },
  { id: 4, imgae: logo4 },
  { id: 5, imgae: logo5 },
  { id: 6, imgae: logo6 },
];

const redsurant: IApp[] = [
  { id: 1, imgae: restoran1 },
  { id: 2, imgae: restoran2 },
  { id: 3, imgae: restoran3 },
  { id: 4, imgae: restoran4 },
  { id: 5, imgae: restoran5 },
  { id: 6, imgae: restoran6 },
  { id: 7, imgae: restoran7 },
  { id: 8, imgae: restoran8 },
  { id: 9, imgae: restoran9 },
  { id: 10, imgae: restoran10 },
  { id: 11, imgae: restoran11 },
  { id: 12, imgae: restoran12 },
  { id: 13, imgae: restoran13 },
  { id: 14, imgae: restoran14 },
  { id: 15, imgae: restoran15 },
  { id: 16, imgae: restoran16 },
  { id: 17, imgae: restoran17 },
  { id: 18, imgae: restoran18 },
  { id: 19, imgae: restoran19 },
  { id: 20, imgae: restoran20 },
  { id: 21, imgae: restoran21 },
  { id: 22, imgae: restoran22 },
  { id: 23, imgae: restoran23 },
];

const menuZiyafat: ImenuZiyafat[] = [
  {
    id: 1,
    image: ziyafat1,
    title:
      "یک سیخ کباب معمولی ۱۴۰گرمی سینه مرغ زعفرانی، ۳۶۰ گرم برنج پخته شده ایرانی، سماق، لیمو، کره، گوجه کبابی با بسته بندی کاملا بهداشتی پک رایگان",
    name: "جلوکباب حلزونی",
    discount: 15,
    price: 178000,
  },
  {
    id: 3,
    image: ziyafat3,
    title:
      "یک سیخ کباب معمولی ۱۴۰گرمی سینه مرغ زعفرانی، ۳۶۰ گرم برنج پخته شده ایرانی، سماق، لیمو، کره، گوجه کبابی با بسته بندی کاملا بهداشتی پک رایگان",
    name: "چلوجوجه معمولی",
    discount: 4,
    price: 151000,
  },
  {
    id: 4,
    image: ziyafat2,
    title:
      "یک سیخ کباب کوبیده ۱۳۰ گرمی مخلوط گوشت گوساله و گوسفندی، ۳۶۰ گرم برنج پخته شده ایرانی، سماق، لیمو، کره، گوجه کبابی با بسته بندی کاملا بهداشتی پک رایگان",
    name: "چلوکباب کوبیده معمولی",
    discount: 6,
    price: 151000,
  },
  {
    id: 5,
    image: ziyafat4,
    title:
      "یک سیخ کباب نگین دار ۱۲۰ گرمی، ۵۰ گرم جوجه نگینی، ۳۶۰ گرم برنج پخته شده ایرانی، سماق، لیمو، کره، گوجه کبابی با بسته بندی کاملا بهداشتی پک رایگان",
    name: "چلو کباب کوبیده نگین دار",
    discount: 5,
    price: 176000,
  },
  {
    id: 6,
    image: ziyafat5,
    title:
      "یک سیخ کباب لقمه ۱۷۰ گرمی مخلوط گوشت گوساله و گوسفندی، ۳۶۰ گرم برنج پخته شده ایرانی، سماق، لیمو، کره، گوجه کبابی با بسته بندی کاملا بهداشتی پک رایگان",
    name: "چلوکباب لقمه",
    discount: 20,
    price: 149000,
  },
  {
    id: 7,
    image: ziyafat6,
    title:
      "یک سیخ جوجه کباب ۲۳۰ گرمی سینه مرغ زعفرانی، ۳۶۰ گرم برنج پخته شده ایرانی، سماق، لیمو، کره، گوجه کبابی با بسته بندی کاملا بهداشتی پک رایگان",
    name: "چلوجوجه ممتاز",
    discount: 20,
    price: 156000,
  },
  {
    id: 8,
    image: ziyafat7,
    title:
      "یک سیخ کباب کوبیده ۱۲۰ گرمی گوشت گوساله، یک سیخ جوجه کباب ۱۴۰ گرمی سینه مرغ زعفرانی، ۳۶۰ گرم برنج پخته شده ایرانی، سماق، لیمو، کره، گوجه کبابی با بسته بندی کاملا بهداشتی پک",
    name: "چلوکباب وزیری",
    discount: 15,
    price: 235000,
  },
  {
    id: 9,
    image: ziyafat9,
    title:
      "۲ سیخ کباب کوبیده ۱۲۰ گرمی باگوشت گوسفند و گوساله، ۳۶۰ گرم برنج پخته شده ایرانی، سماق، لیمو، کره، گوجه کبابی با بسته بندی کاملا بهداشتی پک رایگان",
    name: "چلوکباب کوبیده مخصوص",
    discount: 15,
    price: 270000,
  },
  {
    id: 10,
    image: ziyafat10,
    title:
      "یک سیخ دورو یک رو جوجه با کمی سبزیجات و یک روی دیگر کوبیده، ۳۶۰ گرم برنج پخته شده ایرانی، سماق، لیمو، کره، گوجه کبابی با بسته بندی کاملا بهداشتی رایگان پک",
    name: "چلوکباب میکس",
    discount: 20,
    price: 235000,
  },
  {
    id: 11,
    image: ziyafat11,
    title:
      "یک سیخ کباب بختیاری ۱۹۰ گرمی، گوشت فیله گوساله، سینه مرغ زعفرانی، ۳۶۰ گرم برنج پخته شده ایرانی، سماق، لیمو، کره، گوجه کبابی، با بسته بندی کاملا بهخداشتی پک",
    name: "چلوکباب بختیاری",
    discount: 15,
    price: 243000,
  },
];

const menuTooska: ImenuZiyafat[] = [
  {
    id: 1,
    image: toska1,
    title: "نصف جوجه ، رب انار ، نان",
    name: "خوراک اکبر جوجه",
    discount: 15,
    price: 175000,
  },
  {
    id: 3,
    image: toska2,
    title: "نصف جوجه ، برنج زعفرانی ایرانی ، رب انار",
    name: "چلو اکبر جوجه",
    discount: 4,
    price: 219000,
  },
  {
    id: 4,
    image: toska3,
    name: "چلو اکبر جوجه ( سرویس کامل )",
    title:
      "یک پرس اکبرجوجه با برنج، یک عدد ماست دلال، یک عدد زیتون پرورده، یک عدد رب انار، یک عدد نوشابه قوطی",
    discount: 6,
    price: 305000,
  },
  {
    id: 5,
    image: toska4,
    title: "چلو کره",
    name: "برنج زعفرانی ۱۰۰% ایرانی",
    discount: 5,
    price: 50000,
  },
  {
    id: 6,
    image: toska5,
    name: "چلو اکبر جوجه ویژه",
    title:
      "دو پرس خوراک اکبر جوجه ، یک پرس برنج زعفرانی ایرانی ، یک عدد زیتون پرورده ، یک عدد ماست دلال ، یک عدد نوشابه قوطی ، دو عدد رب انار ، نان",
    discount: 20,
    price: 465000,
  },
];

const menuFastfoodTam: ImenuZiyafat[] = [
  {
    id: 1,
    image: tam1,
    name: " گوشت و قارچ",
    title:
      "خمیر پیتزا امریکایی (۲۶سانتی) . گوشت چرخ کرده ران گوساله با ادویه مخصوص . قارچ . فلفل دلمه . پنیر پیتزا پروسس",
    discount: 15,
    price: 310000,
  },
  {
    id: 3,
    image: tam2,
    name: "پیتزا سبزیجات",
    title: "خمیر پیتزا کلاسیک، قارچ، فلفل دلمه ای، پیاز، ذرت، گوجه، پنیر پروسس",
    discount: 4,
    price: 219000,
  },
  {
    id: 4,
    image: tam3,
    name: "پیتزا مرغ و قارچ",
    title:
      "خمیر پیتزا کلاسیک، خمیر پیتزا آمریکایی، سینه یا فیله گریل شده با ادویه مخصوص، قارچ، فلفل دلمه ای، پنیر پیتزا",
    discount: 6,
    price: 275000,
  },
  {
    id: 5,
    image: tam4,
    title: "خمیر پیتزا کلاسیک، ژامبون پپرونی ۷۰%، پنیر پیتزا پروسس",
    name: "پیتزا پپرونی",
    discount: 5,
    price: 250000,
  },
  {
    id: 6,
    image: tam5,
    name: "پیتزا مخلوط",
    title:
      "خمیر پیتزا کلاسیک، کوکتل ۵۵% امیران، ژامبون مرغ ۷۰%، قارچ، فلفل دلمه ای، پنیر پیتزا پروسس",
    discount: 20,
    price: 250000,
  },
];

const menShani: ImenuZiyafat[] = [
  {
    id: 1,
    image: shani1,
    name: "چلو کباب کوبیده ویژه شانی",
    title:
      "کباب کوبیده ویژه شانی مخلوط گوشت گوساله و گوسفندی ۲۵۰ گرمی، ۳۵۰ گرم برنج ایرانی، ۷۵ گرم نثار زعفرانی شامل: خلال پسته، خلال بادام، روغن، کرمانشاهی، دورچین: برگ ریحان، پیاز نگینی، جعفری، گوجه کبابی، فلفل کبابی، لیمو، سماق، زیتون، کنجد",
    discount: 15,
    price: 176000,
  },
  {
    id: 3,
    image: shani2,
    name: "چلو کباب کوبیده گردویی ویژه شانی",
    title:
      "کباب کوبیده مخلوط گوشت گوساله و گوسفندی گردویی ویژه شانی ۲۵۰ گرمی، ۳۵۰ گرم برنج ایرانی، ۷۵ گرم نثار زعفرانی (خلال، پسته، بادام، روغن، کرمانشاهی)، دورچین: برگ ریحان، پیاز نگینی، جعفری، گوجه کبابی، فلفل کبابی، لیمو، سماق، زیتون، کنجد",
    discount: 4,
    price: 319200,
  },
  {
    id: 4,
    image: shani3,
    name: "چلو کباب کوبیده لبنانی ویژه شانی",
    title:
      "کباب کوبیده لبنانی ویژه شانی مخلوط گوشت گوساله و گوسفندی با سبزیجات و ادویجات معطر و گردو ۲۷۵ گرمی، ۳۵۰ گرم برنج ایرانی، ۷۵ گرم نثار زعفرانی (خلال، پسته، بادام، روغن، کرمانشاهی)، دورچین: برگ ریحان، پیاز نگینی، جعفری، گوجه کبابی، فلفل کبابی، لیمو، سماق، زیتون، کنجد",
    discount: 6,
    price: 211200,
  },
  {
    id: 5,
    image: shani4,
    title:
      "کباب کوبیده ملوکی عراقی ویژه شانی مخلوط گوشت گوساله و گوسفندی، با سبزیجات و ادویجات معطر و عصاره گوجه فرنگی ۲۷۵ گرمی، ۳۵۰ گرم برنج ایرانی، ۷۵ گرم نثار زعفرانی، (شامل: خلال پسته، بادام، روغن کرمانشاهی)، دورچین: برگ ریحان، پیاز نگینی، جعفری، گوجه کبابی، فلفل کبابی، لیموترش، سماق، زیتون، کنجد",
    name: "چلو کباب کوبیده ملوکی (عراقی) ویژه شانی",
    discount: 5,
    price: 250000,
  },
  {
    id: 6,
    image: shani5,
    name: "چلو‌ کباب‌ کوبیده کویتی ویژه شانی",
    title:
      "کباب کوبیده کویتی ویژه شانی مخلوط گوشت گوساله و گوسفندی با سبزیجات و ادویجات معطر و سیر ۲۵۰ گرمی، ۳۵۰ گرم برنج ایرانی، ۷۵ گرم نثار زعفرانی، (خلال پسته، خلال بادام، روغن کرمانشاهی)، دورچین: برگ ریحان، پیاز نگینی، جعفری، گوجه کبابی، فلفل کبابی، لیموترش، سماق، زیتون، کنجد",
    discount: 20,
    price: 294400,
  },
  {
    id: 7,
    image: shani6,
    name: "چلو کباب چنجه ویژه شانی ( چنجه گوسفندی )",
    title:
      "یک سیخ کباب چنجه گوسفندی ۳۰۰ گرمی، ۳۵۰ گرم برنج ایرانی، ۷۵ گرم نثار زعفرانی، خلال پسته و بادام، روغن کرمانشاهی، دورچین: برگ ریحان، پیاز نگینی، جعفری، ۵۰ گرم سیب زمینی سوخاری، گوجه کبابی، فلفل کبابی، لیمو، سماق",
    discount: 20,
    price: 270000,
  },
  {
    id: 8,
    image: shani7,
    name: "چلو جوجه کباب زعفرانی ویژه شانی",
    title:
      "یک سیخ جوجه کباب سینه مرغ زعفرانی ویژه ۳۰۰ گرمی، ۳۵۰ گرم برنج ایرانی، ۷۵ گرم نثار زعفرانی (شامل: خلال پسته و بادام طعم دار شده در گلاب قمصر)، روغن کرمانشاهی، دورچین: سبزی ریحان، پیاز و جعفری، ۵۰ گرم سیب زمینی سوخاری، گوجه کبابی، فلفل کبابی، لیمو ترش، سماق",
    discount: 20,
    price: 235000,
  },
];

const dataComment: Icomment[] = [
  {
    id: 1,
    image: user,
    name: "mahak",
    title: "بد نبود,نظر من رو جلب کرد",
    date: "تقریبا یک سال پیش",
  },
  {
    id: 2,
    image: user,
    name: "آرشام",
    title: "غذا دیر رسید و کاملا یخ بود",
    date: "12 ماه پیش",
  },
  {
    id: 3,
    image: user,
    name: "reyhaneh",
    title:
      "خوراک ماهی و بسته‌بندی خوب؛ دورچین و نان متوسط؛ سوپ از زیادی زردچوبه کاملاً تلخ.",
    date: "تقریبا یک سال پیش",
  },
  {
    id: 4,
    image: user,
    name: "امین",
    title:
      "بسته بندی خوب بود، پیک هم به موقع رسید و عالی بود. کیفیت غذا متوسط بود. البته قیمتش هم متناسب بود. سپاسگزارم",
    date: "تقریبا یک سال پیش",
  },
  {
    id: 5,
    image: user,
    name: "fatemeh",
    title: "خوشمزه و با کیفیت بود",
    date: "تقریبا یک سال پیش",
  },
  {
    id: 6,
    image: user,
    name: "امیر",
    title: "بهترین ولذیذ ترین کباب لقمه ای..خیرببینید",
    date: "تقریبا یک سال پیش",
  },
  {
    id: 7,
    image: user,
    name: "نیکا",
    title:
      "پیک با یک فاصله ی زیادی با درب بیمارستان توقف کرد و من به دنبال ایشان بودم و نه اینکه ایشان بیایند. برخورد ایشان اصلا مناسب نبود. و غذا را در کیسه به من ندادند.",
    date: "تقریبا یک سال پیش",
  },
  {
    id: 8,
    image: user,
    name: "rozhan",
    title: "سرد بود",
    date: "تقریبا یک سال پیش",
  },
];

export {
  data,
  foodsData,
  foodsMenu,
  dataFaiveritFood,
  discount,
  mobileApp,
  redsurant,
  menuZiyafat,
  dataComment,
  menuTooska,
  menuFastfoodTam,
  menShani,
};
