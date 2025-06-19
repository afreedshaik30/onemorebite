import Category from "./components/Category";
import Food from "./components/Food";
import Footer from "./components/Footer";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Reviews />
      <Footer />
    </>
  );
};

export default App;
