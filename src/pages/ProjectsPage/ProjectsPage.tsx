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
          <HoverSkew>
            <OneProjectCard projectInfo={el} key={el.id} />
          </HoverSkew>
        ))}
      </div>
    </Wrapper>
  );
};

export default ProjectsPage;
