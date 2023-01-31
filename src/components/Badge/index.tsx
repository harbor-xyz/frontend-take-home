import React, { FC } from "react";
import "./style.scss";

interface BadgeProps {
  text: string;
}
const Badge: FC<BadgeProps> = ({ text }) => {
  return <div className="badge--wrapper">{text}</div>;
};

export default Badge;
