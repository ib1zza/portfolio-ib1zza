import {motion, useScroll} from "framer-motion";
import s from "./InitialTransition.module.scss";
import Flip from "../Flip/Flip";
import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {useAnimationStore} from "../../store/store";
import {disableScroll, enableScroll} from "../../helpers/scroll";

const blackBox = {
    initial: {
        height: "100vh",
        bottom: 0,
    },
    animate: {
        height: 0,
        bottom: "50px",
        transition: {

            delay: 0.75,
            duration: 1.5,
            ease: "easeIn",
        },
    },

};

const text = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            delay: 1.25,
            duration: 0.5,
        },
    },

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
                    animate="animate"
                    variants={text}
                >
                    <motion.div
                        className={s.react}
                        animate={{rotate: 360}}
                        transition={{
                            duration: 3,
                            ease: "linear",
                            repeatType: "loop",
                            repeat: Infinity,
                        }}
                    >
                        <FontAwesomeIcon icon={faReact}/>{" "}
                    </motion.div>
                    <Flip/>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default InitialTransition
