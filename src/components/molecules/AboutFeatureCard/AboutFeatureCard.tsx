import React from "react";

import { Container, Spacer, Text, Image } from "../../atoms";
import { useResponsive } from "../../../hooks";

import styled from "styled-components";

const ImageContainer = styled(Container)<{
  imagePosition: string;
  isDesktop?: boolean;
}>`
  ${({ imagePosition, isDesktop = true }) =>
    isDesktop
      ? imagePosition === "left"
        ? "margin-right: 30px;"
        : "margin-left: 30px;"
      : "margin-bottom: 12px;"}
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
  const { isDesktop } = useResponsive();

  return (
    <Container
      display="flex"
      alignItems="center"
      width="100%"
      flexDirection={isDesktop ? "row" : "column"}
    >
      {!isDesktop && (
        <ImageContainer imagePosition={imagePosition} isDesktop={false}>
          <Image
            src={imageSrc}
            alt="feature Image"
            height="150px"
            width="auto"
          />
        </ImageContainer>
      )}
      {isDesktop && imagePosition === "left" && (
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
          textType={isDesktop ? "h6" : "b1"}
          bold
          textAlign={isDesktop ? imagePosition : "center"}
          color="#1F6AF7"
        >
          {title}
        </Text>
        <Spacer size={8} />
        <Text
          textType={isDesktop ? "b1" : "b2"}
          textAlign={isDesktop ? imagePosition : "center"}
        >
          {description}
        </Text>
      </Container>
      {isDesktop && imagePosition === "right" && (
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
