import React from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";
import s from "./NotFoundPage.module.scss";
const NotFoundPage = () => {
  return (
    <Wrapper>
      <div className={s.container}>
        <h1>404</h1>
        <p>Not Found ;(</p>
        <Button>
          <Link aria-label={'Go to home page'} to={AppRoutes.HOME}>Go to home</Link>
        </Button>
      </div>
    </Wrapper>
  );
};

export default NotFoundPage;
