import { ICONS } from "./icon-constants";
import { BlockChains, Status } from "./../typings/models.d";

export const ICON_MAPPING = {
  [Status.RUNNING]: ICONS.TickInCircleIcon,
  [Status.STANDING]: ICONS.StandingUpIcon,
  [Status.UPDATING]: ICONS.StandingUpIcon,
  [Status.FAILED]: ICONS.FailedIcon,
  [Status.KILLED]: ICONS.KilledIcon,
  [Status.CLONING]: ICONS.CloneIcon,
};

export const CHAIN_MAPPING = {
  [BlockChains.ALCHEMY]: ICONS.AlchemyLogo,
  [BlockChains.ETHEREUM]: ICONS.EthreumLogo,
  [BlockChains.OPTIMISM]: ICONS.OptimismLogo,
  [BlockChains.ARBITRUM]: ICONS.ArbitrumLogo,
  [BlockChains.POLYGON]: ICONS.PolygonLogo,
};
