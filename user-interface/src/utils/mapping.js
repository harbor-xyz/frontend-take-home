import { Icons } from './icons';

// Map the testnet status to relevant icon
export const STATUS_ICON_MAP = {
    "RUNNING": Icons.Running,
    "PENDING": Icons.Hourglass,
    "FAILED": Icons.Failed,
    "KILLED": Icons.Killed,
};

// Map the blockchains to their relevant icon
export const BlockchainIconMap = {
    "ethereum": Icons.Ether,
    "polygon": Icons.Polygon,
    "fantom": Icons.Fantom,
    "avalance": Icons.Avalance,
};

// Various sort orders to be applied on testnet status
export const SORT_BY = {
    ASC: 'ascending',
    DESC: 'descending',
    STATUS: 'status',
    DATE_CREATED: 'date_created',
    LAST_MODIFIED: 'last_modified',
}

// Testnet status 
export const TESTNET_STATUS = {
    RUNNING: "RUNNING",
    UPDATING: "UPDATING",
    FAILED: "FAILED",
    KILLED: "KILLED",
}

// Fetch request status
export const FETCH_STATUS = {
    IDLE: 'idle',
    FETCHING: 'fetching',
    FETCHED: 'fetched',
    ERROR: 'error',
}
