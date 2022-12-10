import React from "react";
import Projects from "../components/Projects/Projects";
import Wrapper from "../UI/Wrapper/Wrapper";
import Skills from "../components/Skills/Skills";
import Welcome from "../components/Welcome/Welcome";
import Contacts from "../components/Contacts/Contacts";

const HomePage = () => {
  return (
    <Wrapper>
      <Welcome />
      <Projects />
      <Skills />
      <Contacts />
    </Wrapper>
  );
};

export default HomePage;
