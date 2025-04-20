import React, { lazy, Suspense } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LeftLinks from "./components/LeftLinks/LeftLinks";
import Cursor from "./components/Cursor/Cursor";
import Background from "./components/Background/Background";
import InitialTransition from "./components/InitialTransition/InitialTransition";

// import InitialTransition from "./components/InitialTransitionCSS/InitialTransitionCSS";
import { TopBtn } from "./components/TopBtn/TopBtn";
import { ThemeList } from "./components/ThemeList/ThemeList";
import { AppRoutes } from "./AppRoutes";
import { useTheme } from "./context/ThemeContext/useTheme";
import { useInitialLoad } from "./hooks/useInitialLoad";

// Lazy pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage/ProjectsPage"));
const ProjectInfoPage = lazy(() => import("./pages/ProjectInfoPage/ProjectInfoPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
    const { theme } = useTheme();
    const isReady = useInitialLoad();

    return (
        <div className={`App ${theme}`}>
            {!isReady ? (
                <InitialTransition />
            ) : (
                <>
                    <Cursor />
                    <Header />
                    <ThemeList disableOnMobile />
                    <LeftLinks />
                    <Background />
                    <Suspense fallback={null}>
                        <Routes>
                            <Route index element={<HomePage />} />
                            <Route path={AppRoutes.PROJECTS} element={<ProjectsPage />} />
                            <Route path={`${AppRoutes.PROJECTS}/:projectId`} element={<ProjectInfoPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                    <TopBtn />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
