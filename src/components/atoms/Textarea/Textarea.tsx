import React from "react";

import styled from "styled-components";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  display?: string;
  width?: string;
}

const Root = styled.textarea<TextareaProps>`
  outline: none;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid;
  font-size: 1rem;
  letter-spacing: 0.5px;
  resize: none;
  font-family: inherit;
  font-size: inherit;
  width: ${({ width }) => width || "100px"};
  display: ${({ display }) => display || "inline"};
  &:focus {
    border-color: #1f6af7;
  }
`;

const Textarea = ({ ...rest }: TextareaProps) => <Root {...rest} />;

export default Textarea;
