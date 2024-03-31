import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import image1 from "../../assets/slider/1.jpg";
import image2 from "../../assets/slider/2.jpg";
import image3 from "../../assets/slider/3.jpg";

function Sliders() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
  ];

  return (
    <div className="max-w-[1400px] lg:w-[1200px] md:w-[900px] w-[350px] m-auto mb-9 mt-9">
      <Slider {...settings}>
        {slider.map((item) => (
          <img
            className="lg:h-[400px] w-[200px] object-fill rounded-md"
            src={item.image}
            alt=""
          />
        ))}
      </Slider>
    </div>
  );
}

export default Sliders;
