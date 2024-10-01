import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./context/ThemeContext/ThemeContext";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <SmoothScroll>
                <App/>
            </SmoothScroll>
        </ThemeProvider>
    </BrowserRouter>
);
