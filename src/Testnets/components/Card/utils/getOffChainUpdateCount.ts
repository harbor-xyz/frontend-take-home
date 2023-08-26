import { testnetOffChainActorsType } from '../../../fetchTestnetsData';

const getOffChainUpdateCount = (testnetOffChainActors: testnetOffChainActorsType[]): number => {
  return testnetOffChainActors.filter((item) => item.status === 'UPDATING').length;
};

export default getOffChainUpdateCount;
