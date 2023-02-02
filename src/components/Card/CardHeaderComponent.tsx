import React, { FC } from "react";
import Badge from "../Badge";

interface CardHeaderComponentProps {
  text: string;
}

const CardHeaderComponent: FC<CardHeaderComponentProps> = ({ text }) => {
  return (
    <>
      <h1 className="card__heading">{text}</h1>
      <Badge text="5321" />
    </>
  );
};

export default CardHeaderComponent;
