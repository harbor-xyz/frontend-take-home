import React, { FC } from "react";
import "./style.scss";
import Separator from "../Seperator";
import StatusComponent from "./StatusComponent";
import SettingsComponent from "./SettingsComponent";
import LastModifiedComponent from "./LastModifiedComponent";
import DescriptionListComponent from "./DescriptionListComponent";
import DescriptionIconsComponent from "./DescriptionIconsComponent";
import CardHeaderComponent from "./CardHeaderComponent";
import CardBottomComponent from "./CardBottomComponent";
import { TestNet } from "../../store/models/testnets.d";

interface CardProps {
  data: TestNet;
}

const Card: FC<CardProps> = ({ data }) => {
  const { testnet_chains, testnet_off_chain_actors, status, name, updated_at } =
    data;
  return (
    <div className={`card--wrapper ${status.toLocaleLowerCase()}`}>
      <div className="card--top-section">
        <div className="card--left-section">
          <div className="card--left-top-section">
            <CardHeaderComponent text={name} />
          </div>
          <div className="card--left-bottom-section">
            <DescriptionListComponent
              chains={testnet_chains}
              chainActors={testnet_off_chain_actors}
            />
            <DescriptionIconsComponent chains={testnet_chains} />
          </div>
        </div>
        <div className="card--right-section">
          <div className="card--right-top-section">
            <StatusComponent status={status} />
            <Separator />
            <SettingsComponent status={status} />
          </div>
          <div className="card--right-bottom-section">
            <LastModifiedComponent lastModified={updated_at} />
          </div>
        </div>
      </div>
      <CardBottomComponent
        chains={testnet_chains}
        chainActors={testnet_off_chain_actors}
      />
    </div>
  );
};

export default Card;
