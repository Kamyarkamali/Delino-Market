import Discount from "../module/Discount";
import Faivaritse from "../module/Faivaritse";
import MobileApp from "../module/MobileApp";
import Resturan from "../module/Resturan";
import Sliders from "../module/Sliders";

function Home() {
  return (
    <div>
      <Sliders />
      <Discount />
      <Faivaritse />
      <MobileApp />
      <Resturan />
    </div>
  );
}

export default Home;
