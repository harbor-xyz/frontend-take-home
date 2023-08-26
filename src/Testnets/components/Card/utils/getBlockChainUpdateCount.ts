import { testnetChainsType } from '../../../fetchTestnetsData';

const getBlockChainUpdateCount = (testnetChains: testnetChainsType[]): number => {
  return testnetChains.filter((item) => {
    return item.status === 'UPDATING';
  }).length;
};

export default getBlockChainUpdateCount;
