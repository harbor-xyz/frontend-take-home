import React from 'react';
import { Icons } from '../../utils/icons';

import './testnet-card.scss';

export default function TestnetCard() {
    return <div className="testnet_card">
        <div className="testnet_card__left_side_content">
            <div>
                <span className="testnet_card__name">Testnet Dummy</span>
                {/* The count shown below is harcoded for every card, couldn't find relevant field in the API payload */}
                <span className="testnet_card__count">5321</span>
            </div>
            <div>
                <span className="testnet_card__off_chain_actors_count">2 off-chain actors</span>
                <img src={Icons.Dot} alt="information seprator" />
                <span className="testnet_card__blockchain_count">2 Blockchains</span>
                <img src={Icons.Polygon} alt="information seprator" />
            </div>
            <div>
                <div className="testnet_card__off_chain_status">
                    <img src={Icons.Hourglass} alt="Hourglass" />
                    <span>2 off-chain updating</span>
                </div>
                <React.Fragment>
                    <img src={Icons.Dot} alt="information seprator" />
                    <div className="testnet_card__blockchain_status">
                        <img src={Icons.Hourglass} alt="Hourglass" />
                        <span>Blockchain updating</span>
                    </div>
                </React.Fragment>
            </div>
        </div>
        <div className="testnet_card__right_side_content">
            <div>
                <div className="testnet_card__status">
                    <img src={Icons.Running} alt="Hourglass" />
                    <span>RUNNING</span>
                </div>
                <img src={Icons.Dot} alt="information seprator" />
                <div className="testnet_card__settings">
                    <img src={Icons.Settings} alt="Hourglass" />
                    <span>Settings</span>
                </div>
            </div>
            <div>
                <div className="testnet_card__last_modified_on">
                    <img src={Icons.Timer} alt="Hourglass" />
                    <span>Modified 5 hours ago</span>
                </div>
            </div>
        </div>
    </div>
}