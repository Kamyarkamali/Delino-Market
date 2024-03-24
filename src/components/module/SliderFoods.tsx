import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { foodsData } from "../../data";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

function SliderFoods() {
  return (
    <div className="max-w-[1400px] mx-auto lg:shadow-lg lg:shadow-gray-500 lg:bg-yellow-400/80 rounded-[20px] mt-5 p-2">
      <h1 className="font-bold text-xl mb-7 text-gray-800">
        غذهای مورد علاقه <span className="text-red-500">شما</span>
      </h1>
      <Carousel responsive={responsive}>
        {foodsData.map((item) => (
          <div key={item.id}>
            <img
              className="2xl:w-[200px] md:w-[150px] w-[100px] mx-auto hover:rotate-12 hover:scale-105 duration-300 2xl:h-[200px] md:h-[150px] h-[100px] rounded-full object-cover"
              src={item.image}
              key={item.id}
              alt="/"
            />
            <div className="flex 2xl:justify-center justify-center 2xl:w-[300px] md:w-[300px] w-[160px]">
              <span className="text-center font-bold text-orange-600 mt-4">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="flex justify-center mt-5">
        <Link to="/menu">
          <button className="bg-orange-500 p-1 w-[140px] text-white rounded-md">
            دیدن منو
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SliderFoods;
