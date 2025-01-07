import React, {useState} from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import data from "../../constants/data";
import OneProjectCard from "../../components/OneProjectCard/OneProjectCard";
import s from "./ProjectsPage.module.scss";
import HoverSkew from "../../components/HoverSkew/HoverSkew";
import {motion} from "framer-motion";
import {useAnimationStore} from "../../store/store";

const animationVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
}

const ProjectsPage = () => {
    const {isMainTransitionEnded} = useAnimationStore();
    return (
        <Wrapper noYmove>
            <motion.div
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1,
                        }
                    },
                }}
                initial="hidden"
                animate={isMainTransitionEnded ? "visible" : "hidden"}
                className={s.container}
            >
                {
                    data
                        .sort((a, b) => a.displayId - b.displayId)
                        .map((el, i) => (
                            <HoverSkew key={el.id} noYmove={false} variants={animationVariants}>
                                <OneProjectCard projectInfo={el}/>
                            </HoverSkew>
                        ))
                }
            </motion.div>
        </Wrapper>
    );
};

export default ProjectsPage;
