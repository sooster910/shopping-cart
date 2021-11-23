import { Button } from "@chakra-ui/button";
import * as React from "react";
import { useQuery } from "react-query";
import { List } from "../../layout/List";
import CategoryType from "../../types/Category";

type CategoriesProps = {
  props?: string;
};
// type Category = {
//   name: string;
//   id: string;
// };
const fetchCategories = async () => {
  //   console.log("key", key);
  //   console.log("greeting", greeting);
  const resp = await fetch("https://mock-api.ssomee.com/categories");
  return resp.json();
};
export const Categories = (props: CategoriesProps) => {
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
                size="md"
                height="48px"
                width="200px"
                border="2px"
                borderColor="green.500"
                css={{ display: "inline-block" }}
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
