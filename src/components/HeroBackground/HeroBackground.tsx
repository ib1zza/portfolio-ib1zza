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
    const blur = useTransform(scrollYProgress, [0, 0.0, 0.1, 0.9, 1], ["20px", "20px", "2px", "2px", "20px"]);
    const opacity = useTransform(scrollYProgress, [0, 0.0, 0.1, 0.9, 1], [0, 0, 1, 1, 0]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.0, 0.1, 0.9, 1], [0, 0, 1, 1, 0]);

    const text = [
        <div className={s.text}>
            <span>{`фронтенд разработчик`.toUpperCase()}</span>
            <div className={s.icon}>
                <FontAwesomeIcon icon={faDesktop}/>
            </div>
        </div>,
        <div className={s.text}>
            <span>{`frontend dev`.toUpperCase()}</span>
            <div className={s.icon}>
                <FontAwesomeIcon icon={faDesktop}/>
            </div>
        </div>,
        <div className={s.text}>
            <span>{`フロントエンド開発者`.toUpperCase()}</span>
            <div className={s.icon}>
                <FontAwesomeIcon icon={faDesktop}/>
            </div>
        </div>,
        <div className={s.text}>
            <span>{`Frontend-Entwickler`.toUpperCase()}</span>
            <div className={s.icon}>
                <FontAwesomeIcon icon={faDesktop}/>
            </div>
        </div>,
        <div className={s.text}>
            <span>{`développeur front-end`.toUpperCase()}</span>
            <div className={s.icon}>
                <FontAwesomeIcon icon={faDesktop}/>
            </div>
        </div>,
        <div className={s.text}>
            <span>{`前端开发人员`.toUpperCase()}</span>
            <div className={s.icon}>
                <FontAwesomeIcon icon={faDesktop}/>
            </div>
        </div>,
    ];

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
