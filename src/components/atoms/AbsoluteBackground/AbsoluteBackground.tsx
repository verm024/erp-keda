import React from "react";

import styled from "styled-components";

import { Container } from "..";

interface Props {
  background: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  backgroundHeight?: string;
  backgroundWidth?: string;
}

const Root = styled(Container)<Props>`
  position: absolute;
  z-index: -1000;
  height: ${({ backgroundHeight }) => backgroundHeight || "100%"};
  width: ${({ backgroundWidth }) => backgroundWidth || "100%"};
  top: ${({ top }) => top || "unset"};
  right: ${({ right }) => right || "unset"};
  bottom: ${({ bottom }) => bottom || "unset"};
  left: ${({ left }) => left || "unset"};
  background: ${({ background }) => background};
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

// background-size: ${({ backgroundWidth, backgroundHeight }) =>
//     `${backgroundWidth || "100%"} ${backgroundHeight || "auto"}`};

const AbsoluteBackground = ({ ...rest }: Props) => {
  return <Root {...rest} id="testtttt" />;
};

export default AbsoluteBackground;
