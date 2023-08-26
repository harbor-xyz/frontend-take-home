import { forwardRef } from "react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Text from "../Text";
import { css, useTheme } from "@emotion/react";

interface ChipProps {
  children: string;
  disabled?: boolean;
}

const Container = styled.div<{ disabled: boolean }>`
  ${({ disabled }) => css`
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
  `}
`;

const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const { disabled = false, children, ...others } = props;
  const theme = useTheme();
  return (
    <Container ref={ref} disabled={disabled} {...others}>
      <Text variant="semiBold" color={theme.color.grey999}>
        {children}
      </Text>
    </Container>
  );
});

export default Chip;
