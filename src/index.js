import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";

ReactDOM.render(
    <div>
        <Header />
        <Home />
    </div>, 
    document.getElementById("app")
);