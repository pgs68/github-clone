import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme.ts";

import Header from "./components/Header/Header"
import Home from "./components/Home/Home";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <div>
            <Header />
            <Home />
        </div>
    </ThemeProvider>, 
    document.getElementById("app")
);