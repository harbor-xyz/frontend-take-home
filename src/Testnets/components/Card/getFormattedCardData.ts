import { testnetsType } from '../../fetchTestnetsData';
import { getLastModifiedTime } from '../../../utils/getLastModifiedTime';

export const getFormattedCardData = (testnet: testnetsType) => {
  return {
    offChainActorsCount: testnet?.testnet_off_chain_actors?.length || 0,
    testnetChainsCount: testnet?.testnet_chains?.length || 0,
    lastModifiedTime: getLastModifiedTime(testnet?.updated_at),
    idLastFourDigits: testnet?.id.slice(-4),
    testnetChains: testnet?.testnet_chains
  };
};
