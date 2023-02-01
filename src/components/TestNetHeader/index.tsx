import React from "react";
import "./style.scss";
import { ICONS } from "../../constants/icon-constants";
import Filter from "../Filter";
import Separator from "../Seperator";
import Sorter from "../Sorter";

const TestNetHeader = () => {
  return (
    <div className="testnet--header--wrapper">
      <div className="header__left-section">
        <h1>Testnets (8)</h1>
        <button className="testnet__add-btn">
          <ICONS.AddIcon />
          New Testnet
        </button>
      </div>
      <div className="header__right-section">
        <Filter />
        <Separator />
        <Sorter />
      </div>
    </div>
  );
};

export default TestNetHeader;
