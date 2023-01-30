import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../UI/Wrapper/Wrapper";
import { AppRoutes } from "../../AppRoutes";
import s from "./ProjectInfoPage.module.scss";
import data, { IData } from "../../data";
const ProjectInfoPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  let info = data.find((el) => el.id === projectId);

  useEffect(() => {
    if (!info) navigate(AppRoutes.NOT_FOUND);
    info = info as IData;
  }, [projectId]);

  if (!info) {
    navigate(AppRoutes.NOT_FOUND);
    return null;
  }
  return (
    <Wrapper>
      <h1>{info.displayName}</h1>
      <h2>Stack:</h2>
      <div className={s.stack}>{info.stack.join(" ")}</div>
      <h2>Description:</h2>
      <p className={s.description}>{info.description.mini}</p>
    </Wrapper>
  );
};

export default ProjectInfoPage;
