import { Route, Routes } from "react-router-dom";
import Home from "../template/Home";
import Menu from "../template/Menu";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/menu" index element={<Menu />} />
      </Routes>
    </div>
  );
}

export default Router;
