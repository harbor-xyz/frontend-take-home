import TestnetCard from '../testnet-card/testnet-card';

import './testnet-listing.scss';

export default function TestnetListing({ testnets }) {
    return <div className="testnet_listing">
        <TestnetCard />
        <TestnetCard />
    </div>
}
