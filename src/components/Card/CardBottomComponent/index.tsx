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

const CardBottomComponent: FC<CardBottomComponentProps> = ({
  chainActors,
  chains,
}) => {
  const chainActorUpdatingCount = chainActors.reduce((a, e) => {
    if (e.status === Status.UPDATING) {
      a++;
    }
    return a;
  }, 0);
  const blockchainUpdatingCount = chains.reduce((a, e) => {
    if (e.state === Status.UPDATING) {
      a++;
    }
    return a;
  }, 0);
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
    <div className="bottom--wrapper">
      {chainActorComponent}
      <Separator />
      {blockchainComponent}
    </div>
  );
};

export default CardBottomComponent;
