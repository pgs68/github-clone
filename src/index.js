import React from "react";
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme.ts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Repository from "./components/Repository/Repository";

const container = document.getElementById("app")
const root = createRoot(container)

root.render(
    <Router> 
        <ThemeProvider theme={theme}>
            <Header />
            <div id="pages">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/repository" element={<Repository />}>
                    </Route>
                </Routes>
            </div>
        </ThemeProvider>
    </Router>  
);