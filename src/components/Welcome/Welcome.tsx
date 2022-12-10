import React from "react";
import s from "./Welcome.module.scss";
import Button from "../../UI/Button/Button";
import photo from "../../assets/img/im.jpg";
const Welcome = () => {
  return (
    <div className={s.welcomeBlock}>
      <div className={s.welcomeBlock__text}>
        <h1>Mikhail is a web designer and front-end developer</h1>
        <p>He crafts responsive websites where technologies meet creativity</p>
        <Button>Contact me!!</Button>
      </div>

      <div className={s.welcomeBlock__photo}>
        <img src={photo} alt="asd" />
      </div>
    </div>
  );
};

export default Welcome;
