import { relative } from "path";
import React, { useState, useEffect } from "react";

import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';

const AnimatedCard = (props: any) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = React.useRef(null);
  const {style, ...mouseHandlers} = use3dEffect(ref);

  const FlipCard = () => {
    setIsFlipped(!isFlipped);
  }

  const calculatedWidth = (2948 / 4496) * parseInt(props.height, 10);

  return (
    <div
      style={{
        height: props.height,
        display: "flex",
        justifyContent: "end",
        width: calculatedWidth,
        maxWidth: calculatedWidth,
        overflow: "visible",
      }}
    >
      <div
        style={{ position: "relative", zIndex: 100, height: "100%" }}
        className={!isFlipped ? "card" : "card flipped"}
      >
        <div onClick={FlipCard} className="card-block card-front">
          <img
            height={props.height}
            className="AnimatedCardBack"
            src={"/assets/" + props.cardBack}
          />
        </div>
        <div className="card-block card-back">
          <animated.div
            className="AnimatedCardfront"
            ref={ref}
            style={{
              background: "none",
              color: "white",
              ...style,
            }}
            {...mouseHandlers}
          >
            <img
              height={props.height}
              className="ShopCard"
              src={"/assets/" + props.cardFront}
            />
          </animated.div>
        </div>
      </div>
      {/* <img
        style={{ position: "absolute", marginTop: -500, opacity: 0.01 }}
        height={props.height}
        className="ShopCard"
        src="/assets/CardFront.png"
      /> */}
    </div>
  );
};

export default AnimatedCard;