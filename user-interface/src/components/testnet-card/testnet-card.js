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
function TestnetCard({ testnet }) {
    const { testnet_off_chain_actors: testnetOffChainActors, testnet_chains: testnetChains, name, status } = testnet;

    // Get icons array for the all the chains in this testnet
    const BlochchainIconArray = map(testnetChains, (testnetChain) => BlockchainIconMap[testnetChain.chain])

    // check if the chain in this testnet is updating
    const isBlockchainUpdating = testnetChains.find((chain) => chain.status === TESTNET_STATUS.UPDATING);

    // count the number of chains in updating status in this testnet
    const offChainUpdatingCount = testnetOffChainActors.filter((chain) => chain.status === TESTNET_STATUS.UPDATING).length;

    return <div className={`testnet_card ${'testnet_card--'}${status.toLowerCase()}`}>

        {/* The left side contains the name of the testnet, the number of off-chain actors, 
        the number of blockchains, and their corresponding icons. 
        The left side also displays information about any off-chain actors or blockchains that are currently updating. */}
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

        {/* The right side contains information about the status of the testnet, 
        a link to its settings, and the date/time it was last modified. */}
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

export default React.memo(TestnetCard);
