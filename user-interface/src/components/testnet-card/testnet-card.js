import React from 'react';
import { Icons } from '../../utils/icons';
import { map } from 'lodash';
import { BlockchainIconMap, STATUS_ICON_MAP } from '../../utils/mapping';
import BlockchainIconArray from '../icon-array/blockchain-icon-array';
import moment from 'moment';
import PropTypes from 'prop-types';
import { TESTNET_PROPTYPE } from '../../utils/types';
import { TESTNET_STATUS } from '../../utils/mapping';

import './testnet-card.scss';

/**
 * A card component for displaying information about a testnet.
 * @param {Object} props - The props for the component.
 * @param {Object} props.testnet - The testnet data to be displayed in the card.
 */
export default function TestnetCard({ testnet }) {
    const { testnet_off_chain_actors: testnetOffChainActors, testnet_chains: testnetChains, name, status } = testnet;

    const BlochchainIconArray = map(testnetChains, (testnetChain) => BlockchainIconMap[testnetChain.chain])

    const isBlockchainUpdating = testnetChains.find((chain) => chain.status === TESTNET_STATUS.UPDATING);

    const offChainUpdatingCount = testnetOffChainActors.filter((chain) => chain.status === TESTNET_STATUS.UPDATING).length;

    return <div className={`testnet_card ${testnet.status === TESTNET_STATUS.FAILED ? 'testnet_card--failed' : ''} ${testnet.status === TESTNET_STATUS.KILLED ? 'testnet_card--killed' : ''}`}>
        <div className="testnet_card__left_side_content">
            <div>
                <span className="testnet_card__name">{name}</span>
                {/* The count shown below is harcoded for every card, couldn't find relevant field in the API payload */}
                <span className="testnet_card__count">5321</span>
            </div>
            <div>
                <span className="testnet_card__off_chain_actors_count">{testnetOffChainActors.length} off-chain actors</span>
                {testnetChains.length > 0 && <img src={Icons.Dot} alt="information seprator" />}
                {testnetChains.length > 0 && <span className="testnet_card__blockchain_count">{`${testnetChains.length} Blockchain${testnetChains.length > 1 ? 's' : ''}`}</span>}
                {testnetChains.length > 0 && <BlockchainIconArray icons={BlochchainIconArray} />}
            </div>
            {(offChainUpdatingCount > 0 || isBlockchainUpdating) && <div>
                {offChainUpdatingCount > 0 && <div className="testnet_card__off_chain_status">
                    <img src={Icons.Hourglass} alt="Hourglass" />
                    <span>{offChainUpdatingCount} off-chain updating</span>
                </div>}
                {isBlockchainUpdating && <React.Fragment>
                    <img src={Icons.Dot} alt="information seprator" />
                    <div className="testnet_card__blockchain_status">
                        <img src={Icons.Hourglass} alt="Hourglass" />
                        <span>Blockchain updating</span>
                    </div>
                </React.Fragment>}
            </div>}
        </div>
        <div className="testnet_card__right_side_content">
            <div>
                <div className="testnet_card__status">
                    <img src={STATUS_ICON_MAP[status]} alt="Hourglass" />
                    <span>{status}</span>
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
                    <span>Modified {moment(testnet.updated_at).fromNow()}</span>
                </div>
            </div>
        </div>
    </div>
}

TestnetCard.propTypes = {
    testnet: PropTypes.shape(TESTNET_PROPTYPE)
};
