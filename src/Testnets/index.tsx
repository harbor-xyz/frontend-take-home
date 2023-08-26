import styled from "@emotion/styled";
import Header from "./components/Header";
import { theme } from "../styles/theme";
import Card from "./components/Card";
import useTestnets from "./useTestnets";
import { useEffect, useState } from "react";
import filterByStatus from "./utils/filterByStatus";
import sortBy from "./utils/sortBy";
import { testnetsType } from "./fetchTestnetsData";

const Container = styled.div`
  display: flex;
  gap: 12px;
  background-color: ${theme.color.background.light};
  width: 100%;
  padding: 40px 60px;
  flex-direction: column;
`;

const Testnets = () => {
  const { testnetsData, count } = useTestnets();
  const [data, setData] = useState<testnetsType[] | null>(testnetsData);

  useEffect(() => {
    if (testnetsData) {
      setData(testnetsData);
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
      <Header
        count={count}
        filterDataByStatus={handleFilterDataByStatus}
        sortData={handleSortData}
      />
      <Card testnets={data} />
    </Container>
  );
};

export default Testnets;
