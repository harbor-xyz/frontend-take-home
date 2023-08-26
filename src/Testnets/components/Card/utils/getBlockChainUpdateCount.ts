import { testnetChainsType } from '../../../fetchTestnetsData';

const getBlockChainUpdateCount = (testnetChains: testnetChainsType[]): number => {
  return testnetChains.filter((item) => {
    console.log('item.status', item.status, item.chain);
    return item.status === 'UPDATING';
  }).length;
};

export default getBlockChainUpdateCount;
