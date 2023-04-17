import { createContext, useContext, useState } from "react";
import bannerImage1 from "./images/banner-slider-01.jpg";
import bannerImage2 from "./images/banner-slider-03.jpg";
import bannerImage3 from "./images/banner-slider-04.jpg";

const AppContext = createContext();

function AppProvider({ children }) {
  const [cartActive, setCartActive] = useState(false);
  const slides = [
    {
      title: "Elbow-Patch Leather Jacket",
      desc: "Casual line. Short design. 100% suede leather. Backstitched elbow patche",
      img: bannerImage1,
      price: "190.00",
    },
    {
      title: "Nappa Tote Bag",
      desc: "Casual line. Short design. 100% suede leather. Backstitched elbow patche",
      img: bannerImage2,
      price: "59.00",
    },
    {
      title: "Autumnt Vibes",
      desc: "Casual line. Short design. 100% suede leather. Backstitched elbow patche",
      img: bannerImage3,
      price: "89.00",
    },
  ];
  return (
    <AppContext.Provider value={{ slides, cartActive, setCartActive }}>
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, useGlobalContext, AppProvider };
