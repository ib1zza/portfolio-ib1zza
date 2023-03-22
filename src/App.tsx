import React, { useEffect } from "react";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import { AppRoutes } from "./AppRoutes";
import ProjectInfoPage from "./pages/ProjectInfoPage/ProjectInfoPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MyFavouriteMemes from "./pages/MyFavouriteMemes/MyFavouriteMemes";
import ContactForm from "./pages/ContactForm/ContactForm";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={AppRoutes.PROJECTS} element={<ProjectsPage />} />
        <Route
          path={AppRoutes.PROJECTS + "/:projectId"}
          element={<ProjectInfoPage />}
        />
        <Route path={AppRoutes.FORM} element={<ContactForm />} />
        <Route path={AppRoutes.MEMES} element={<MyFavouriteMemes />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
