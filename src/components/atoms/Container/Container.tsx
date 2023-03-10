import React from "react";

import styled from "styled-components";

interface ContainerProps {
  children?: React.ReactNode;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => any;
  id?: string;
}

const ContainerDiv = styled.div<ContainerProps>`
  display: ${({ display }) => display || "block"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  text-align: ${({ textAlign }) => textAlign || "left"};
`;

const Container = ({ children, ...rest }: ContainerProps) => {
  return <ContainerDiv {...rest}>{children}</ContainerDiv>;
};

export default Container;
