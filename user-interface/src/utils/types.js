import PropTypes from 'prop-types';

export const TESTNET_PROPTYPE = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    endpoint: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    testnet_off_chain_actors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            __typename: PropTypes.string.isRequired
        })
    ).isRequired,
    testnet_chains: PropTypes.arrayOf(
        PropTypes.shape({
            chain: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            __typename: PropTypes.string.isRequired
        })
    ).isRequired,
    testnet_image: PropTypes.shape({
        project_id: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        __typename: PropTypes.string.isRequired
    }).isRequired,
    __typename: PropTypes.string.isRequired
};
