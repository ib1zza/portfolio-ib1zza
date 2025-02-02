import React, {useEffect, useRef} from "react";
import s from "./Background.module.scss";
import {Theme} from "../../context/ThemeContext/ThemeContext";
import {useTheme} from "../../context/ThemeContext/useTheme";
import {motion, useMotionValue, useScroll, useTransform} from "framer-motion";

const getBGbyTheme = () => {
    return getComputedStyle(
        document.querySelector(".App") as HTMLElement
    ).getPropertyValue("--bgColor");
};

const getPrimaryByTheme = () => {
    return getComputedStyle(
        document.querySelector(".App") as HTMLElement
    ).getPropertyValue("--accentColor");
};

const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const {theme} = useTheme();

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

        const w = (canvas.width = document.body.offsetWidth);
        const h = (canvas.height = document.body.offsetHeight);
        const cols = Math.floor(w / 20) + 1;
        const ypos = Array(cols).fill(0);

        const themeBg = getBGbyTheme();
        const themePrim = getPrimaryByTheme();

        ctx.fillStyle = themeBg;
        ctx.fillRect(0, 0, w, h);

        function matrix() {
            ctx.fillStyle = themeBg + "50";

            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = themePrim;
            ctx.font = "15pt Roboto Condensed";

            ypos.forEach((y, ind) => {
                const charPos = 33 + Math.random() * 90;
                const text = String.fromCharCode(charPos);
                const x = ind * 20;
                ctx.fillText(text, x, y);
                if (y > 100 + Math.random() * 10000) {
                    ypos[ind] = 0;
                } else {
                    ypos[ind] = y + 20;
                }
            });
        }

        for (let i = 0; i < 100; i++) {
            matrix();
        }

        const int = setInterval(matrix, 100);

        return () => {
            clearInterval(int);
        };
    }, [canvasRef.current, theme]);

    return <>

        <canvas ref={canvasRef} className={s.bg}/>
    </>
};

export default Background;
