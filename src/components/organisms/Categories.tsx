import * as React from "react";
import { useQuery } from "react-query";
import { Button } from "@chakra-ui/button";
import { List } from "../../layout/List";
import { fetchCategories } from "../../api/categoryAPI";

type CategoriesProps = {
  props?: string;
  handleClickCategory?: (e) => void;
};

export const Categories = ({ handleClickCategory }: CategoriesProps) => {
  const { data, status } = useQuery("categories", fetchCategories);
  return (
    <>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <List
          items={data?.filter((category: { id: number }) => category.id !== 0)}
          renderEmpty={<p>Category 내용이 없습니다.</p>}
          renderItem={(item) => (
            <li>
              <Button
                _active={{
                  bg: "teal",
                  transform: "scale(0.98)",
                  borderColor: "teal",
                }}
                height="48px"
                width="200px"
                border="2px"
                borderColor="green.500"
                css={{ display: "inline-block" }}
                onClick={() => handleClickCategory(item.id)}
              >
                {item?.name}
              </Button>
            </li>
          )}
        />
      )}
    </>
  );
};
