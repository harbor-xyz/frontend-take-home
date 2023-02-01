import React, { FC } from "react";
import Separator from "../Seperator";
import { TestNetChainActors, TestNetsChains } from "../../typings/models.d";

interface DescriptionListComponentProps {
  chains: TestNetsChains[];
  chainActors: TestNetChainActors[];
}

const DescriptionListComponent: FC<DescriptionListComponentProps> = ({
  chains,
  chainActors,
}) => {
  return (
    <div className="card__description-list">
      <span className="chain__actors">
        {chainActors.length} off-chain actor{chainActors.length > 1 ? "s" : ""}
      </span>
      <Separator />
      <span className="chain__names">
        {chains.length} Blockchain{chains.length > 1 ? "s" : ""}
      </span>
    </div>
  );
};

export default DescriptionListComponent;
