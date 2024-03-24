import React, { useState } from "react";

import { foodsMenu } from "../../data";

import MenuFoods from "../module/MenuFoods";

function Menu() {
  const [foods, setFoods] = useState<string>("all");

  const [showFoods, setShowFoods] = useState<object[]>(foodsMenu);

  const changeHandeler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target.value;

    if (target === "all") {
      setShowFoods(foodsMenu);
      setFoods(target);
    } else {
      const filtered = foodsMenu.filter((i) => i.category === target);
      setShowFoods(filtered);
      setFoods(target);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex justify-center mt-5 text-white">
        <select
          value={foods}
          onChange={changeHandeler}
          className="p-1 w-[200px] bg-[#251244] rounded-md"
        >
          <option value="all">همه</option>
          <option value="pizza">پیتزا</option>
          <option value="hamburger">همبرگر</option>
        </select>
      </div>
      <MenuFoods showFoods={showFoods} setShowFoods={setShowFoods} />
    </div>
  );
}

export default Menu;
