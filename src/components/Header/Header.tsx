import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import s from "./Header.module.scss";
import Wrapper from "../../UI/Wrapper/Wrapper";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../UI/Button/Button";
import Burger from "../../UI/Burger/Burger";

const Header = () => {
  const [burger, setBurger] = useState(false);

  return (
    <Wrapper>
      <header className={s.header}>
        <div className={s.header__logo}>
          <div className={s.header__logo__reactContainer}>
            <motion.div
              className={s.react}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                ease: "linear",
                repeatType: "loop",
                repeat: Infinity,
              }}
            >
              <FontAwesomeIcon icon={faReact} />{" "}
            </motion.div>
          </div>
          <span>ib1zza</span>
        </div>
        <Burger onChange={setBurger} flag={burger} />
        <div className={s.header__links}>
          <a href="#">home</a>
          <a href="projects.html">works</a>
          <a href="#">about-me</a>
          <a href="#">contacts</a>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
