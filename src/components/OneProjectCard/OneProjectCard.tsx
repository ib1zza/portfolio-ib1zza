import React from "react";
import s from "./OneProjectCard.module.scss";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";
import Button from "../../UI/Button/Button";
import { IData } from "../../constants/data";
import { useTranslation } from "react-i18next";
import HoverSkew from "../HoverSkew/HoverSkew";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertStringToJSX } from "../../assets/utils/format";

interface Props {
  projectInfo: IData;
}

const OneProjectCard = ({ projectInfo }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={s.projects__slider__item} key={projectInfo.id}>
      <div className={s.projects__image}>
        <Link to={AppRoutes.PROJECTS + "/" + projectInfo.id}>
          <img
            src={projectInfo.images?.desktop[0]}
            alt={projectInfo.displayName}
          />
        </Link>
      </div>
      <div className={s.project__item__text}>
        <div className={s.technologies}>{projectInfo.stack.join(" • ")}</div>
        <div className={s.project__info}>
          <h2 className={s.project__name}>{projectInfo.displayName}</h2>
          <p
            className={s.project__description}
            dangerouslySetInnerHTML={{
              __html: convertStringToJSX(t(projectInfo.description.mini)),
            }}
          />
          <Link
            className={s.button}
            to={AppRoutes.PROJECTS + "/" + projectInfo.id}
          >
            {t("view")}
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OneProjectCard;
