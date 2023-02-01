import React, { FC, ReactElement } from "react";
import Badge from "../../Badge";
import "./style.scss";

interface TabItemProps {
  icon: ReactElement;
  heading: string;
  badgeText?: string;
  isSelected?: boolean;
  rightIcon: ReactElement;
  id: string;
}
const TabItem: FC<TabItemProps> = ({
  icon,
  heading,
  badgeText,
  isSelected,
  rightIcon,
}) => {
  return (
    <div className={`tab__item ${isSelected ? "selected" : ""}`}>
      <div className="tab__item__left">
        {icon}
        {heading}
        {badgeText && <Badge text={badgeText} />}
      </div>
      <div className="tab__item__right">{rightIcon}</div>
    </div>
  );
};

export default TabItem;
