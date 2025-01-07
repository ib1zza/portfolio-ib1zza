import React from "react";
import Projects from "../components/Projects/Projects";
import Wrapper from "../UI/Wrapper/Wrapper";
import Skills from "../components/Skills/Skills";
import Welcome from "../components/Welcome/Welcome";
import Contacts from "../components/Contacts/Contacts";
import BlockWithHoverTitle from "../components/BlockWithHoverTitle/BlockWithHoverTitle";
import {useTranslation} from "react-i18next";
import Education from "../components/Education/Education";
import HeroBackground from "../components/HeroBackground/HeroBackground";


const HomePage = () => {
    const {t} = useTranslation();
    return (
        <>
            <HeroBackground/>
            <Wrapper>
                <Welcome/>
                <BlockWithHoverTitle title={t("global.projects")} page={<Projects/>}/>
                <BlockWithHoverTitle title={t("global.skills")} page={<Skills/>}/>
                <BlockWithHoverTitle title={t("global.education")} page={<Education/>}/>
                <BlockWithHoverTitle title={t("global.contacts")} page={<Contacts/>}/>
            </Wrapper>
        </>
    );
};

export default HomePage;
