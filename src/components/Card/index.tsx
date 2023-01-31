import React from "react";
import Badge from "../Badge";
import "./style.scss";
import Separator from "../Seperator";
import { ICONS } from "../../constants/icon-constants";

const Card = () => {
  return (
    <div className="card--wrapper">
      <div className="card--left-section">
        <div className="card--left-top-section">
          <h1 className="card__heading">Santost Testnet</h1>
          <Badge text="5321" />
        </div>
        <div className="card--left-bottom-section">
          <div className="card__description-list">
            <span className="chain__actors">1 off-chain actors</span>
            <Separator />
            <span className="chain__names">1 Blockchain</span>
          </div>
          <div className="card__description-icons">
            <span className="chain__icon">
              <img src={ICONS.EthreumLogo} alt="block chain" />
            </span>
            <span className="chain__icon">
              <img src={ICONS.OptimismLogo} alt="block chain" />
            </span>
            <span className="chain__icon">
              <img src={ICONS.PolygonLogo} alt="block chain" />
            </span>
            <span className="chain__icon">
              <img src={ICONS.AlchemyLogo} alt="block chain" />
            </span>
            <span className="chain__icon">
              <img src={ICONS.ArbitrumLogo} alt="block chain" />
            </span>
          </div>
        </div>
      </div>
      <div className="card--right-section">
        <div className="card--right-top-section">
          <span className="card-right__icon">
            <ICONS.FailedIcon />
            <span className="icon__text">Running</span>
          </span>
          <Separator />
          <span className="card-right__icon">
            <ICONS.SettingsIcon />
            <span className="icon__text">Settings</span>
          </span>
        </div>
        <div className="card--right-bottom-section">
          <span className="card-right__icon">
            <ICONS.TimeIcon />
            <span className="icon__text">Modified 2 mins ago</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
