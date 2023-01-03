import React from "react";

import styled from "styled-components";

import { Container, Text, Button } from "../../atoms";

const NavLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

const ExtendedNavLink = styled(NavLink)`
  margin: 0 16px;
`;

const StyledButton = styled(Button)`
  margin-left: 24px;
`;

const Navbar = () => {
  return (
    <Container
      width="90%"
      margin="0 auto"
      alignItems="center"
      justifyContent="space-between"
      display="flex"
      height="50px"
      padding="36px 0"
    >
      <NavLink href="#home">
        <Text textType="h5" bold color="white">
          HOME
        </Text>
      </NavLink>
      <Container display="flex" alignItems="center">
        <ExtendedNavLink href="#about">
          <Text textType="h6" bold>
            ABOUT
          </Text>
        </ExtendedNavLink>
        <ExtendedNavLink href="#pricing">
          <Text textType="h6" bold>
            PRICING
          </Text>
        </ExtendedNavLink>
        <ExtendedNavLink href="#contact">
          <Text textType="h6" bold>
            CONTACT
          </Text>
        </ExtendedNavLink>
        <StyledButton variant="secondary" onClick={() => alert("Login")}>
          Login
        </StyledButton>
      </Container>
    </Container>
  );
};

export default Navbar;
