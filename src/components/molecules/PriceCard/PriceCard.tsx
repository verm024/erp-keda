import React from "react";

import styled from "styled-components";

import { Container, Text, Spacer, Button } from "../../atoms";

interface Props {
  level: string;
  price: string;
  features?: string[];
}

const Card = styled(Container)`
  border-radius: 15px;
  width: 250px;
  height: 450px;
  overflow: auto;
  background: white;
`;

const FeatureUl = styled.ul`
  margin-left: 24px;
`;
const FeatureLi = styled.li``;

const PriceCard = ({ level, price, features = [] }: Props) => {
  return (
    <Card display="inline-block" margin="12px 0">
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width="100%"
        padding="24px"
      >
        <Text textType="h6" color="#1F6AF7" textAlign="center" bold>
          {level.toUpperCase()}
        </Text>
        <Spacer size={8} />
        <Text textType="h4" bold textAlign="center">
          {price}
        </Text>
        <Spacer size={8} />
        <Text textType="b2" textAlign="center">
          per bulan
        </Text>
        <Spacer size={16} />
        <Text textType="b1" bold color="#1F6AF7">
          Apa fiturnya?
        </Text>
        <Spacer size={8} />
        <FeatureUl>
          {features.map((el, index) => (
            <React.Fragment key={index}>
              <FeatureLi>
                <Text textType="b2">{el}</Text>
              </FeatureLi>
              <Spacer size={4} />
            </React.Fragment>
          ))}
        </FeatureUl>
      </Container>
      <Container display="flex" width="100%" justifyContent="center">
        <Button onClick={() => alert("Berhasil memesan!")}>Pesan</Button>
      </Container>
    </Card>
  );
};

export default PriceCard;
