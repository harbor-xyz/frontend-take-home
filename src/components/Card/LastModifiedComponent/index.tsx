import React, { FC } from "react";
import { ICONS } from "../../../constants/icon-constants";
import "./styles.scss";
import { formatDistance } from "date-fns";

interface LastModifiedComponentProps {
  lastModified: string;
}

const LastModifiedComponent: FC<LastModifiedComponentProps> = ({
  lastModified,
}) => {
  const lastModifiedDate = formatDistance(new Date(lastModified), new Date(), {
    addSuffix: true,
  });
  return (
    <span className="lastmodified--wrapper">
      <ICONS.LastModifiedIcon />
      <span className="lastmodified__text">Modified {lastModifiedDate}</span>
    </span>
  );
};

export default LastModifiedComponent;
