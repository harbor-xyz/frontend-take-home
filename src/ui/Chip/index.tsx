import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import Text from '../Text';
import { useTheme } from '@emotion/react';

interface ChipProps {
  children: string;
}

const Container = styled.div`
  display: flex;
  padding: 2px 12px;
  align-items: flex-start;
  border-radius: 40px;
  background: ${theme.color.greyF6};
`;

const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const { children, ...others } = props;
  const theme = useTheme();
  return (
    <Container ref={ref} {...others}>
      <Text variant="semiBold" color={theme.color.grey999}>
        {children}
      </Text>
    </Container>
  );
});

export default Chip;
