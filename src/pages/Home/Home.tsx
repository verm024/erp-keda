import React from "react";

import { Container } from "../../components/atoms";
import {
  Home as HomeOrganism,
  About,
  Pricing,
  Contact,
} from "../../components/organisms";

const Home = () => {
  return (
    <Container width="100%">
      <HomeOrganism />
      <About />
      <Pricing />
      <Contact />
    </Container>
  );
};

export default Home;
