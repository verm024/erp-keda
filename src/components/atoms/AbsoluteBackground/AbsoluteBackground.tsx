import React from "react";

import styled from "styled-components";

import { Container } from "..";

interface Props {
  background: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  height?: string;
  width?: string;
}

const Root = styled(Container)<Props>`
  position: absolute;
  height: ${({ height }) => height || "100%"};
  width: ${({ width }) => width || "100%"};
  top: ${({ top }) => top || "unset"};
  right: ${({ right }) => right || "unset"};
  bottom: ${({ bottom }) => bottom || "unset"};
  left: ${({ left }) => left || "unset"};
  background: ${({ background }) => background};
`;

const AbsoluteBackground = ({ ...rest }: Props) => {
  return <Root {...rest}></Root>;
};

export default AbsoluteBackground;
