import React from "react";

import styled, { css } from "styled-components";

import { Text } from "..";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  width?: string;
  display?: string;
}

const Root = styled.button<ButtonProps>`
  ${({ variant, disabled }) => getButtonStyles(variant, disabled)}
  width: ${({ width }) => width || "150px"};
  display: ${({ display }) => display || "inline"};
  cursor: pointer;
  border-radius: 8px;
  height: 35px;
  text-transform: uppercase;
  ${({ disabled }) => disabled && "opacity: 0.5;"}
`;

const getButtonStyles = (variant = "primary", disabled = false) => {
  let buttonStyles;
  switch (variant) {
    case "primary":
      buttonStyles = css`
        background: #49b9f6;
        border: 1px solid #49b9f6;
        span {
          color: white !important;
        }
        ${() =>
          !disabled &&
          `&:hover {
          background: white;
          span {
            color: #49b9f6 !important;
          }
        }`}
      `;
      break;
    case "secondary":
      buttonStyles = css`
        background: white;
        border: 1px solid #49b9f6;
        span {
          color: #49b9f6 !important;
        }
        ${() =>
          !disabled &&
          `&:hover {
          background: #49b9f6;
          span {
            color: white !important;
          }
        }`}
      `;
      break;
    default:
      break;
  }
  return buttonStyles;
};

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <Root {...rest}>
      <Text textType="btn" bold>
        {children}
      </Text>
    </Root>
  );
};

export default Button;
