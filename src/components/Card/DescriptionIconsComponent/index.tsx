import React, { FC } from "react";
import { TestNetsChains } from "../../../typings/models.d";
import { CHAIN_MAPPING } from "../../../constants/common";

interface DescriptionIconsComponentProps {
  chains: TestNetsChains[];
}
const DescriptionIconsComponent: FC<DescriptionIconsComponentProps> = ({
  chains,
}) => {
  if (!chains.length) return null;

  return (
    <div className="card__description-icons">
      {chains.map(({ chain }) => (
        <span className="chain__icon" key={chain}>
          <img src={CHAIN_MAPPING[chain]} alt="block chain" />
        </span>
      ))}
    </div>
  );
};

export default DescriptionIconsComponent;
