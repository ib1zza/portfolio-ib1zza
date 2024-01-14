import React from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import data from "../../constants/data";
import OneProjectCard from "../../components/OneProjectCard/OneProjectCard";
import s from "./ProjectsPage.module.scss";
import HoverSkew from "../../components/HoverSkew/HoverSkew";

const ProjectsPage = () => {
  return (
    <Wrapper>
      <div className={s.container}>
        {data.map((el) => (
          <HoverSkew key={el.id}>
            <OneProjectCard projectInfo={el} />
          </HoverSkew>
        ))}
      </div>
    </Wrapper>
  );
};

export default ProjectsPage;
