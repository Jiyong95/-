import React from "react";
import "../../scss/NavigationBar/NavigationBar.scss";
import NavigationTop from "./NavigationTop";
import Menu from "./Menu";
import menuData from "./MenuData";
import Aside from "./Aside";

export default function NavigationBar() {
  return (
    <>
      <div className="NavBar">
        <div className="MainBar">
          <div className="MainBar_nav">
            <NavigationTop />
            <Menu data={menuData} />
            <Aside />
          </div>
        </div>
      </div>
      <div className="padding"></div>
    </>
  );
}
