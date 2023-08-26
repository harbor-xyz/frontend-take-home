import { useEffect, useState } from 'react';
import fetchTestnetsData, { testnetsType } from '../Testnets/fetchTestnetsData';

type useTestnetsReturn = {
  testnetsData: testnetsType[] | null;
  count: number;
  isLoading: boolean;
};

const useTestnets = (): useTestnetsReturn => {
  const [testnetsData, setTestnetsData] = useState<testnetsType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!testnetsData) {
      setIsLoading(true);
      fetchTestnetsData()
        .then((result) => {
          setIsLoading(false);
          setTestnetsData(result.testnet);
        })
        .catch((error) => {
          setIsLoading(false);
          throw new Error(error);
        });
    }
  }, [testnetsData]);

  return {
    testnetsData,
    count: testnetsData?.length || 0,
    isLoading
  };
};

export default useTestnets;
