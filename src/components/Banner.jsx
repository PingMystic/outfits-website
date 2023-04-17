import { useState } from "react";
import productImg1 from "../images/thumbnail-01.jpg";
import productImg2 from "../images/thumbnail-02.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useGlobalContext } from "../context";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { slides } = useGlobalContext();
  function handleDotsClick(index) {
    setCurrentSlide(index);
  }

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function nextSlide() {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  return (
    <>
      <button className="left-slide slide-btn" onClick={prevSlide}>
        <AiOutlineLeft />
      </button>
      <div className="banners-container">
        {slides.map((slide, index) => {
          const { title, desc, price } = slide;
          return (
            <div
              className={currentSlide === index ? "banner active" : "banner"}
              key={index}
              style={{
                backgroundImage: `url("${slides[currentSlide].img}")`,
              }}
            >
              <div className="container">
                <div className="text">
                  <h2 className="name">{title}</h2>
                  <p>{desc}</p>
                  <div className="price">
                    <span className="current-price">${price}</span>
                    <span className="prev-price">$250.00</span>
                  </div>
                  <div className="img-swatches">
                    <span>IMAGE SWATCHES</span>
                    <div className="images">
                      <img src={productImg1} alt="" />
                      <img src={productImg2} alt="" />
                    </div>
                  </div>
                  <button>
                    <a href="#">BUY NOW</a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="dots-container">
          {slides.map((slide, index) => (
            <span
              className={`dot ${index === currentSlide ? "active" : ""}`}
              key={index}
              onClick={() => handleDotsClick(index)}
            ></span>
          ))}
        </div>
      </div>
      <button className="right-slide slide-btn" onClick={nextSlide}>
        <AiOutlineRight />
      </button>
    </>
  );
}
