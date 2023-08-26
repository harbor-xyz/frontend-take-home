import Paper from '../../../ui/Paper';
import { testnetStatus, testnetsType } from '../../fetchTestnetsData';
import { getFormattedCardData } from './utils/getFormattedCardData';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import styled from '@emotion/styled';

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
          const { lastModifiedTime, idLastFourDigits, testnetChains, offChainActors } =
            getFormattedCardData(item);

          const isDisabled =
            item.status === testnetStatus.KILLED || item.status === testnetStatus.STOPPED;

          return (
            <Paper raised disabled={isDisabled} error={item.status === testnetStatus.FAILED}>
              <>
                <CardHeader
                  id={idLastFourDigits}
                  name={item.name}
                  status={item.status}
                  disabled={isDisabled}
                />
                <CardContent
                  offChainActors={offChainActors}
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
