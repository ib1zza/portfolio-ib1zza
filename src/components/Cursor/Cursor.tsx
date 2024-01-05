import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "../../context/ThemeContext/useTheme";

const Cursor = () => {
  const { theme } = useTheme();
  console.log(theme);
  const color = "255, 255, 255";
  return (
    <AnimatedCursor
      innerSize={0}
      outerSize={15}
      color={color}
      outerAlpha={1}
      innerScale={0.7}
      outerStyle={{
        mixBlendMode: "exclusion",
      }}
      showSystemCursor={false}
      outerScale={3}
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
