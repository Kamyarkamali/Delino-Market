import { Route, Routes } from "react-router-dom";
import Home from "../template/Home";
import Menu from "../template/Menu";
// import FoodsMenuItems from "../template/FoodsMenuItems";
import Ziyafat from "../template/Ziyafat";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/menu" index element={<Menu />} />
        {/* <Route path="/:id" element={<FoodsMenuItems />} /> */}
        <Route path="/:id" element={<Ziyafat />} />
      </Routes>
    </div>
  );
}

export default Router;
