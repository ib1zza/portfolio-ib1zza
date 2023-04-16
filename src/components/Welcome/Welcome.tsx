import React from "react";
import s from "./Welcome.module.scss";
import Button from "../../UI/Button/Button";
import photo from "../../assets/img/im.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const button = {
  open: {
    borderRadius: "20%",
    // scale: 1.4,

    transition: {
      type: "spring",
      duration: 1,
    },
  },
  closed: {},
};

const Welcome = () => {
  return (
    <div className={s.welcomeBlock}>
      <div className={s.welcomeBlock__text}>
        <h1>Mikhail is a web designer and front-end developer</h1>
        <p>He crafts responsive websites where technologies meet creativity</p>
        <Link to={"contacts"} smooth={true} offset={-70} duration={500}>
          <Button>Contact me!!</Button>
        </Link>
      </div>

      <motion.div
        variants={button}
        whileHover={"open"}
        className={s.welcomeBlock__photo}
      >
        <img src={photo} alt="asd" />
      </motion.div>
    </div>
  );
};

export default Welcome;
