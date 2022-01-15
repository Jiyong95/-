import React from "react";
import "../../scss/NavigationBar/NavigationTop.scss";

export default function NavigationTop() {
  return (
    <div className="MainBar_nav_top">
      <div className="MainBar_nav_top_logo">
        <button className="MainBar_hamberger">
          <img
            src="https://static.wanted.co.kr/images/icon-menu.png"
            alt="hamberger menu"
          />
        </button>
        <a href="/" className="MainBar_logo">
          <img src="https://www.wantedlab.com/img/logo.png" alt="wanted logo" />
        </a>
      </div>
    </div>
  );
}
