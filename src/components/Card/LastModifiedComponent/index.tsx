import React from "react";
import { ICONS } from "../../../constants/icon-constants";
import "./styles.scss";

const LastModifiedComponent = () => {
  return (
    <span className="lastmmodified--wrapper">
      <ICONS.LastModifiedIcon />
      <span className="lastmmodified__text">Modified 2 mins ago</span>
    </span>
  );
};

export default LastModifiedComponent;
