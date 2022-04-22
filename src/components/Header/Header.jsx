import React from "react";

import './style.css'

const Header = () => {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          document.getElementById("header").style.fontSize = "30px";
          document.getElementById("header").style.textAlign = "left";
          document.getElementById("header").style.paddingTop = "15px";
          document.getElementById("header").style.paddingBottom = "15px";
        } else {
          document.getElementById("header").style.fontSize = "80px";
          document.getElementById("header").style.textAlign = "center";
          document.getElementById("header").style.paddingTop = "50px";
          document.getElementById("header").style.paddingBottom = "50px";
        }
      }

    return (
        <div id="header">
            GITHUB CLONE
        </div>
    )
};

export default Header;