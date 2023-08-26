import { useEffect, useState } from 'react';
import fetchTestnetsData, { testnetsType } from './fetchTestnetsData';

const useTestnets = (): { testnetsData: testnetsType[] | null; count: number } => {
  const [testnetsData, setTestnetsData] = useState<testnetsType[] | null>(null);

  useEffect(() => {
    fetchTestnetsData()
      .then((result) => {
        setTestnetsData(result.testnet);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return {
    testnetsData,
    count: testnetsData?.length || 0
  };
};

export default useTestnets;
