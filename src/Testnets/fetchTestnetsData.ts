import axios from 'axios';

export type testnetOffChainActorsType = {
  name: string;
  status: string;
};

export type testnetChainsType = {
  chain: string;
  status: string;
};

type testnetImageType = {
  project_id: string;
  id: string;
};

export type testnetsType = {
  name: string;
  id: string;
  status: string;
  endpoint: string;
  created_at: string;
  updated_at: string;
  testnet_off_chain_actors: testnetOffChainActorsType[];
  testnet_chains: testnetChainsType[];
  testnet_image: testnetImageType;
  __typename: 'testnet';
};

export const testnetChainValues = {
  POLYGON: 'polygon',
  ETHEREUM: 'ethereum',
  ALCHEMY: 'alchemy',
  OPTIMISM: 'optimism',
  FANTOM: 'fantom'
};

export const testnetStatus = {
  RUNNING: 'RUNNING',
  CLONING: 'CLONING',
  STANDING_UP: 'STANDING_UP',
  PENDING: 'PENDING',
  UPDATING: 'UPDATING',
  KILLED: 'KILLED',
  FAILED: 'FAILED',
  STOPPED: 'STOPPED'
};
const fetchTestnetsData = async (): Promise<any> => {
  try {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const endpoint = isDevelopment ? '/testnets' : '.netlify/functions/testnets';
    const result = await axios.get(endpoint);
    if (result.status === 200) {
      return result.data.data;
    } else {
      return result.data.error;
    }
  } catch (error: any) {
    return error;
  }
};

export default fetchTestnetsData;
