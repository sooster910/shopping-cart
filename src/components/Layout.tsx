import * as React from "react";
import Header from "../layout/Header";
import styled from "@emotion/styled";

interface ILayoutProps {
  children: React.ReactNode;
}

const Main = styled.main`
  max-width: 1022px;
  margin: 0 auto;
`;

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
