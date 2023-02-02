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
