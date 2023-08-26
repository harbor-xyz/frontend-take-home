import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import Text from '../Text';
import { css, useTheme } from '@emotion/react';

interface ChipProps {
  children: string;
  disabled?: boolean;
  variant?: 'small' | 'medium';
}

const Container = styled.div<{ disabled: boolean; variant: string }>`
  ${({ disabled, variant }) => css`
    display: flex;
    padding: 2px 12px;
    align-items: flex-start;
    border-radius: 40px;

    ${disabled
      ? css`
          background: transparent;
          border: 1px solid ${theme.color.greyDDD};
        `
      : css`
          background: ${theme.color.greyF6};
        `}
    ${variant === 'small' &&
    css`
      padding: 4px 8px;
    `}
  `}
`;

const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const { disabled = false, variant = 'medium', children, ...others } = props;
  const theme = useTheme();
  return (
    <Container ref={ref} disabled={disabled} variant={variant} {...others}>
      <Text variant="semiBold" color={theme.color.grey999}>
        {children}
      </Text>
    </Container>
  );
});

export default Chip;
