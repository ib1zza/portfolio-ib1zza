import React, { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import s from "./Projects.module.scss";
import BlockTitle from "../BlockTitle/BlockTitle";

import { Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";
import data from "../../data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 2500,

  pauseOnHover: true,
  dots: false,
  arrows: true,

  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 750,
      settings: {
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className={s.projectsBlock}>
      <BlockTitle text={t("global.projects")} />
      <Slider
        easing={"ease-in"}
        swipeToSlide={true}
        swipe={true}
        {...settings}
        className={s.projects__slider}
      >
        {data.map((el) => (
          <div key={el.id} className={s.projects__slider__container}>
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
                    {t(el.description.mini)}
                  </p>
                  <Link to={AppRoutes.PROJECTS + "/" + el.id}>
                    <Button>{t("view") + " ->"}</Button>
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
