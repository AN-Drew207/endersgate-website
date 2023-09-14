/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const cards = [1, 2, 3, 4, 5, 6, 7];
const initialCardPositions = [
  { translateX: -360, rotate: -45, zIndex: 1, size: "200px", translateY: 115 },
  { translateX: -200, rotate: -30, zIndex: 2, size: "250px", translateY: 45 },
  { translateX: -100, rotate: -15, zIndex: 3, size: "275px", translateY: 20 },
  { translateX: 0, rotate: 0, zIndex: 4, size: "350px", translateY: 0 },
  { translateX: 100, rotate: 15, zIndex: 3, size: "275px", translateY: 20 },
  { translateX: 200, rotate: 30, zIndex: 2, size: "250px", translateY: 35 },
  { translateX: 360, rotate: 45, zIndex: 1, size: "200px", translateY: 115 },
];

function Carousel() {
  const [cardPositions, setCardPositions] = useState(initialCardPositions);
  const carouselRef = useRef(null);
  const [autoSwitch, setAutoSwitch] = useState(true);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const carouselWidth = (carouselRef as any).current.clientWidth;
      const screenWidth = window.innerWidth;
      const breakpoints = [1440, 1024, 768, 600];
      const scaleFactor =
        carouselWidth / (breakpoints.find((bp) => screenWidth >= bp) || 1);

      const scaledCardPositions = initialCardPositions.map((position) => ({
        ...position,
        size: `${parseFloat(position.size) * scaleFactor}px`,
        translateX: position.translateX * scaleFactor,
        translateY: position.translateY * scaleFactor,
      }));
      setCardPositions(scaledCardPositions);

      const carouselButtonWidth = Math.max(35, Math.round(50 * scaleFactor));
      const carouselButtonHeight = Math.max(35, Math.round(50 * scaleFactor));
      const carouselButtonTranslateX = Math.round(437 * scaleFactor);
      const carouselButtonTranslateY = Math.round(200 * scaleFactor);

      const carouselButtons = document.querySelectorAll(".carousel-button");
      carouselButtons.forEach((button) => {
        (button as any).style.width = `${carouselButtonWidth}px`;
        (button as any).style.height = `${carouselButtonHeight}px`;
        if (button.classList.contains("left-button")) {
          (
            button as any
          ).style.transform = `translateX(${-carouselButtonTranslateX}px) translateY(${carouselButtonTranslateY}px)`;
        } else if (button.classList.contains("right-button")) {
          (
            button as any
          ).style.transform = `translateX(${carouselButtonTranslateX}px) translateY(${carouselButtonTranslateY}px)`;
        }
      });
    };

    const startAutoSwitch = () => {
      intervalRef.current = setInterval(() => {
        setCardPositions((prevPositions) => {
          const newPositions = [...prevPositions];
          const firstPosition = newPositions.shift();
          newPositions.push(firstPosition as any);
          return newPositions;
        });
      }, 2000) as any;
    };

    const stopAutoSwitch = () => {
      clearInterval(intervalRef.current as any);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (autoSwitch) {
      startAutoSwitch();
    } else {
      stopAutoSwitch();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      stopAutoSwitch();
    };
  }, [autoSwitch]);

  const handlePrevButtonClick = () => {
    setCardPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      const lastPosition = newPositions.pop();
      newPositions.unshift(lastPosition as any);
      return newPositions;
    });
    setAutoSwitch(false);
  };

  const handleNextButtonClick = () => {
    setCardPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      const firstPosition = newPositions.shift();
      newPositions.push(firstPosition as any);
      return newPositions;
    });
    setAutoSwitch(false);
  };

  return (
    <div className="carousel" ref={carouselRef}>
      {cardPositions.map((position, index) => (
        <img
          key={index}
          src={`./assets/cards/card${cards[index]}.webp`}
          alt={`Card ${index + 1}`}
          className={`cardSlider ${position.zIndex === 4 ? "center" : ""}`}
          style={{
            transform: `translateX(${position.translateX}px) rotate(${position.rotate}deg) translateY(${position.translateY}px)`,
            zIndex: position.zIndex,
            width: position.size,
            filter:
              position.zIndex < 4
                ? `brightness(${[0, 7.5, 20, 50][position.zIndex]}%)`
                : "",
            // Adjust brightness filter
          }}
        />
      ))}
      <button
        className="carousel-button left-button"
        style={{
          transform: "translateX(-437px) translateY(200px)",
          zIndex: 999,
        }}
        onClick={handlePrevButtonClick}
      >
        <img
          src={"./assets/buttons/caroselButtons/leftCaroselButton.png"}
          alt="Left Button"
          style={{ width: "50px", height: "50px" }}
        />
      </button>
      <button
        className="carousel-button right-button"
        style={{
          transform: "translateX(437px) translateY(200px)",
          zIndex: 999,
        }}
        onClick={handleNextButtonClick}
      >
        <img
          src={"./assets/buttons/caroselButtons/rightCaroselButton.png"}
          alt="Right Button"
          style={{ width: "50px", height: "50px" }}
        />
      </button>
    </div>
  );
}

export default Carousel;
