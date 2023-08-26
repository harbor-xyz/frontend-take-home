import styled from '@emotion/styled';
import Header from './components/Header';
import { theme } from '../styles/theme';
import Card from './components/Card';
import { useContext, useEffect, useState } from 'react';
import filterByStatus from './utils/filterByStatus';
import sortBy, { sortType } from './utils/sortBy';
import { testnetsType } from './fetchTestnetsData';
import { TestnetsContext } from '../TestnetsProvider';
import Text from '../ui/Text';

const Container = styled.div`
  display: flex;
  gap: 12px;
  background-color: ${theme.color.background.light};
  width: 100%;
  padding: 40px 60px;
  flex-direction: column;
`;

const Testnets = () => {
  const { testnetsData, count, isLoading } = useContext(TestnetsContext);
  const [data, setData] = useState<testnetsType[] | null>(testnetsData);

  useEffect(() => {
    if (testnetsData) {
      // by default sort the data based on status (as per designs)
      setData(sortBy({ data: testnetsData, type: sortType.STATUS }));
    }
  }, [testnetsData]);

  const handleSortData = (sortType: string) => {
    const sortedData = sortBy({ data: testnetsData, type: sortType });
    setData(sortedData);
  };

  const handleFilterDataByStatus = (status: string) => {
    const filteredData = filterByStatus({ data: testnetsData, status });
    setData(filteredData);
  };

  return (
    <Container>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Header
            count={count}
            filterDataByStatus={handleFilterDataByStatus}
            sortData={handleSortData}
          />
          <Card testnets={data} />
        </>
      )}
    </Container>
  );
};

export default Testnets;
