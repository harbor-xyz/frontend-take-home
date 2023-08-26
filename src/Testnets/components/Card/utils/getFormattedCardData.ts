import { testnetsType } from '../../../fetchTestnetsData';
import { getLastModifiedTime } from '../../../../utils/getLastModifiedTime';

export const getFormattedCardData = (testnet: testnetsType) => {
  return {
    lastModifiedTime: getLastModifiedTime(testnet?.updated_at),
    idLastFourDigits: testnet?.id.slice(-4), // this is an assumption to use last 4 digits based on  designs
    testnetChains: testnet?.testnet_chains,
    offChainActors: testnet?.testnet_off_chain_actors
  };
};
