import React from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import data from "../../constants/data";
import OneProjectCard from "../../components/OneProjectCard/OneProjectCard";
import s from "./ProjectsPage.module.scss";
import HoverSkew from "../../components/HoverSkew/HoverSkew";

const ProjectsPage = () => {
  return (
    <Wrapper noYmove>
      <div className={s.container}>
        {data
          .sort((a, b) => a.displayId - b.displayId)
          .map((el, i) => (
            <HoverSkew key={el.id} index={i} noYmove={false}>
              <OneProjectCard projectInfo={el} />
            </HoverSkew>
          ))}
      </div>
    </Wrapper>
  );
};

export default ProjectsPage;
