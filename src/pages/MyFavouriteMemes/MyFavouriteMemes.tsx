import React from "react";
import s from "./MyFavouriteMemes.module.scss";
import Wrapper from "../../UI/Wrapper/Wrapper";
const MyFavouriteMemes = () => {
  return (
    <Wrapper>
      <h1 className={s.heading}>My favourite memes only!</h1>
      <div className={s.wrapper}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oHg5SJYRHA0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </Wrapper>
  );
};

export default MyFavouriteMemes;
