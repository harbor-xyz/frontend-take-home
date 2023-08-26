import { testnetsType } from '../../../fetchTestnetsData';
import { getLastModifiedTime } from '../../../../utils/getLastModifiedTime';

export const getFormattedCardData = (testnet: testnetsType) => {
  return {
    lastModifiedTime: getLastModifiedTime(testnet?.updated_at),
    idLastFourDigits: testnet?.id.slice(-4),
    testnetChains: testnet?.testnet_chains,
    offChainActors: testnet?.testnet_off_chain_actors
  };
};
