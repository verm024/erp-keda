import React from "react";

import { Container, Text, Image, Spacer } from "../../atoms";

const Home = () => {
  return (
    <Container
      id="home"
      width="100%"
      display="flex"
      padding="100px 0 100px 0"
      height="calc(100vh - 72px)"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Container width="70%" margin="0 25%">
        <Text textAlign="center" textType="h6">
          Kelola semua proses bisnis perusahaan secara otomatis dengan perangkat
          ERPMa,
          <br />
          untuk anda dalam mempermudah pengambilan keputusan yang lebih efektif.
        </Text>
      </Container>
      <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="100px 0 0 0"
      >
        <Text textType="h6" italic>
          &ldquo;Solusi terdepan dalam otomatisasi bisnis&rdquo;
        </Text>
        <Spacer size={48} />
        <Image src="/images/undraw_business_plan.png" width="400px" />
      </Container>
    </Container>
  );
};

export default Home;
