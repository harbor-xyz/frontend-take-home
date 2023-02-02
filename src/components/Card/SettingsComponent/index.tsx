import React, { FC } from "react";
import { ICONS } from "../../../constants/icon-constants";
import "./style.scss";
import { Status } from "../../../typings/models.d";

interface SettingsProps {
  status: Status;
}

const SettingsComponent: FC<SettingsProps> = ({ status }) => {
  return (
    <span className={`settings--wrapper ${status.toLowerCase()}`}>
      <ICONS.SettingsIcon />
      <span className="settings__text">Settings</span>
    </span>
  );
};

export default SettingsComponent;
