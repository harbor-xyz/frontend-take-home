import React, { FC } from "react";
import { ICONS } from "../../../constants/icon-constants";
import "./styles.scss";

interface LastModifiedComponentProps {
  lastModified: string;
}

const LastModifiedComponent: FC<LastModifiedComponentProps> = ({
  lastModified,
}) => {
  return (
    <span className="lastmmodified--wrapper">
      <ICONS.LastModifiedIcon />
      <span className="lastmmodified__text">{lastModified}</span>
    </span>
  );
};

export default LastModifiedComponent;
