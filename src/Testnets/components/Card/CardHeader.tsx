import Text from '../../../ui/Text';
import Chip from '../../../ui/Chip';
import Dot from '../../../components/Dot';
import Button from '../../../ui/Button';
import SettingsIcon from '../../../icons/SettingsIcon';
import styled from '@emotion/styled';
import TestnetStatus from './Status';
import { css } from '@emotion/react';
import { theme } from '../../../styles/theme';

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  justify-content: space-between;
`;

const Item = styled.div<{ disabled?: boolean }>`
  ${({ disabled }) => css`
    display: flex;
    align-items: center;
    gap: 16px;
    ${disabled &&
    css`
      color: ${theme.color.grey666};
    `}
  `}
`;

interface CardHeaderProps {
  name: string;
  status: string;
  id: string;
  disabled?: boolean;
}

const CardHeader = ({ id, name, status, disabled = false }: CardHeaderProps) => {
  return (
    <Title>
      <Item disabled={disabled}>
        <Text variant="bold">{name}</Text>
        <Chip>{id}</Chip>
      </Item>
      <Item>
        <TestnetStatus status={status} disabled={disabled} />
        <Dot />
        <Button variant="text" startIcon={<SettingsIcon />}>
          Settings
        </Button>
      </Item>
    </Title>
  );
};

export default CardHeader;
