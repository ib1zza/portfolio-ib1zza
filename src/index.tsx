import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter, HashRouter} from "react-router-dom";
import ThemeProvider from "./context/ThemeContext/ThemeContext";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <HashRouter>
        <ThemeProvider>
            <SmoothScroll>
                <App/>
            </SmoothScroll>
        </ThemeProvider>
    </HashRouter>
);
