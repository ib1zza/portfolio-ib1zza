
import s from "./TopBtn.module.scss"   ;
import {motion, useMotionValue, useScroll, useTransform} from "framer-motion";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../../UI/Button/Button";
import {useAnimationStore} from "../../store/store";
import {useEffect} from "react";

interface TopBtnProps {
    className?: string
}
const TopBtn = ({className} : TopBtnProps) => {
    const {
        isMainTransitionEnded
    } = useAnimationStore()
    const {scrollYProgress} = useScroll();

    const opacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        scrollYProgress.set(0)
    }, [isMainTransitionEnded]);

    if (!isMainTransitionEnded) return null;

    return (
        <motion.div
            style={{opacity, scale: opacity}} className={s.btnContainer}>
            <Button onClick={handleScrollToTop} className={s.btn}>
                <FontAwesomeIcon icon={faArrowUp} />

            </Button>
        </motion.div>
    );
};

export {TopBtn};
