import { Button } from "@chakra-ui/button";
import { Badge } from "@chakra-ui/layout";
import { useStyleConfig } from "@chakra-ui/system";
import * as React from "react";
import { useQuery } from "react-query";
import { List } from "../../layout/List";
import { SoldOutBadge } from "../atoms/SoldOutBadge";
import { Card } from "../organisms/Card";

interface IProductListsProps {}

const fetchProductsByCategory = async (categoryId = 11, page = 1) => {
  const resp =
    await fetch(`https://mock-api.ssomee.com/products/${categoryId}/${page}?order=date-desc
`);
  return resp.json();
};
export const ProductLists: React.FunctionComponent<IProductListsProps> = (
  props
) => {
  const [categoryId, setCategoryId] = React.useState(11);
  const [page, setPage] = React.useState(1);
  const { isLoading, isError, data, status } = useQuery(
    ["category", categoryId, page],
    () => fetchProductsByCategory(categoryId, page),
    {
      keepPreviousData: true,
    }
  );
  const isNextDisabled = (curPage: number) => curPage === data?.maxPage;
  const isPrevDisabled = (curPage: number) => curPage <= 1;
  return (
    <>
      <h2>Products Lists</h2>
      {isLoading && <div>Loading data...</div>}
      {isError && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <List
            items={data?.products}
            renderEmpty={<p> 상품이 없습니다.</p>}
            renderItem={(item) => (
              <Card
                imageUrl={item.mainImage}
                imageAlt={item.name}
                title={item.name}
                badge={item.soldOut ? <SoldOutBadge /> : null}
                tag={null}
                detail={item.brand?.name}
              />
            )}
          ></List>

          <Button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </Button>
          <span>Current Page: {page}</span>
          <Button
            onClick={() => {
              setPage((old) => old + 1);
            }}
            // Disable the Next Page button until we know a next page is available
            disabled={isNextDisabled(page)}
          >
            Next Page
          </Button>
        </>
      )}
    </>
  );
};
