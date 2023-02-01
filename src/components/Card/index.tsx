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
import CardBottomComponent from "./CardBottomComponent";

const Card = () => {
  const chains = [
    { chain: BlockChains.ALCHEMY, state: Status.UPDATING },
    { chain: BlockChains.POLYGON, state: Status.RUNNING },
    { chain: BlockChains.ARBITRUM, state: Status.UPDATING },
  ];
  const chainActors = [
    {
      name: "routerCache",
      status: Status.RUNNING,
    },
    {
      name: "ipfs",
      status: Status.UPDATING,
    },
    {
      name: "sequencerCache",
      status: Status.CLONING,
    },
  ];
  return (
    <div className="card--wrapper killed">
      <div className="card--top-section">
        <div className="card--left-section">
          <div className="card--left-top-section">
            <CardHeaderComponent />
          </div>
          <div className="card--left-bottom-section">
            <DescriptionListComponent
              chains={chains}
              chainActors={chainActors}
            />
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
      <div className="card--bottom-section">
        <CardBottomComponent chains={chains} chainActors={chainActors} />
      </div>
    </div>
  );
};

export default Card;
