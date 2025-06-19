import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

import { useState } from "react";

const App = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <Navbar sideBar={sideBar} setSideBar={setSideBar} />
      <Hero sideBar={sideBar} />
      <HeadlineCards />
      <Food />
      <Category />
      <Reviews />
      <Footer />
    </>
  );
};

export default App;
