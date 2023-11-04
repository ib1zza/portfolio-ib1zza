import React from "react";
import s from "./Projects.module.scss";
import data from "../../constants/data";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../scss/slickCustom.scss";
import OneProjectCard from "../OneProjectCard/OneProjectCard";
const settings: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  easing: "ease-in",
  dotsClass: s.dotsContainer,
  pauseOnDotsHover: true,
  autoplay: true,

  autoplaySpeed: 2500,
  pauseOnHover: true,
  dots: true,
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
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],

  customPaging: () => <div className={s.dot} />,
};

const Projects = () => {
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
