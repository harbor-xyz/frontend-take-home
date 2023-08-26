import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { forwardRef, ReactElement } from "react";
import { css } from "@emotion/react";

interface PaperProps {
  raised?: boolean;
  fullWidth?: boolean;
  children: ReactElement;
  disabled?: boolean;
}

const Container = styled.div<PaperProps>`
  ${({ raised, fullWidth, disabled }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    background-color: ${theme.color.white};
    border-radius: 20px;
    border: 1px solid ${theme.color.greyE5};
    padding: 24px 32px;
    cursor: pointer;

    ${raised &&
    !disabled &&
    css`
      box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.06);
    `};

    ${fullWidth &&
    css`
      width: 100%;
    `};

    ${disabled &&
    css`
      background-color: transparent;
      cursor: not-allowed;
    `}
  `}
`;

const Paper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  const { children, raised, fullWidth, disabled, ...others } = props;
  return (
    <Container
      ref={ref}
      raised={raised}
      fullWidth={fullWidth}
      disabled={disabled}
      {...others}
    >
      {children}
    </Container>
  );
});

export default Paper;
