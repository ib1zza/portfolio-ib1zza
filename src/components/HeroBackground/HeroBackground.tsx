import React, {useEffect, useRef} from 'react';
import {motion, useInView, useScroll, useTransform} from "framer-motion";
import s from "./HeroBackground.module.scss";
import {faDesktop} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useLenis} from "../SmoothScroll/SmoothScroll";

const svg = <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 576 512">
    <path
        d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"/>
</svg>

const HeroBackground = () => {
    const parent = useRef(null);
    const {scrollYProgress} = useScroll({
        target: parent,
        offset: ["start start", "end end"],
    });

    const inView = useInView(parent, {
        margin: '-90% 0px 0px 0%',
        // amount: 0.5
        // amount: "all"
    });

    // const offset = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const offset = useTransform(scrollYProgress, [0, 1], ["0vh", "-200vh"]);
    const offset2 = useTransform(scrollYProgress, [0, 1], ["-200vh", "-50vh"]);
    const offset3 = useTransform(scrollYProgress, [0, 1], ["0vh", "-250vh"]);
    const offset4 = useTransform(scrollYProgress, [0, 1], ["-200vh", "0vh"]);
    const offset5 = useTransform(scrollYProgress, [0, 1], ["-100vh", "-250vh"]);
    const offset6 = useTransform(scrollYProgress, [0, 1], ["-200vh", "-100vh"]);

    const offsets = [offset, offset2, offset3, offset4, offset5, offset6];
    const blur = useTransform(scrollYProgress, [0, 0.0, 0.1, 0.8, 0.9], ["20px", "20px", "1px", "1px", "10px"]);
    const opacity = useTransform(scrollYProgress, [0, 0.0, 0.1, 0.8, 0.9], [0, 0, 1, 1, 0]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.0, 0.1, 0.9, 1], [0, 0, 1, 1, 0]);

    const text = [
        "фронтенд разработчик",
        "frontend dev",
        "フロントエンド開発者",
        "Frontend-Entwickler",
        "développeur front-end",
        "前端开发人员"
    ].map((textContent) => (
        <div className={s.text} key={textContent}>
            <span>{textContent.toUpperCase()}</span>
            <div className={s.icon}>
                <motion.svg
                    initial={'initial'}
                    animate={'animate'}
                    className={s.svg}
                    width="70"
                    height="70"
                    viewBox="0 0 34 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.99763 16.0278C11.9013 12.1241 16.9941 6.53133 16.9941 7.03133C16.9941 7.53133 16.9941 36.5197 16.9941 37.0195C16.9941 37.5193 32.488 22.0254 31.9882 22.0254C31.4884 22.0254 2 22 2 22"
                        stroke="currentColor"
                        stroke-linecap="round"
                    />
                    <motion.circle cx="17" cy="2" r="2" fill="currentColor"/>
                </motion.svg>
            </div>
        </div>
    ));

    const lenis = useLenis();



    useEffect(() => {
        if (!inView && scrollYProgress.get() > 0.5) {
            lenis?.stop();
            console.log("stop")

            setTimeout(() => {
                lenis?.start();
            }, 300);
        }
    }, [inView]);

    // function handleAnimationEnd() {
    //     lenis?.stop();
    //     setTimeout(() => {
    //         lenis?.start();
    //     }, 300);
    // }

    return (
        <motion.div
            style={{
                opacity: bgOpacity,
            }} className={s.container} ref={parent}>
            <motion.div className={s.bgFirstBlock}>
                {text.map((Comp, i) => <motion.div
                    style={{
                        x: offsets[i],
                        // @ts-ignore
                        "--blur": blur,
                        opacity,
                    }}
                    key={i} className={s.textContainer}>

                    {Array(4)
                        .fill(Comp)
                        .map((c, index) => (
                            <React.Fragment key={i * 4 + index}>{c}</React.Fragment>
                        ))}
                </motion.div>)}
            </motion.div>
        </motion.div>
    )
};

export default HeroBackground;
