import {motion, useScroll, Variants} from "framer-motion";
import s from "./InitialTransition.module.scss";
import Flip from "../Flip/Flip";
import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {useAnimationStore} from "../../store/store";
import {disableScroll, enableScroll} from "../../helpers/scroll";

const iconAnimationDuration = 2;
const circleAnimationDuration = 0.5;

const blackBox = {
    initial: {
        bottom: 0,
    },
    animate: {
        opacity: 0,
        transition: {
            delay: iconAnimationDuration + 0.6,
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const text: Variants = {
    initial: {
        opacity: 1,
        scale: 2,
    },
    animateText: {
        opacity: [1, 0],
        transition: {
            delay: iconAnimationDuration + 0.1,
            duration: 0.5,
        },
    },
}

const iconVariants: Variants = {
    initial: {
        strokeDashoffset: 100,
        strokeWidth: 0,
        opacity: 0,
    },
    animate: {
        strokeWidth: 3,
        opacity: 1,
        strokeDashoffset: 0,
        transition: {
            duration: iconAnimationDuration,
        }
    },
}

const circleVariants: Variants = {
    initial: {
        scale: 0,
        y: -10,
    },
    animate: {
        scale: 1,
        y: 0,
        transition: {
            duration: circleAnimationDuration,
            delay: 1.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const backgroundVariants: Variants = {
    initial: {

    },
    animate: {
        backgroundSize: ["10px 10px", "12px 12px", "10px 10px"],
        transition: {
            duration: (iconAnimationDuration + 0.6),
            ease: "linear"
        }
    }
}

const InitialTransition = () => {
    const {endTransition} = useAnimationStore();

    const onAnimationStart = () => {
        document.querySelector("body")?.classList.add("overflow-hidden")
    }

    const onAnimationEnd = () => {
        document.querySelector("body")?.classList.remove("overflow-hidden")

        setTimeout(() => {
            endTransition();
        })
    }

    useEffect(() => {
        disableScroll();

        return () => {
            enableScroll();
        }
    }, []);


    return (
        <div className={s.container}>
            <motion.div
                className={s.motion}
                initial="initial"
                animate="animate"
                variants={blackBox}
                onAnimationStart={onAnimationStart}
                onAnimationComplete={onAnimationEnd}
            >
                <motion.div
                    initial="initial"
                    animate="animateText"
                    variants={text}
                >
                    <motion.svg variants={iconVariants} initial={'initial'} animate={'animate'}  className={s.icon} width="70" height="70" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99763 16.0278C11.9013 12.1241 16.9941 6.53133 16.9941 7.03133C16.9941 7.53133 16.9941 36.5197 16.9941 37.0195C16.9941 37.5193 32.488 22.0254 31.9882 22.0254C31.4884 22.0254 2 22 2 22" stroke="currentColor"  stroke-linecap="round"/>
                        <motion.circle variants={circleVariants} cx="17" cy="2" r="2" fill="currentColor"/>
                    </motion.svg>
                </motion.div>

                <motion.div variants={backgroundVariants} animate={'animate'} className={s.background}/>
                <div className={s.cover}/>
            </motion.div>
        </div>
    );
};

export default InitialTransition
