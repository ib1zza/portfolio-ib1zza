import React, {useEffect, useRef} from "react";
import s from "./Welcome.module.scss";
import Button from "../../UI/Button/Button";
import {Link} from "react-scroll";
import {useTranslation} from "react-i18next";
import Typing from "../Typing/Typing";
import HeroBackground from "../HeroBackground/HeroBackground";
import {motion, useScroll, useTransform} from "framer-motion";
import {useLenis} from "../SmoothScroll/SmoothScroll";

// const text = "frontend design development future ".toUpperCase();
const text = "create - explore - develop - future - frontend - ".toUpperCase();

const Welcome = () => {
    const {t} = useTranslation();
    const parent = useRef(null);

    const {scrollYProgress} = useScroll({
        target: parent,
        offset: ["start start", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.6], [1, 0, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.1, 0.6], [1, 0.5, 0]);
    const blur = useTransform(scrollYProgress, [0, 0.1, 0.6], ["0px", "20px", 0]);

    return (
        <motion.div className={s.welcomeContainer} ref={parent}>

            <motion.div
                initial={
                    {
                        opacity: 0,
                        y: 100
                    }
                }
                animate={{
                    y: 0,
                    opacity: 1,
                    // @ts-ignore
                }} style={{opacity, scale, '--blur': blur}} className={s.welcomeBlock}>

                <div className={s.welcomeBlock__text}>
                    <h1>
                        {t("me.heading")} <Typing/>
                    </h1>
                    <p>{t("me.subheading")}</p>
                    <Link to={"contacts"} aria-label={'Contact me'} smooth={true} offset={-70} duration={1500}>
                        <Button className={s.button}>{t("me.contactme")}</Button>
                    </Link>
                </div>

                <div className={s.welcomeBlock__photo}>
                    <img src={"./im.webp"} alt="me" />
                    <div className={s.rotate}>
                        {text.split("").map((el, i) => (
                            <span
                                style={{
                                    transform: `rotate(${(i / text.length) * 360}deg)`,
                                }}
                                key={el + i}
                                className={s.char}
                            >
                              {el}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            <HeroBackground/>

        </motion.div>
    );
};

export default Welcome;
