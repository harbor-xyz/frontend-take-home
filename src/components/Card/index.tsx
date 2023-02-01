import React from "react";
import "./style.scss";
import Separator from "../Seperator";
import StatusComponent from "./StatusComponent";
import SettingsComponent from "./SettingsComponent";
import LastModifiedComponent from "./LastModifiedComponent";
import DescriptionListComponent from "./DescriptionListComponent";
import DescriptionIconsComponent from "./DescriptionIconsComponent";
import CardHeaderComponent from "./CardHeaderComponent";
import { BlockChains, Status } from "../../typings/models.d";

const Card = () => {
  const chains = [
    { chain: BlockChains.ALCHEMY, state: Status.RUNNING },
    { chain: BlockChains.POLYGON, state: Status.RUNNING },
    { chain: BlockChains.ARBITRUM, state: Status.RUNNING },
  ];
  const chainActors = [
    {
      name: "routerCache",
      status: Status.RUNNING,
    },
    {
      name: "ipfs",
      status: Status.RUNNING,
    },
    {
      name: "sequencerCache",
      status: Status.RUNNING,
    },
  ];
  return (
    <div className="card--wrapper killed">
      <div className="card--left-section">
        <div className="card--left-top-section">
          <CardHeaderComponent />
        </div>
        <div className="card--left-bottom-section">
          <DescriptionListComponent chains={chains} chainActors={chainActors} />
          <DescriptionIconsComponent chains={chains} />
        </div>
      </div>
      <div className="card--right-section">
        <div className="card--right-top-section">
          <StatusComponent status={Status.RUNNING} />
          <Separator />
          <SettingsComponent status={Status.STANDING} />
        </div>
        <div className="card--right-bottom-section">
          <LastModifiedComponent />
        </div>
      </div>
    </div>
  );
};

export default Card;
