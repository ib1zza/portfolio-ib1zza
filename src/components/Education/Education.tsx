import React, { useEffect, useMemo } from "react";
import diplomaEn from "../../assets/img/topDiploma/en.png";
import diplomaRu from "../../assets/img/topDiploma/ru.png";
import { useTranslation } from "react-i18next";
import HoverSkew from "../HoverSkew/HoverSkew";

const Education = () => {
  const { i18n } = useTranslation();

  const language = i18n.resolvedLanguage;

  const currentImage = useMemo(() => {
    return i18n.resolvedLanguage === "ru" ? diplomaRu : diplomaEn;
  }, [language]);

  return (
    <div>
      <HoverSkew>
        <img src={currentImage} alt="diploma" />
      </HoverSkew>
    </div>
  );
};

export default Education;
