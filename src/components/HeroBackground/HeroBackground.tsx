import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import s from "./HeroBackground.module.scss";

const HeroBackground = () => {
    const parent = useRef(null);
    const {scrollYProgress} = useScroll({
        target: parent,
        offset: ["start start", "end end"],
    });

    // const offset = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const offset = useTransform(scrollYProgress, [0, 1], ["0vh", "-200vh"]);
    const offset2 = useTransform(scrollYProgress, [0, 1], ["-200vh", "-50vh"]);
    const offset3 = useTransform(scrollYProgress, [0, 1], ["0vh", "-250vh"]);
    const offset4 = useTransform(scrollYProgress, [0, 1], ["-200vh", "0vh"]);
    const offset5 = useTransform(scrollYProgress, [0, 1], ["-100vh", "-250vh"]);
    const offset6 = useTransform(scrollYProgress, [0, 1], ["-200vh", "-100vh"]);

    const offsets = [offset, offset2, offset3, offset4, offset5, offset6];
    const blur = useTransform(scrollYProgress, [0, 0.0, 0.1, 0.9, 1], ["20px", "20px", "2px", "2px", "20px"]);
    const opacity = useTransform(scrollYProgress, [0, 0.0, 0.1, 0.9, 1], [0, 0, 1, 1, 0]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.0, 0.1, 0.9, 1], [0, 0, 1, 1, 0]);
    // const text = [`Creative Solutions `.repeat(4).toUpperCase(),
    //     `User Experience `.repeat(3).toUpperCase(),
    //     `Visual Design `.repeat(3).toUpperCase(),
    //     `Clean Code `.repeat(3).toUpperCase(),
    //     `design frontend `.repeat(3).toUpperCase(),
    //     `Performance Optimization `.repeat(3).toUpperCase(),
    // ];

    const text = [`фронтенд разработчик `.repeat(4).toUpperCase(),
        `frontend dev `.repeat(4).toUpperCase(),
        `フロントエンド開発者 `.repeat(3).toUpperCase(),
        `Frontend-Entwickler `.repeat(3).toUpperCase(),
        `développeur front-end `.repeat(3).toUpperCase(),
        `前端开发人员 `.repeat(5).toUpperCase(),
    ];

    return (
        <motion.div
            style={{
                opacity: bgOpacity,
            }} className={s.container} ref={parent}>
            <motion.div className={s.bgFirstBlock}>
                {text.map((t, index) => <motion.div
                    style={{
                        x: offsets[index],
                        // @ts-ignore
                        "--blur": blur,
                        opacity,
                    }}
                    key={index} className={s.text}>{t}</motion.div>)}
            </motion.div>
        </motion.div>
    )
};

export default HeroBackground;
