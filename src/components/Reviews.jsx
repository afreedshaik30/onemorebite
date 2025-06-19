import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy Review Data
const reviews = [
  {
    img: "https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?ga=GA1.1.117553895.1749571865&semt=ais_hybrid&w=740",
    name: "Aarav Mehta",
    text: "Absolutely delicious food! Every bite was flavorful and satisfying. I would definitely come back again.",
  },
  {
    img: "https://img.freepik.com/free-photo/writing-dairy-note-coffee-shop-concept-as-memory-life-woman-coffee-shop-smiling-woman-making-notes-notepad_1153-8262.jpg?ga=GA1.1.117553895.1749571865&semt=ais_hybrid&w=740",
    name: "Sneha Reddy",
    text: "Lovely cozy ambiance and mouth-watering dishes. The staff was kind and made the evening special.",
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-handsome-bearded-man-outside_23-2150266914.jpg?ga=GA1.1.117553895.1749571865&semt=ais_hybrid&w=740",
    name: "Rohan Kapoor",
    text: "Best pizza in town—crispy crust, fresh toppings, and fast service. I'm definitely ordering again and again!",
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div className="bg-amber-600 px-4">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center leading-tight mb-2 text-white">
          What Our Customers Say
        </h2>
        <h2 className="text-xl font-medium text-center text-black mb-8">
          Real reviews from happy food lovers
        </h2>

        <div className="relative">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-6 text-center bg-white rounded-xl shadow-md"
              >
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-2">"{review.text}"</p>
                <h4 className="text-lg font-semibold text-orange-500">
                  - {review.name}
                </h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
