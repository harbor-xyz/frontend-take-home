import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

export const textVariants = {
  MEDIUM: 'medium',
  SEMI_BOLD: 'semiBold',
  BOLD: 'bold'
} as const;

interface Props {
  children: string;
  color?: string;
  variant?: 'medium' | 'semiBold' | 'bold';
}

const Container = styled.div<Props>`
  ${({ theme, color, variant }) => {
    return css`
      width: fit-content;
      word-break: break-word;
      text-align: left;
      white-space: pre-wrap;
      color: ${color};
      ${variant === textVariants.MEDIUM && theme.text.body1};
      ${variant === textVariants.SEMI_BOLD && theme.text.body2}
      ${variant === textVariants.BOLD && theme.text.h2}
    `;
  }}
`;

const Text = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, color, variant = textVariants.MEDIUM, ...others } = props;
  return (
    <Container ref={ref} color={color} variant={variant} {...others}>
      {children}
    </Container>
  );
});

export default Text;
