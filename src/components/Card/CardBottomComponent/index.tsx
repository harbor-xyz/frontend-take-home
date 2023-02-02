import React, { FC } from "react";
import {
  Status,
  TestNetChainActors,
  TestNetsChains,
} from "../../../typings/models.d";
import { ICONS } from "../../../constants/icon-constants";
import Separator from "../../Seperator";
import "./style.scss";

interface CardBottomComponentProps {
  chains: TestNetsChains[];
  chainActors: TestNetChainActors[];
}
type ChainList = TestNetsChains | TestNetChainActors;

const CardBottomComponent: FC<CardBottomComponentProps> = ({
  chainActors,
  chains,
}) => {
  const chainActorUpdatingCount = getCount(chainActors);
  const blockchainUpdatingCount = getCount(chains);
  if (chainActorUpdatingCount === 0 && blockchainUpdatingCount === 0)
    return null;
  const chainActorComponent = (
    <span className="bottom__item">
      <ICONS.StandingUpIcon />
      {chainActorUpdatingCount} off-chain updating
    </span>
  );
  const blockchainComponent = (
    <span className="bottom__item">
      <ICONS.StandingUpIcon />
      {blockchainUpdatingCount} Blockchain
      {blockchainUpdatingCount > 1 ? "s" : ""} udpating
    </span>
  );
  return (
    <div className="card--bottom-section">
      <div className="bottom--wrapper">
        {chainActorComponent}
        <Separator />
        {blockchainComponent}
      </div>
    </div>
  );
};

function getCount(list: any): number {
  const count = list.reduce((a: number, e: ChainList) => {
    if (
      e.status === Status.UPDATING ||
      e.status === Status.PENDING ||
      e.status === Status.STANDING
    ) {
      a++;
    }
    return a;
  }, 0);
  return count;
}

export default CardBottomComponent;
