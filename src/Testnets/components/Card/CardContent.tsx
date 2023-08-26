import Text from "../../../ui/Text";
import Dot from "../../../components/Dot";
import ClockIcon from "../../../icons/ClockIcon";
import { theme } from "../../../styles/theme";
import styled from "@emotion/styled";
import { getBlockChainIcons, IconData } from "./getBlockChainIcons";
import { testnetChainsType } from "../../fetchTestnetsData";
import BlockChainIcons from "../BlockChainIcons";
import { css } from "@emotion/react";

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  margin-top: 12px;
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

const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

interface CardContentProps {
  offChainActorsCount: number;
  testnetChainsCount: number;
  lastModifiedTime: string;
  testnetChains: testnetChainsType[];
  disabled?: boolean;
}

const CardContent = ({
  offChainActorsCount,
  testnetChainsCount,
  lastModifiedTime,
  testnetChains,
  disabled = false,
}: CardContentProps) => {
  const testnetChainText =
    testnetChainsCount > 1
      ? `${testnetChainsCount} Blockchains`
      : `${testnetChainsCount} Blockchain`;

  const iconsArr: IconData[] = getBlockChainIcons(testnetChains);

  return (
    <Content>
      <Subtext disabled={disabled}>
        {offChainActorsCount > 0 && (
          <Text>{`${offChainActorsCount} off-chain actors`}</Text>
        )}
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
        <Text
          color={theme.color.grey999}
        >{`Modified ${lastModifiedTime}`}</Text>
      </Time>
    </Content>
  );
};

export default CardContent;
