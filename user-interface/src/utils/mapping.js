import { Icons } from './icons';

export const STATUS_ICON_MAP = {
    "RUNNING": Icons.Running,
    "PENDING": Icons.Hourglass,
    "FAILED": Icons.Failed,
    "KILLED": Icons.Killed,
};

export const BlockchainIconMap = {
    "ethereum": Icons.Ether,
    "polygon": Icons.Polygon,
    "fantom": Icons.Fantom,
    "avalance": Icons.Avalance,
};

export const SORT_BY = {
    ASC: 'ascending',
    DESC: 'descending',
    STATUS: 'status',
    DATE_CREATED: 'date_created',
    LAST_MODIFIED: 'last_modified',
}

export const TESTNET_STATUS = {
    RUNNING: "RUNNING",
    UPDATING: "UPDATING",
    FAILED: "FAILED",
    KILLED: "KILLED",
}
