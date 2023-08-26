import {
  forwardRef,
  MouseEvent,
  ReactElement,
  ReactNode,
  useCallback,
} from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ButtonIcon = styled.span`
  display: inherit;
`;

const BUTTON_PADDING = {
  small: "2px 8px",
  medium: "8px 16px",
  large: "6px 12px",
};

const StyledButton = styled.button<ButtonProps>`
  ${({
    theme,
    variant = "primary",
    size = "medium",
    fullWidth,
    disabled,
    bold,
    color,
    active,
  }) => css`
    ${bold === "semiBold" && theme.text.body2};
    ${size === "medium" && theme.text.body1};
    display: flex;
    align-items: center;
    justify-content: ${fullWidth ? "flex-start" : "center"};
    width: ${fullWidth ? "100%" : "auto"};
    padding: ${BUTTON_PADDING[size]};
    cursor: ${disabled ? "not-allowed" : "pointer"};
    border-radius: 8px;
    border: 1px solid transparent;
    gap: 8px;

    ${variant === "primary" &&
    css`
      background: ${theme.color.grey222};
      color: ${theme.color.greyAAA};

      ${active &&
      css`
        background-color: ${theme.color.grey111};
        color: ${theme.color.white};
      `}

      ${!disabled &&
      css`
        &:hover {
          background-color: ${theme.color.grey111};
          color: ${theme.color.white};
        }

        &:active {
          background-color: ${theme.color.black};
          color: ${theme.color.white};
        }
      `}
    `}

    ${variant === "secondary" &&
    css`
      background-color: ${theme.color.white};
      color: ${theme.color.black};

      ${active &&
      css`
        background-color: ${theme.color.background.light};
      `}

      ${!disabled &&
      css`
        &:hover {
          background-color: ${theme.color.background.light};
        }

        &:active {
          background-color: ${theme.color.background.light};
        }

        &:visited {
          background-color: ${theme.color.background.light};
          color: ${theme.color.blue};
        }
      `}
    `}

    ${variant === "text" &&
    css`
      background-color: transparent;
      color: ${color ?? theme.color.grey999};
      border: none;
      padding: 0;
      ${bold === "semiBold" && theme.text.body2};
      svg {
        fill: ${color};
        path {
          fill: ${color};
        }
      }
    `}
  `}
`;

export interface ButtonProps {
  children?: ReactNode;
  handleOnClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant?: "primary" | "secondary" | "text";
  size?: "small" | "medium" | "large";
  bold?: "semiBold";
  id?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  color?: string;
  style?: object;
  active?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    handleOnClick,
    startIcon,
    endIcon,
    color,
    variant,
    fullWidth,
    bold,
    active,
    ...others
  } = props;

  const handleButtonOnClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (handleOnClick) {
        handleOnClick(event);
      }
    },
    [handleOnClick],
  );

  return (
    <StyledButton
      ref={ref}
      onClick={handleButtonOnClick}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      bold={bold}
      active={active}
      {...others}
    >
      {startIcon && <ButtonIcon>{startIcon}</ButtonIcon>}
      {children}
      {endIcon && <ButtonIcon>{endIcon}</ButtonIcon>}
    </StyledButton>
  );
});

export default Button;
