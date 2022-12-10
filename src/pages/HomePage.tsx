import React from "react";
import Projects from "../components/Projects/Projects";
import Wrapper from "../UI/Wrapper/Wrapper";
import Skills from "../components/Skills/Skills";
import Welcome from "../components/Welcome/Welcome";
import Contacts from "../components/Contacts/Contacts";
import About from "../components/About/About";

const HomePage = () => {
  return (
    <Wrapper>
      <Welcome />

      <Projects />

      <Skills />

      {/*<About />*/}

      <Contacts />
    </Wrapper>
  );
};

export default HomePage;
