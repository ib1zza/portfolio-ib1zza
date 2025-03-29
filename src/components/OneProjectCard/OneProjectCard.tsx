import React from "react";
import s from "./OneProjectCard.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {AppRoutes} from "../../AppRoutes";
import {IData} from "../../constants/data";
import {useTranslation} from "react-i18next";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {convertStringToJSX} from "../../helpers/utils/format";
import Button from "../../UI/Button/Button";
import {motion} from "framer-motion";

interface Props {
    projectInfo: IData;
}

const OneProjectCard = ({projectInfo}: Props) => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    return (
        <motion.div whileHover={'parentHover'}   className={s.projects__slider__item} key={projectInfo.id}>
            <div className={s.projects__image}>
                <Link to={AppRoutes.PROJECTS + "/" + projectInfo.id}>
                    <motion.div className={s.project__link}>
                        <motion.img
                            variants={{
                                initial: {
                                    scale: 1
                                },
                                hov: {
                                    scale: 1.1,
                                    transition: {
                                        duration: 0.3
                                    }
                                }
                            }}
                            src={projectInfo.images?.desktop[0]}
                            alt={projectInfo.displayName}
                        />
                        <motion.div
                            variants={{
                                parentHover: {
                                    opacity: 0.5,
                                    transition: {
                                        duration: 0.2
                                    }
                                }
                            }}
                            className={s.iconContainer}
                        >
                            <motion.svg initial={'initial'} animate={'animate'} className={s.icon} width="70"
                                        height="70" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.99763 16.0278C11.9013 12.1241 16.9941 6.53133 16.9941 7.03133C16.9941 7.53133 16.9941 36.5197 16.9941 37.0195C16.9941 37.5193 32.488 22.0254 31.9882 22.0254C31.4884 22.0254 2 22 2 22"
                                    stroke="currentColor" stroke-linecap="round"/>
                                <motion.circle cx="17" cy="2" r="2" fill="currentColor"/>
                            </motion.svg>
                        </motion.div>
                    </motion.div>
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
                    <Button className={s.button}
                            onClick={() => navigate(AppRoutes.PROJECTS + "/" + projectInfo.id)}>{t("view")}<FontAwesomeIcon
                        icon={faArrowRight}/></Button>
                </div>
            </div>
        </motion.div>
    );
};

export default OneProjectCard;
