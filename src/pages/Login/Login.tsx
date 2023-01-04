import React from "react";

import styled from "styled-components";

import {
  Container,
  Input,
  Spacer,
  Button,
  Text,
  AbsoluteBackground,
} from "../../components/atoms";
import { useResponsive } from "../../hooks";

const BackgroundContainer = styled(Container)`
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: -1000;
`;

const Login = () => {
  const { isDesktop } = useResponsive();

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
        {isDesktop && (
          <AbsoluteBackground
            background="url('/images/background_2.png')"
            backgroundWidth="55%"
            backgroundHeight="60%"
            right="-20%"
            bottom="-20%"
          />
        )}
      </BackgroundContainer>
      <Container
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 72px)"
        flexDirection="column"
      >
        <Text textAlign="center" textType="h4" bold color="#1F6AF7">
          LOGIN
        </Text>
        <Spacer size={36} />
        <Input type="email" display="block" width="60%" placeholder="Email" />
        <Spacer size={24} />
        <Input
          type="password"
          display="block"
          width="60%"
          placeholder="Password"
        />
        <Spacer size={32} />
        <Button onClick={() => alert("Login Success")}>Login</Button>
      </Container>
    </>
  );
};

export default Login;
