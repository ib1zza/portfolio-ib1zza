import React from "react";
import Projects from "../components/Projects/Projects";
import Wrapper from "../UI/Wrapper/Wrapper";
import Skills from "../components/Skills/Skills";
import Welcome from "../components/Welcome/Welcome";
import Contacts from "../components/Contacts/Contacts";
import BlockWithHoverTitle from "../components/BlockWithHoverTitle/BlockWithHoverTitle";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Welcome />
      <BlockWithHoverTitle title={t("global.projects")} page={<Projects />} />
      {/*<Projects />*/}
      <BlockWithHoverTitle title={t("global.skills")} page={<Skills />} />
      {/*<Skills />*/}
      <BlockWithHoverTitle title={t("global.contacts")} page={<Contacts />} />
      {/*<Contacts />*/}
    </Wrapper>
  );
};

export default HomePage;
