import React from "react";

import { Container, Text, Image, Spacer } from "../../atoms";
import { useResponsive } from "../../../hooks";

const Home = () => {
  const { isDesktop } = useResponsive();

  return (
    <Container
      id="home"
      width="80%"
      margin="auto"
      display="flex"
      padding="100px 0 100px 0"
      height="calc(100vh - 72px)"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Container width="70%" margin={isDesktop ? "0 25%" : "auto"}>
        <Text textAlign="center" textType={isDesktop ? "h6" : "b1"}>
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
        margin={isDesktop ? "100px 0 0 0" : "70px 0 0 0"}
        width={isDesktop ? undefined : "100%"}
      >
        <Text textType={isDesktop ? "h6" : "b2"} italic>
          &ldquo;Solusi terdepan dalam otomatisasi bisnis&rdquo;
        </Text>
        <Spacer size={48} />
        <Image
          src="/images/undraw_business_plan.png"
          width={isDesktop ? "400px" : "75%"}
        />
      </Container>
    </Container>
  );
};

export default Home;
