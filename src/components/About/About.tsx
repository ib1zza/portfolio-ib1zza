import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";
import s from "./About.module.scss";
import Button from "../../UI/Button/Button";
const About = () => {
  return (
    <div className={s.aboutBlock}>
      <BlockTitle text={"about-me"} />

      <div className={s.aboutBlock__text}>
        <p>
          Hello, i’m Mikhail! I am developing web applications using the latest
          tools, I like to learn new things in programming, create interesting
          projects and learn different tools for web development!
        </p>
        <Button>{"Read more ->"}</Button>
      </div>
    </div>
  );
};

export default About;
