import React, { FC } from "react";
import { ICON_MAPPING } from "../../../constants/common";
import { Status } from "../../../typings/models";
import "./styles.scss";

interface StatusComponentProps {
  status: Status;
}

const StatusComponent: FC<StatusComponentProps> = ({ status }) => {
  const Icon = ICON_MAPPING?.[status] ?? null;
  return (
    <span className={`status__wrapper ${status}`}>
      <Icon />
      <span className="status__text">Running</span>
    </span>
  );
};

export default StatusComponent;
