import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { useResize } from "../../hooks/useResize";

const Cursor = () => {
  const color = "255, 255, 255";

  const [width] = useResize();

  const isVisible = width > 700;

  if (!isVisible) return null;

  return (
    <AnimatedCursor
      innerSize={0}
      outerSize={10}
      color={color}
      outerAlpha={1}
      innerScale={0.7}
      outerStyle={{
        mixBlendMode: "exclusion",
      }}
      showSystemCursor={false}
      outerScale={2}
      trailingSpeed={3}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".cursorHover",
      ]}
    />
  );
};

export default Cursor;
