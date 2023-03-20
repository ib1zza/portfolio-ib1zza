import React, { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import s from "./Projects.module.scss";
import BlockTitle from "../BlockTitle/BlockTitle";

import { Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";
import data from "../../data";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageNumber, setPageNumber] = useState(0);
  const nextHandler = () => {
    setPageNumber((prev) => (prev >= 1 ? 0 : prev + 1));
  };
  const prevHandler = () => {
    setPageNumber((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  useEffect(() => {
    if (!containerRef.current) return;
    controls.start({
      translateX: `calc(-${pageNumber * 100}% - ${pageNumber * 20}px)`,
    });
  }, [pageNumber]);

  const controls = useAnimation();
  console.log(data);
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
              <Link to={AppRoutes.PROJECTS + "/" + el.id}>
                <img src={el.images?.desktop[0]} alt={el.displayName} />
              </Link>
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
      <Button className={s.button__prev} onClick={prevHandler}>
        {"<"}
      </Button>
      <Button className={s.button__next} onClick={nextHandler}>
        {">"}
      </Button>
    </div>
  );
};

export default Projects;
