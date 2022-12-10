import React from "react";
import "../../scss/index.scss";
import Button from "../../UI/Button/Button";
import s from "./Projects.module.scss";
import BlockTitle from "../BlockTitle/BlockTitle";
const Projects = () => {
  return (
    <div className={s.projectsBlock}>
      <BlockTitle text={"projects"}>
        <a href="#" className="arrow">
          View all <span>{"~~ >"}</span>
        </a>
      </BlockTitle>
      <div className={s.projectsBlock__projects}>
        <div className={s.projectsBlock__projects__item}>
          <div className={s.ibg + " " + s.projects__image}>
            <img src="../img/projects-screens/todo1.jpg" alt="project demo" />
          </div>
          <div className={s.project__item__text}>
            <div className={s.technologies}>
              CSS REACTJS REDUX-TOOLKIT TYPESCRIPT
            </div>
            <div className={s.project__info}>
              <h2 className={s.project__name}>Todolist</h2>
              <p className={s.project__description}>
                {
                  "Simple todo list with basic functions: add todo, complete, edit, delete. Also added list of completed todos."
                }
              </p>
              <Button>{"View ->"}</Button>
            </div>
          </div>
        </div>
        <div className={s.projectsBlock__projects__item}>
          <div className={s.ibg + " " + s.projects__image}>
            <img src="../img/projects-screens/todo1.jpg" alt="project demo" />
          </div>
          <div className={s.project__item__text}>
            <div className={s.technologies}>
              REACTJS REDUX-TOOLKIT RTK-QUERY TAILWIND.CSS
            </div>
            <div className={s.project__info}>
              <h2 className={s.project__name}>Market</h2>
              <p className={s.project__description}>
                Market spa with cart, favourites and RTK QUERY based state.
              </p>
              <Button>{"View ->"}</Button>
            </div>
          </div>
        </div>
        <div className={s.projectsBlock__projects__item}>
          <div className={s.ibg + " " + s.projects__image}>
            <img src="../img/projects-screens/todo1.jpg" alt="project demo" />
          </div>
          <div className={s.project__item__text}>
            <div className={s.technologies}>
              REACTJS REDUX-TOOLKIT RTK-QUERY SCSS
            </div>
            <div className={s.project__info}>
              <h2 className={s.project__name}>Pizza store</h2>
              <p className={s.project__description}>
                That project is currently developing.
              </p>
              <Button>{"View ->"}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
