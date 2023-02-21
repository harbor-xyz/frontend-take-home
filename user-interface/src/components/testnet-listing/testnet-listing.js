import TestnetCard from '../testnet-card/testnet-card';
import PropTypes from 'prop-types';
import { TESTNET_PROPTYPE } from '../../utils/types';

import './testnet-listing.scss';

/**
 * A component that displays a list of testnets using the TestnetCard component.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {Array<Object>} props.testnets - An array of testnet objects to be displayed.
 * @returns {JSX.Element} A list of testnets.
 */
export default function TestnetListing({ testnets }) {
    return <div className="testnet_listing">
        {testnets.map((testnet, index) => <TestnetCard key={index} testnet={testnet} />)}
    </div>
}
TestnetListing.propTypes = {
    testnets: PropTypes.arrayOf(
        PropTypes.shape(TESTNET_PROPTYPE)
    ),
};
