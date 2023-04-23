import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../UI/Wrapper/Wrapper";
import { AppRoutes } from "../../AppRoutes";
import s from "./ProjectInfoPage.module.scss";
import data, { IData } from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const ProjectInfoPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { projectId } = useParams();
  let info = data.find((el) => el.id === projectId) as IData;

  useEffect(() => {
    if (!info) navigate(AppRoutes.NOT_FOUND);
  }, [projectId]);

  if (info === undefined) {
    navigate(AppRoutes.NOT_FOUND);
    return null;
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    adaptiveHeightMin: true,

    responsive: [
      {
        breakpoint: 650,
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
  return (
    <Wrapper>
      <h1 className={s.project__name}>{info.displayName}</h1>
      {info.images?.desktop && (
        <Slider {...settings} className={s.slider}>
          {info.images.desktop.map((el) => (
            <div key={el} className={s.project__image}>
              <img src={el} alt={info.displayName} />
            </div>
          ))}
        </Slider>
      )}

      {info.images?.mockup.map((el) => (
        <div key={el} className={s.project__image}>
          <img src={el} alt={info.displayName} />
        </div>
      ))}
      <div className={s.stack}>
        <h2>{t("projects.stack")}:</h2>
        <div className={s.stack}>{info.stack.join(" ")}</div>
      </div>
      <div className={s.description}>
        <h2>{t("projects.description")}:</h2>
        <p className={s.description}>{t(info.description.base)}</p>
      </div>

      <div className={s.description}>
        <h2>
          {t("projects.wantToCheck")}{" "}
          <a href={info.link} target={"_blank"} rel="noreferrer">
            {t("projects.viewDeployment")}
          </a>
        </h2>
      </div>
    </Wrapper>
  );
};

export default ProjectInfoPage;
