import React, { FC, ReactElement } from "react";
import "./styles.scss";
import { Status } from "../../typings/models.d";

interface SorterAndFilterItemProps {
  icon?: ReactElement;
  text: string;
  state?: Status | "all";
}

const SorterAndFilterItem: FC<SorterAndFilterItemProps> = ({
  icon,
  text,
  state,
}) => {
  return (
    <div className={`filter-item--wrapper ${state || ""}`}>
      {icon && <span className="filter-icon">{icon}</span>}
      <span className={`filter-item__text`}>{text}</span>
    </div>
  );
};

export default SorterAndFilterItem;
