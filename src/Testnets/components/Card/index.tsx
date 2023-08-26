import Paper from "../../../ui/Paper";
import { testnetStatus, testnetsType } from "../../fetchTestnetsData";
import { getFormattedCardData } from "./getFormattedCardData";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-direction: column;
`;
const Card = ({ testnets }: { testnets: testnetsType[] | null }) => {
  return (
    <Container>
      {testnets &&
        testnets.map((item) => {
          const {
            offChainActorsCount,
            testnetChainsCount,
            lastModifiedTime,
            idLastFourDigits,
            testnetChains,
          } = getFormattedCardData(item);

          const isDisabled =
            item.status === testnetStatus.KILLED ||
            item.status === testnetStatus.STOPPED;

          return (
            <Paper raised disabled={isDisabled}>
              <>
                <CardHeader
                  id={idLastFourDigits}
                  name={item.name}
                  status={item.status}
                  disabled={isDisabled}
                />
                <CardContent
                  offChainActorsCount={offChainActorsCount}
                  testnetChainsCount={testnetChainsCount}
                  lastModifiedTime={lastModifiedTime}
                  testnetChains={testnetChains}
                  disabled={isDisabled}
                />
              </>
            </Paper>
          );
        })}
    </Container>
  );
};

export default Card;
