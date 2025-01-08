import React, {useRef} from "react";
import s from "./Welcome.module.scss";
import Button from "../../UI/Button/Button";
import {Link} from "react-scroll";
import {useTranslation} from "react-i18next";
// import photo from "../../../public/im.jpg";
import Typing from "../Typing/Typing";
import HeroBackground from "../HeroBackground/HeroBackground";
import {motion, useScroll, useTransform} from "framer-motion";
import Wrapper from "../../UI/Wrapper/Wrapper";

// const text = "frontend design development future ".toUpperCase();
const text = "create - explore - develop - future - frontend - ".toUpperCase();

const Welcome = () => {
    const {t, i18n} = useTranslation();
    const parent = useRef(null);

    const {scrollYProgress} = useScroll({
        target: parent,
        offset: ["start start", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.6], [1, 0, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.1, 0.6], [1, 0.5, 0]);


    return (
        <motion.div className={s.welcomeContainer} ref={parent}>

                <motion.div style={{opacity, scale}} className={s.welcomeBlock}>

                    <div className={s.welcomeBlock__text}>
                        <h1>
                            {t("me.heading")} <Typing/>
                        </h1>
                        <p>{t("me.subheading")}</p>
                        <Link to={"contacts"} smooth={true} offset={-70} duration={500}>
                            <Button className={s.button}>{t("me.contactme")}</Button>
                        </Link>
                    </div>

                    <div className={s.welcomeBlock__photo}>
                        <img src={"./im.jpg"} alt="me"/>
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
