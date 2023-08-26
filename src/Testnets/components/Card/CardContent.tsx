import Text from '../../../ui/Text';
import Dot from '../../../components/Dot';
import ClockIcon from '../../../icons/ClockIcon';
import { theme } from '../../../styles/theme';
import styled from '@emotion/styled';
import { getBlockChainIcons, IconData } from './utils/getBlockChainIcons';
import { testnetChainsType, testnetOffChainActorsType } from '../../fetchTestnetsData';
import BlockChainIcons from '../BlockChainIcons';
import { css } from '@emotion/react';
import getOffChainUpdateCount from './utils/getOffChainUpdateCount';
import getBlockChainUpdateCount from './utils/getBlockChainUpdateCount';
import HourglassTimerIcon from '../../../icons/HourglassTimerIcon';

const Content = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  margin-top: 8px;
  flex-direction: column;
  gap: 8px;
`;

const Subtext = styled.div<{ disabled: boolean }>`
  ${({ disabled }) => css`
    ${disabled &&
    css`
      color: ${theme.color.grey666};
    `};

    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1 0 0;
  `}
`;

const UpdatingText = styled.div<{ disabled: boolean }>`
  ${({ disabled }) => css`
    ${disabled &&
    css`
      color: ${theme.color.grey666};
    `};

    display: flex;
    align-items: center;
    gap: 6px;
  `}
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Row = styled.div<{ justifyContent?: string }>`
  ${({ justifyContent }) => css`
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    justify-content: ${justifyContent || 'space-between'}
    width: 100%;
  `}
`;

interface CardContentProps {
  offChainActors: testnetOffChainActorsType[];
  lastModifiedTime: string;
  testnetChains: testnetChainsType[];
  disabled?: boolean;
}

const CardContent = ({
  offChainActors,
  lastModifiedTime,
  testnetChains,
  disabled = false
}: CardContentProps) => {
  const offChainActorsCount = offChainActors?.length;
  const testnetChainsCount = testnetChains?.length;
  const testnetChainText =
    testnetChainsCount > 1
      ? `${testnetChainsCount} Blockchains`
      : `${testnetChainsCount} Blockchain`;

  const iconsArr: IconData[] = getBlockChainIcons(testnetChains);
  const offChainUpdateCount = getOffChainUpdateCount(offChainActors);
  const blockChainUpdateCount = getBlockChainUpdateCount(testnetChains);

  const offChainUpdatingText =
    offChainUpdateCount > 1
      ? `${offChainUpdateCount} off-chains updating`
      : `${offChainUpdateCount} off-chain updating`;

  const blockChainUpdatingText =
    blockChainUpdateCount > 1
      ? `${blockChainUpdateCount} Blockchains updating`
      : `${blockChainUpdateCount} Blockchain updating`;

  const showUpdatingView = offChainUpdateCount > 0 || blockChainUpdateCount > 0;

  return (
    <Content>
      <Row>
        <Subtext disabled={disabled}>
          {offChainActorsCount > 0 && <Text>{`${offChainActorsCount} off-chain actors`}</Text>}
          {testnetChainsCount > 0 && (
            <>
              <Dot />
              <Text>{testnetChainText}</Text>
              {iconsArr.length > 0 && <BlockChainIcons icons={iconsArr} />}
            </>
          )}
        </Subtext>
        <Time>
          <ClockIcon />
          <Text color={theme.color.grey999}>{`Modified ${lastModifiedTime}`}</Text>
        </Time>
      </Row>

      {showUpdatingView && (
        <Row justifyContent={'flex-start'}>
          {offChainUpdateCount > 0 && (
            <UpdatingText disabled={disabled} color={theme.color.orange}>
              <HourglassTimerIcon />
              <Text color={theme.color.orange} variant="semiBold">
                {offChainUpdatingText}
              </Text>
            </UpdatingText>
          )}
          {blockChainUpdateCount > 0 && (
            <>
              {offChainUpdateCount > 0 && <Dot />}
              <UpdatingText disabled={disabled} color={theme.color.orange}>
                <HourglassTimerIcon />
                <Text color={theme.color.orange} variant="semiBold">
                  {blockChainUpdatingText}
                </Text>
              </UpdatingText>
            </>
          )}
        </Row>
      )}
    </Content>
  );
};

export default CardContent;
