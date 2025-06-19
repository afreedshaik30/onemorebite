import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroData = [
  {
    img: "https://images.unsplash.com/photo-1621070766841-a7bf1ee96df0?q=80&w=2070&auto=format&fit=crop",
    title: "If One bite isn’t enough,",
    highlight: "Take one more.",
  },
  {
    img: "https://img.freepik.com/free-photo/view-delicious-burger-with-buns-cheese_23-2150887834.jpg?ga=GA1.1.117553895.1749571865&semt=ais_hybrid&w=740",
    title: "Craving never ends,",
    highlight: "Satisfy it now.",
  },
  {
    img: "https://img.freepik.com/free-photo/fried-noodles-plate_1339-2157.jpg?ga=GA1.1.117553895.1749571865&semt=ais_hybrid&w=740",
    title: "From oven to your heart,",
    highlight: "Taste the love.",
  },
];

// Custom arrows
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white p-3 rounded-full cursor-pointer bg-black/50 hover:bg-black/70"
  >
    <img src="/next.svg" alt="Next" className="w-6 h-6" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white p-3 rounded-full cursor-pointer bg-black/50 hover:bg-black/70"
  >
    <img src="/prev.svg" alt="Previous" className="w-6 h-6" />
  </div>
);

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="home">
      <div className="max-w-[1640px] mx-auto px-4 relative">
        <Slider {...settings}>
          {heroData.map((item, index) => (
            <div key={index}>
              <div className="max-h-[500px] relative rounded-xl overflow-hidden">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/15 flex flex-col justify-center text-gray-200 px-6 sm:px-14">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    {item.title}
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500">
                    {item.highlight}
                  </h1>
                </div>
                <img
                  className="w-full max-h-[500px] h-[500px] object-cover"
                  src={item.img}
                  alt={`hero-slide-${index}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
