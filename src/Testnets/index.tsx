import styled from "@emotion/styled";
import Header from "./components/Header";
import { theme } from "../styles/theme";
import Card from "./components/Card";
import useTestnets from "./useTestnets";

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
  return (
    <Container>
      <Header count={count} />
      <Card testnets={testnetsData} />
    </Container>
  );
};

export default Testnets;
