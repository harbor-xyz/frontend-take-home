import React from "react";
import "./style.scss";
import { ICONS } from "../../constants/icon-constants";

const Sidebar = () => {
  return (
    <aside className="sidebar--wrapper">
      <nav className="sidebar--navigation">
        <span className="navigation__icon">
          <ICONS.BackIcon />
        </span>
        <span className="navigation__text">Back to all projects</span>
      </nav>
    </aside>
  );
};

export default Sidebar;
