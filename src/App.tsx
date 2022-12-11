import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={AppRoutes.PROJECTS} element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
