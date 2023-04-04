import React, { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import s from "./Projects.module.scss";
import BlockTitle from "../BlockTitle/BlockTitle";

import { Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";
import data from "../../data";
import { motion, useAnimation } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  margin: 20,
  pauseOnFocus: true,
  pauseOnHover: true,
  dots: false,
  arrows: true,

  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageNumber, setPageNumber] = useState(0);
  const nextHandler = () => {
    setPageNumber((prev) => (prev >= 2 ? 0 : prev + 1));
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
      <Slider swipe={true} {...settings} className={s.projects__slider}>
        {data.map((el) => (
          <div className={s.projects__slider__container}>
            <div className={s.projects__slider__item} key={el.id}>
              <div className={s.projects__image}>
                <Link to={AppRoutes.PROJECTS + "/" + el.id}>
                  <img src={el.images?.desktop[0]} alt={el.displayName} />
                </Link>
              </div>
              <div className={s.project__item__text}>
                <div className={s.technologies}>{el.stack.join(" ")}</div>
                <div className={s.project__info}>
                  <h2 className={s.project__name}>{el.displayName}</h2>
                  <p className={s.project__description}>
                    {el.description.mini}
                  </p>
                  <Link to={AppRoutes.PROJECTS + "/" + el.id}>
                    <Button>{"View ->"}</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
