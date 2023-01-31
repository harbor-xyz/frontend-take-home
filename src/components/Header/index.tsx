import React from "react";
import "./styles.scss";
import { ICONS } from "../../constants/icon-constants";

const Header = () => {
  return (
    <div className="header--wrapper">
      <div className="header--left-section">
        <span className="header__logo">
          <img src={ICONS.HarborLogo} alt="harbor logo" />
        </span>
        <span className="header__left-text">
          <span className="header-left__icon">
            <ICONS.DocsIcon />
            <span className="icon__text">Docs</span>
          </span>
          <span className="header-left__icon">
            <ICONS.CommandSheetIcon />
            <span className="icon__text">Command cheatsheet</span>
          </span>
        </span>
      </div>
      <div className="header--right-section">
        <span className="header-right__icon">
          <ICONS.UserKeyIcon />
          <span className="icon__text">Your user key</span>
        </span>
        <span className="header-right__profile">
          <span className="header-right__profile-icon"></span>
          <ICONS.ArrowDown />
        </span>
      </div>
    </div>
  );
};

export default Header;
