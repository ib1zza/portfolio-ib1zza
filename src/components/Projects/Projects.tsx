import React, { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import s from "./Projects.module.scss";
import BlockTitle from "../BlockTitle/BlockTitle";

import image from "../../assets/img/projects-screens/todo1.jpg";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";
import data, { IData } from "../../data";
import { motion, useAnimation } from "framer-motion";

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 55px)`,

    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at calc(100% - 40px) 55px)",

    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageNumber, setPageNumber] = useState(0);
  const nextHandler = () => {
    setPageNumber((prev) => (prev > 0 ? 1 : prev + 1));
  };
  const prevHandler = () => {
    setPageNumber((prev) => (prev <= 1 ? 0 : prev - 1));
  };

  useEffect(() => {
    if (!containerRef.current) return;
    controls.start({
      translateX: `calc(-${pageNumber * 100}% - ${pageNumber * 40}px)`,
    });
  }, [pageNumber]);

  const controls = useAnimation();

  return (
    <div className={s.projectsBlock}>
      <BlockTitle text={"projects"} />
      <motion.div
        className={s.projectsBlock__projects}
        ref={containerRef}
        layout
      >
        {data.map((el) => (
          <motion.div
            className={s.projectsBlock__projects__item}
            key={el.id}
            animate={controls}
          >
            <div className={s.projects__image}>
              <img src={image} alt="project demo" />
            </div>
            <div className={s.project__item__text}>
              <div className={s.technologies}>{el.stack.join(" ")}</div>
              <div className={s.project__info}>
                <h2 className={s.project__name}>{el.displayName}</h2>
                <p className={s.project__description}>{el.description.mini}</p>
                <Link to={AppRoutes.PROJECTS + "/" + el.id}>
                  <Button>{"View ->"}</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <button className={s.button__prev} onClick={prevHandler}>
        {"<"}
      </button>
      <button className={s.button__next} onClick={nextHandler}>
        {">"}
      </button>
    </div>
  );
};

export default Projects;
