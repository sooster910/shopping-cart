import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import * as React from "react";
import { Categories } from "../components/organisms/Categories";
import { ProductLists } from "../components/templates/ProductLists";

type HomeProps = {
  children?: React.ReactNode;
};

const Home: React.FunctionComponent = ({ children }: HomeProps) => {
  return (
    <>
      <Heading>Home.Product page</Heading>
      <Categories />
      <ProductLists />
    </>
  );
};

export default Home;
