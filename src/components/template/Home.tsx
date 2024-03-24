import Delevry from "../module/Delevry";
import Hero2Page from "../module/Hero2Page";
import SliderFoods from "../module/SliderFoods";
import HeroPage from "./HeroPage";

function Home() {
  return (
    <div>
      <HeroPage />
      <Hero2Page />
      <SliderFoods />
      <Delevry />
    </div>
  );
}

export default Home;
