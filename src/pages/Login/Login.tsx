import React from "react";

import { Container, Input, Spacer, Button, Text } from "../../components/atoms";

const Login = () => {
  return (
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
  );
};

export default Login;
