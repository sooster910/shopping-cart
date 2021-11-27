import * as React from "react";
import { Categories } from "../components/organisms/Categories";
import { SearchInput } from "../components/organisms/SearchInput";
import { ProductLists } from "../components/templates/ProductLists";
import { SearchResult } from "../components/templates/SearchResult";
import { defaultConfig } from "../defaultConfig";

type HomeProps = {
  children?: React.ReactNode;
};

const Home: React.FunctionComponent = ({ children }: HomeProps) => {
  const [categoryId, setCategoryId] = React.useState(
    defaultConfig.defaultCategoryId
  );

  const handleClickCategory = (categoryId) => {
    setCategoryId(categoryId);
  };

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSarchInput = (e) => {
    const { value } = e.target;
    setSearchTerm(value.toLowerCase());
  };
  return (
    <>
      <Categories handleClickCategory={handleClickCategory} />
      <SearchInput handleSearchInput={handleSarchInput} />
      {searchTerm ? (
        <SearchResult categoryId={categoryId} searchTerm={searchTerm} />
      ) : (
        <ProductLists categoryId={categoryId} />
      )}
    </>
  );
};

export default Home;
