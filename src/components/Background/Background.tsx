import React, { useEffect, useRef } from "react";
import s from "./Background.module.scss";
import { Theme } from "../../context/ThemeContext/ThemeContext";
import { useTheme } from "../../context/ThemeContext/useTheme";

const getBGbyTheme = () => {
  return getComputedStyle(
    document.querySelector(".App") as HTMLElement
  ).getPropertyValue("--bgColor");
};

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const canvas = document.getElementById('canv');
  const { theme } = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    const w = (canvas.width = document.body.offsetWidth);
    const h = (canvas.height = document.body.offsetHeight);
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = getBGbyTheme();
    ctx.fillRect(0, 0, w, h);

    function matrix() {
      console.log(getBGbyTheme());
      ctx.fillStyle = getBGbyTheme() + "30";

      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#0f0";
      ctx.font = "15pt monospace";

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) {
          ypos[ind] = 0;
        } else {
          ypos[ind] = y + 20;
        }
      });
    }

    const i = setInterval(matrix, 50);

    return () => {
      clearInterval(i);
    };
  }, [canvasRef.current, theme]);

  return <canvas ref={canvasRef} className={s.bg} />;
};

export default Background;
