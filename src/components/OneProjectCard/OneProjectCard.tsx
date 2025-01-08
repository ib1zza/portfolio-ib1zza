import React from "react";
import s from "./OneProjectCard.module.scss";
import {Link, useNavigate} from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";
import { IData } from "../../constants/data";
import { useTranslation } from "react-i18next";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertStringToJSX } from "../../helpers/utils/format";
import Button from "../../UI/Button/Button";
import {motion} from "framer-motion";

interface Props {
  projectInfo: IData;
}

const OneProjectCard = ({ projectInfo }: Props) => {
  const { t } = useTranslation();
const navigate = useNavigate();
  return (
    <div className={s.projects__slider__item} key={projectInfo.id}>
      <div className={s.projects__image}>
        <Link to={AppRoutes.PROJECTS + "/" + projectInfo.id}>
          <motion.img
              variants={{
                  initial: {
                      scale: 1
                  },
                  hovered: {
                      scale: 1.1,
                      transition: {
                          duration: 0.3
                      }
                  }
              }}
            src={projectInfo.images?.desktop[0]}
            alt={projectInfo.displayName}
          />
        </Link>
      </div>
      <div className={s.project__item__text}>
        <div className={s.technologies}>{projectInfo.stack.join(" • ")}</div>
        <div className={s.project__info}>
          <motion.h2
              variants={{
                  initial: {
                      opacity: 0.8,
                      // scaleY: 1,
                  },
                  hovered: {
                      opacity: 1,
                      // scaleY: 0.9,
                      transition: {
                          duration: 0.3
                      }
                  }
              }}
              className={s.project__name}>{projectInfo.displayName}</motion.h2>
          <p
            className={s.project__description}
            dangerouslySetInnerHTML={{
              __html: convertStringToJSX(t(projectInfo.description.mini)),
            }}
          />
            <Button className={s.button} onClick={() => navigate(AppRoutes.PROJECTS + "/" + projectInfo.id)}>{t("view")}<FontAwesomeIcon icon={faArrowRight} /></Button>
        </div>
      </div>
    </div>
  );
};

export default OneProjectCard;
