import { ICONS } from "./icon-constants";
import { BlockChains, Sorters, Status } from "./../typings/models.d";
import { SortingOrder } from "../store/models/testnets.d";

export const ICON_MAPPING = {
  [Status.RUNNING]: ICONS.TickInCircleIcon,
  [Status.STANDING]: ICONS.StandingUpIcon,
  [Status.UPDATING]: ICONS.StandingUpIcon,
  [Status.FAILED]: ICONS.FailedIcon,
  [Status.KILLED]: ICONS.KilledIcon,
  [Status.STOPPED]: ICONS.KilledIcon,
  [Status.CLONING]: ICONS.CloneIcon,
  [Status.PENDING]: ICONS.StandingUpIcon,
};

export const CHAIN_MAPPING = {
  [BlockChains.ALCHEMY]: ICONS.AlchemyLogo,
  [BlockChains.ETHEREUM]: ICONS.EthreumLogo,
  [BlockChains.OPTIMISM]: ICONS.OptimismLogo,
  [BlockChains.ARBITRUM]: ICONS.ArbitrumLogo,
  [BlockChains.POLYGON]: ICONS.PolygonLogo,
};

export const SorterList = [
  {
    name: "Name A-Z",
    order: SortingOrder.ASC,
    id: `${Sorters.NAME}:${SortingOrder.ASC}`,
  },
  {
    name: "Name Z-A",
    order: SortingOrder.DESC,
    id: `${Sorters.NAME}:${SortingOrder.DESC}`,
  },
  {
    name: "Status",
    order: SortingOrder.ASC,
    id: `${Sorters.STATUS}:${SortingOrder.ASC}`,
  },
  {
    name: "Date Created",
    order: SortingOrder.ASC,
    id: `${Sorters.CREATED}:${SortingOrder.ASC}`,
  },
  {
    name: "Last Modified",
    order: SortingOrder.DESC,
    id: `${Sorters.UPDATED}:${SortingOrder.DESC}`,
  },
];

export const FilterList: {
  text: string;
  icon: any;
  state: Status | "all";
  id: Status | "all";
}[] = [
  {
    text: "All",
    icon: ICONS.AllStatusIcon,
    state: "all",
    id: "all",
  },
  {
    text: "Running",
    icon: ICONS.TickInCircleIcon,
    state: Status.RUNNING,
    id: Status.RUNNING,
  },
  {
    text: "Standing up",
    icon: ICONS.StandingUpIcon,
    state: Status.STANDING,
    id: Status.STANDING,
  },
  {
    text: "Updating",
    icon: ICONS.StandingUpIcon,
    state: Status.UPDATING,
    id: Status.UPDATING,
  },
  {
    text: "Pending",
    icon: ICONS.StandingUpIcon,
    state: Status.PENDING,
    id: Status.PENDING,
  },
  {
    text: "Cloning",
    icon: ICONS.CloneIcon,
    state: Status.CLONING,
    id: Status.CLONING,
  },
  {
    text: "Killed",
    icon: ICONS.KilledIcon,
    state: Status.KILLED,
    id: Status.KILLED,
  },
  {
    text: "Stopped",
    icon: ICONS.KilledIcon,
    state: Status.STOPPED,
    id: Status.STOPPED,
  },
  {
    text: "Failed",
    icon: ICONS.FailedIcon,
    state: Status.FAILED,
    id: Status.FAILED,
  },
];
