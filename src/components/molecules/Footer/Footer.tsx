import React from "react";

import { Container, Text } from "../../atoms";

import styled from "styled-components";

const StyledContainer = styled(Container)`
  background-image: linear-gradient(-90deg, #49b9f6 0%, #74cde8 100%);
`;

const Footer = () => {
  return (
    <StyledContainer
      width="100%"
      display="flex"
      justifyContent="center"
      padding="24px 0"
    >
      <Text color="white" textAlign="center">
        Copyright 2022 ERPMa Group
      </Text>
    </StyledContainer>
  );
};

export default Footer;
