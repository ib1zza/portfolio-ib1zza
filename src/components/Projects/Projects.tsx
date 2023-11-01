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
import OneProjectCard from "../OneProjectCard/OneProjectCard";
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
  console.log("rerender");
  return (
    <div className={s.projectsBlock}>
      <Slider
        easing={"ease-in"}
        swipeToSlide={true}
        swipe={true}
        {...settings}
        className={s.projects__slider}
      >
        {data.map((el) => (
          <div key={el.id} className={s.projects__slider__container}>
            <OneProjectCard projectInfo={el} key={el.id} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
