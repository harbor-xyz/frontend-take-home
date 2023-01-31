import React, { FC } from "react";
import "./style.scss";

interface SeparatorProps {
  size?: string;
}
const Separator: FC<SeparatorProps> = ({ size }) => {
  const style = size
    ? {
        height: `${size}px`,
        width: `${size}px`,
      }
    : {};
  return <span style={style} className="separator--wrapper" />;
};

export default Separator;
