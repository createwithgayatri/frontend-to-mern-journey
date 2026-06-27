import { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import images from "../data/images";
import "./carousel.css";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  // Swipe Support
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((img, index) => (
        <Slide key={index} image={img} isActive={index === current} />
      ))}

      {/* Buttons */}
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;