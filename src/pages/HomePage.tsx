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

  const [searchTerm, setSearchTem] = React.useState("");

  const handleSarchInput = (e) => {
    let value = e.target.value.toLowerCase();
    setSearchTem(value);
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
