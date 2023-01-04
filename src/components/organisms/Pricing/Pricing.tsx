import React from "react";

import { Container, Spacer } from "../../atoms";
import { PriceCard } from "../../molecules";

import styled from "styled-components";

const BackgroundContainer = styled(Container)<{ isTop?: boolean }>`
  background: url("/images/price_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${({ isTop = false }) =>
    isTop ? "left top" : "left bottom"};
`;

const PriceCardContainer = styled(Container)`
  background-image: linear-gradient(-90deg, #49b9f6 0%, #74cde8 100%);
`;

const Pricing = () => {
  const features = [
    {
      name: "basic",
      price: "Rp. 20k",
      features: ["Catatan masuk dan keluar", "Catatan keuntungan"],
    },
    {
      name: "business",
      price: "Rp. 50k",
      features: [
        "Catatan masuk dan keluar",
        "Catatan keuntungan",
        "Analisa grafik",
        "Customer Support 24x7",
      ],
    },
    {
      name: "entrepreneur",
      price: "Rp. 99k",
      features: [
        "Catatan masuk dan keluar",
        "Catatan keuntungan",
        "Analisa grafik",
        "Customer Support 24x7",
        "Export ke Excel",
        "Prediksi penghasilan menggunakan AI",
      ],
    },
  ];

  return (
    <Container
      id="pricing"
      width="width"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <BackgroundContainer
        width="100%"
        padding="70px 0 0 0"
        isTop
      ></BackgroundContainer>
      <PriceCardContainer width="100%" textAlign="center">
        {features.map((feature, index) => (
          <Container display="inline-block" key={index}>
            <Spacer inline size={16} />
            <PriceCard
              level={feature.name}
              price={feature.price}
              features={feature.features}
            />
            <Spacer inline size={16} />
          </Container>
        ))}
      </PriceCardContainer>
      <BackgroundContainer
        width="100%"
        padding="70px 0 0 0"
      ></BackgroundContainer>
    </Container>
  );
};

export default Pricing;
