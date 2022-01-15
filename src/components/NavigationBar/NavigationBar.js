import React from "react";
import "../../scss/NavigationBar/NavigationBar.scss";
import NavigationTop from "./NavigationTop";
import Menu from "./Menu";

export default function NavigationBar() {
  return (
    <div className="NavBar">
      <div className="MainBar">
        <div className="MainBar_nav">
          <NavigationTop />
          <Menu />
        </div>
      </div>
    </div>
  );
}
