import { Imenu } from "./types/type";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const data: Imenu[] = [
  { id: 1, title: "صفحه اصلی" },
  {
    id: 2,
    title: "دسته بندی منو",
    icons: <MdOutlineKeyboardArrowDown size={23} />,
  },
  { id: 3, title: "سرویس ها" },
  { id: 4, title: "تماس با ما" },
  { id: 5, title: "درباره ما" },
];

export { data };
