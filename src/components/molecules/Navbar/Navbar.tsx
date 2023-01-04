import React, { useState } from "react";

import styled from "styled-components";

import { useNavigate, useLocation } from "react-router-dom";

import { Container, Text, Button } from "../../atoms";
import { useResponsive } from "../../../hooks";

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

const ResponsiveDropdownContainer = styled(Container)`
  z-index: 1000;
  background: white;
  margin-top: 100px;
  position: absolute;
  right: 20px;
  top: -82px;
  border-radius: 8px;
  box-shadow: 11px 10px 36px -11px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 11px 10px 36px -11px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 11px 10px 36px -11px rgba(0, 0, 0, 0.36);
`;

const ResponsiveNavLink = styled(NavLink)`
  padding: 8px 32px;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { isMobile, isTablet } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <NavLink
        href={!isHomePage ? undefined : "#home"}
        onClick={() => (!isHomePage ? navigate("/") : null)}
      >
        <Text textType="h5" bold color="white">
          HOME
        </Text>
      </NavLink>
      {!(isMobile || isTablet) ? (
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
          <StyledButton variant="secondary" onClick={() => navigate("/login")}>
            Login
          </StyledButton>
        </Container>
      ) : (
        <Container onClick={() => setIsMenuOpen(true)} padding="0 12px">
          <Text textType="h4">=</Text>
        </Container>
      )}
      {(isMobile || isTablet) && isMenuOpen && (
        <ResponsiveDropdownContainer
          display="flex"
          flexDirection="column"
          padding="8px 0"
        >
          <Container
            width="100%"
            display="flex"
            justifyContent="space-between"
            padding="0 12px"
          >
            <div />
            <Container onClick={() => setIsMenuOpen(false)}>
              <Text textType="h6">X</Text>
            </Container>
          </Container>
          <ResponsiveNavLink href="#about">
            <Text textType="b2">About</Text>
          </ResponsiveNavLink>
          <ResponsiveNavLink href="#pricing">
            <Text textType="b2">Pricing</Text>
          </ResponsiveNavLink>
          <ResponsiveNavLink href="#contact">
            <Text textType="b2">Contact</Text>
          </ResponsiveNavLink>
        </ResponsiveDropdownContainer>
      )}
    </Container>
  );
};

export default Navbar;
