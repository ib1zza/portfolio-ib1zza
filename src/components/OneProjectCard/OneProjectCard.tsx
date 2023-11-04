import React from "react";
import s from "./OneProjectCard.module.scss";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";
import Button from "../../UI/Button/Button";
import { IData } from "../../constants/data";
import { useTranslation } from "react-i18next";

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
        <div className={s.technologies}>{projectInfo.stack.join(" ")}</div>
        <div className={s.project__info}>
          <h2 className={s.project__name}>{projectInfo.displayName}</h2>
          <p className={s.project__description}>
            {t(projectInfo.description.mini)}
          </p>
          <Link to={AppRoutes.PROJECTS + "/" + projectInfo.id}>
            <Button>{t("view") + " ->"}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OneProjectCard;
