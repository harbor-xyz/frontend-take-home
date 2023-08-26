import { useEffect, useState } from 'react';
import fetchTestnetsData, { testnetsType } from '../Testnets/fetchTestnetsData';

type useTestnetsReturn = {
  testnetsData: testnetsType[] | null;
  count: number;
};

const useTestnets = (): useTestnetsReturn => {
  const [testnetsData, setTestnetsData] = useState<testnetsType[] | null>(null);

  useEffect(() => {
    if (!testnetsData) {
      fetchTestnetsData()
        .then((result) => {
          setTestnetsData(result.testnet);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  }, [testnetsData]);

  return {
    testnetsData,
    count: testnetsData?.length || 0
  };
};

export default useTestnets;
