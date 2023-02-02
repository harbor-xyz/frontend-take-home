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
    <span className={`status__wrapper ${status.toLowerCase()}`}>
      {Icon && <Icon />}
      <span className="status__text">{status}</span>
    </span>
  );
};

export default StatusComponent;