import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";

const cards = [1, 2, 3, 4, 5, 6, 7];
const initialCardPositions = [
  { translateX: -360, rotate: 0, zIndex: 1, size: "120px", translateY: 115 },
  { translateX: -200, rotate: 0, zIndex: 2, size: "140px", translateY: 35 },
  { translateX: -100, rotate: 0, zIndex: 3, size: "140px", translateY: 0 },
  { translateX: 0, rotate: 0, zIndex: 4, size: "200px", translateY: 0 },
  { translateX: 100, rotate: 0, zIndex: 3, size: "140px", translateY: 0 },
  { translateX: 200, rotate: 0, zIndex: 2, size: "140px", translateY: 35 },
  { translateX: 360, rotate: 0, zIndex: 1, size: "120px", translateY: 115 },
];

function MobileCarousel() {
  const [cardPositions, setCardPositions] = useState(initialCardPositions);
  const carouselRef = useRef(null);
  const [autoSwitch, setAutoSwitch] = useState(true);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // const handleResize = () => {
    //   const carouselWidth = carouselRef.current.clientWidth;
    //   const screenWidth = window.innerWidth;

    //   let scaleFactor;

    //   if (screenWidth > 1440) {
    //     scaleFactor = carouselWidth / 1400;
    //   } else if (screenWidth === 1440) {
    //     scaleFactor = carouselWidth / 900;
    //   } else if (screenWidth === 1024) {
    //     scaleFactor = carouselWidth / 800;
    //   } else if (screenWidth === 768) {
    //     scaleFactor = carouselWidth / 700;
    //   } else {
    //     scaleFactor = carouselWidth / 600;
    //   }

    //   const scaledCardPositions = initialCardPositions.map((position) => ({
    //     ...position,
    //     size: `${parseFloat(position.size) * scaleFactor}px`,
    //     translateX: position.translateX * scaleFactor,
    //     translateY: position.translateY * scaleFactor,
    //   }));
    // //   setCardPositions(scaledCardPositions);

    // //   const carouselButtonWidth = Math.max(35, Math.round(50 * scaleFactor));
    // //   const carouselButtonHeight = Math.max(35, Math.round(50 * scaleFactor));
    // //   const carouselButtonTranslateX = Math.round(437 * scaleFactor);
    // //   const carouselButtonTranslateY = Math.round(200 * scaleFactor);

    // //   const carouselButtons = document.querySelectorAll('.carousel-button');
    // //   carouselButtons.forEach((button) => {
    // //     button.style.width = `${carouselButtonWidth}px`;
    // //     button.style.height = `${carouselButtonHeight}px`;
    // //     if (button.classList.contains('left-button')) {
    // //       button.style.transform = `translateX(${-carouselButtonTranslateX}px) translateY(${carouselButtonTranslateY}px)`;
    // //     } else if (button.classList.contains('right-button')) {
    // //       button.style.transform = `translateX(${carouselButtonTranslateX}px) translateY(${carouselButtonTranslateY}px)`;
    // //     }
    // //   });

    // };

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

    // handleResize();
    // window.addEventListener('resize', handleResize);

    if (autoSwitch) {
      startAutoSwitch();
    } else {
      stopAutoSwitch();
    }

    return () => {
      //   window.removeEventListener('resize', handleResize);
      stopAutoSwitch();
    };
  }, [autoSwitch]);

  const handlePrevButtonClick = () => {
    setCardPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      const lastPosition: any = newPositions.pop();
      newPositions.unshift(lastPosition);
      return newPositions;
    });
    setAutoSwitch(false);
  };

  const handleNextButtonClick = () => {
    setCardPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      const firstPosition: any = newPositions.shift();
      newPositions.push(firstPosition);
      return newPositions;
    });
    setAutoSwitch(false);
  };

  return (
    <div className="carousel mobile-carosel" ref={carouselRef}>
      {cardPositions.map((position, index) => (
        <img
          key={index}
          src={`./assets/cards/card${cards[index]}.webp`}
          alt={`Card ${index + 1}`}
          className={`card ${position.zIndex === 4 ? "center" : ""}`}
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
          transform: "translateX(-106px) translateY(15px)",
          zIndex: 999,
        }}
        onClick={handlePrevButtonClick}
      >
        <img
          src={"./assets/buttons/caroselButtons/leftCaroselButton.png"}
          alt="Left Button"
          style={{ width: "30px", height: "30px" }}
        />
      </button>
      <button
        className="carousel-button right-button"
        style={{ transform: "translateX(106px) translateY(15px)", zIndex: 999 }}
        onClick={handleNextButtonClick}
      >
        <img
          src={"./assets/buttons/caroselButtons/rightCaroselButton.png"}
          alt="Right Button"
          style={{ width: "30px", height: "30px" }}
        />
      </button>
    </div>
  );
}

export default MobileCarousel;
