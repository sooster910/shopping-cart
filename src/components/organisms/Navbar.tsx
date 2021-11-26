import styled from "@emotion/styled";
import * as React from "react";

interface NavbarProps {
  children: React.ReactNode;
}
const StyledNav = styled.nav``;

export const Navbar: React.FunctionComponent<NavbarProps> = ({
  children,
  ...props
}) => {
  return <StyledNav>{children}</StyledNav>;
};
