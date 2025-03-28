import React, {useEffect, useMemo, useState} from "react";
import "./App.scss";
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import {AppRoutes} from "./AppRoutes";
import ProjectInfoPage from "./pages/ProjectInfoPage/ProjectInfoPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import {useTheme} from "./context/ThemeContext/useTheme";
import LeftLinks from "./components/LeftLinks/LeftLinks";
import Cursor from "./components/Cursor/Cursor";
import Background from "./components/Background/Background";
import InitialTransition from "./components/InitialTransition/InitialTransition";
import {useAnimationStore} from "./store/store";
import {TopBtn} from "./components/TopBtn/TopBtn";
import {ThemeList} from "./components/ThemeList/ThemeList";

function App() {
    const {theme: currentTheme} = useTheme();
    const {isMainTransitionEnded} = useAnimationStore();

    useEffect(() => {
        console.log("hello world!")
    }, []);

    return <div className={`App ${currentTheme}`}>
        {!isMainTransitionEnded && <InitialTransition/>}
        <Cursor/>
        <Header/>
        <ThemeList disableOnMobile/>
        <LeftLinks/>
        <Background/>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path={AppRoutes.PROJECTS} element={<ProjectsPage/>}/>
            <Route
                path={AppRoutes.PROJECTS + "/:projectId"}
                element={<ProjectInfoPage/>}
            />
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
        <TopBtn/>
        <Footer/>
    </div>;
}

export default App;
