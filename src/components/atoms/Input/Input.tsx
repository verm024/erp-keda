import React from "react";

import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  display?: string;
}

const Root = styled.input<InputProps>`
  outline: none;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  letter-spacing: 0.5px;
  width: ${({ width }) => width || "100px"};
  display: ${({ display }) => display || "inline"};
  &:focus {
    border-color: #1f6af7;
  }
`;

const Input = ({ ...rest }: InputProps) => <Root {...rest} />;

export default Input;
