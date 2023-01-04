import React from "react";
import styled from "styled-components";

import { Container, AbsoluteBackground } from "../../components/atoms";
import {
  Home as HomeOrganism,
  About,
  Pricing,
  Contact,
} from "../../components/organisms";

const BackgroundContainer = styled(Container)`
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: -1000;
`;

const Home = () => {
  return (
    <>
      <BackgroundContainer width="100%" height="100%">
        <AbsoluteBackground
          background="url('/images/background_1.png')"
          backgroundWidth="100%"
          backgroundHeight="100%"
          left="-50%"
          top="-80%"
        />
        <AbsoluteBackground
          background="url('/images/background_2.png')"
          backgroundWidth="55%"
          backgroundHeight="60%"
          right="-20%"
          bottom="-20%"
        />
      </BackgroundContainer>

      <Container width="100%">
        <HomeOrganism />
        <About />
        <Pricing />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
