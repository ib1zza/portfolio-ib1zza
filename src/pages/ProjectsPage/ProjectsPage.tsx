import React from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import data from "../../data";
import OneProjectCard from "../../components/OneProjectCard/OneProjectCard";
import s from "./ProjectsPage.module.scss";

const ProjectsPage = () => {
  return (
    <Wrapper>
      <div className={s.container}>
        {data.map((el) => (
          <OneProjectCard projectInfo={el} key={el.id} />
        ))}
      </div>
    </Wrapper>
  );
};

export default ProjectsPage;
