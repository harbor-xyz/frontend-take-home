import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import { forwardRef, ReactElement } from 'react';
import { css } from '@emotion/react';

interface PaperProps {
  raised?: boolean;
  fullWidth?: boolean;
  children: ReactElement;
  disabled?: boolean;
  error?: boolean;
}

const Container = styled.div<PaperProps>`
  ${({ raised, fullWidth, disabled, error }) => css`
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

    ${error &&
    css`
      background-color: ${theme.color.redLight};
      border: 1px solid ${theme.color.red};
    `}
  `}
`;

const Paper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  const { children, raised, fullWidth, disabled, error, ...others } = props;
  return (
    <Container
      ref={ref}
      raised={raised}
      fullWidth={fullWidth}
      disabled={disabled}
      error={error}
      {...others}
    >
      {children}
    </Container>
  );
});

export default Paper;
