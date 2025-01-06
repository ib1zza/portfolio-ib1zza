import React from "react";
import s from "./Wrapper.module.scss";
import {motion} from "framer-motion";
import {useAnimationStore} from "../../store/store";

interface WrapperProps {
    children?: React.ReactNode;
    className?: string;
    noYmove?: boolean;
}

const Wrapper: React.FC<WrapperProps> = ({noYmove = false, children, className}) => {
    const {isMainTransitionEnded} = useAnimationStore();

    return <motion.div
        initial={{
            opacity: 0,
            y: noYmove ? 0 : 100
        }}
        animate={{
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: !isMainTransitionEnded ? 2.25 : 0,
            }
        }}
        className={s.wrapper + " " + (className || "")}
    >
        {children}
    </motion.div>;
};

export default Wrapper;
