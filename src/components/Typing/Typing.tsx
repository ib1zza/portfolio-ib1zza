import s from "./Typing.module.scss";

import { useTypingText } from "../../hooks/useTypingText";
import { useTranslation } from "react-i18next";

const Typing = () => {
  const { t, i18n } = useTranslation();

  const { word } = useTypingText(
    [1, 2, 3].map((n) => t(`me.headingTyping${n}`, { lng: "ru" }))
  );
  const { word: enWord } = useTypingText(
    [1, 2, 3].map((n) => t(`me.headingTyping${n}`, { lng: "en" }))
  );

  const text = i18n.language === "en" ? enWord : word;
  // i18n.language === "en" ? enWord : word
  return (
    <span className={s.word + (text.length !== 0 ? "" : " " + s.empty)}>
      {text}
    </span>
  );
};

export default Typing;
