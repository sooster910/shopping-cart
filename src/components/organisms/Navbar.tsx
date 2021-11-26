import styled from "@emotion/styled";
import * as React from "react";

interface NavbarProps {
  children: React.ReactNode;
}
const StyledNav = styled.nav`
  width: 100%;
  background: #f6fafa;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const Navbar: React.FunctionComponent<NavbarProps> = ({
  children,
  ...props
}) => {
  return <StyledNav>{children}</StyledNav>;
};
