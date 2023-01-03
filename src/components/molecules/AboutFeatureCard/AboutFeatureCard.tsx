import React from "react";

import { Container, Spacer, Text, Image } from "../../atoms";

import styled from "styled-components";

const ImageContainer = styled(Container)<{ imagePosition: string }>`
  ${({ imagePosition }) =>
    imagePosition === "left" ? "margin-right: 30px;" : "margin-left: 30px;"}
`;

interface Props {
  title: string;
  description: string;
  imageSrc?: string;
  imagePosition?: "left" | "right";
}

const AboutFeatureCard = ({
  title,
  description,
  imageSrc = "",
  imagePosition = "left",
}: Props) => {
  return (
    <Container display="flex" alignItems="center" width="100%">
      {imagePosition === "left" && (
        <ImageContainer imagePosition={imagePosition}>
          <Image
            src={imageSrc}
            alt="feature Image"
            height="200px"
            width="auto"
          />
        </ImageContainer>
      )}
      <Container width="100%">
        <Text
          textType="h6"
          bold
          textAlign={imagePosition === "right" ? "right" : "left"}
          color="#1F6AF7"
        >
          {title}
        </Text>
        <Spacer size={8} />
        <Text
          textType="b1"
          textAlign={imagePosition === "right" ? "right" : "left"}
        >
          {description}
        </Text>
      </Container>
      {imagePosition === "right" && (
        <ImageContainer imagePosition={imagePosition}>
          <Image
            src={imageSrc}
            alt="feature Image"
            height="200px"
            width="auto"
          />
        </ImageContainer>
      )}
    </Container>
  );
};

export default AboutFeatureCard;
