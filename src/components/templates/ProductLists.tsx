import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/react";
import * as React from "react";
import { useQuery } from "react-query";
import { List } from "../../layout/List";
import { SoldOutBadge } from "../atoms/SoldOutBadge";
import { Card } from "../organisms/Card";
import { DefalutSpinner } from "../atoms/DefaultSpinner";
import { Box, Stat, StatGroup, StatHelpText } from "@chakra-ui/react";
import { formatProductPrice } from "../../utils/formatProductPrice";
import { fetchProductsByCategory } from "../../api/productAPI";
type ProductListsProps = {
  categoryId?: number;
};

export const ProductLists = ({ categoryId }: ProductListsProps) => {
  const [page, setPage] = React.useState(1);
  const { isLoading, isError, data, status } = useQuery(
    ["category", categoryId, page],
    () => fetchProductsByCategory(categoryId, page),
    {
      keepPreviousData: true,
    }
  );
  const isNextDisabled = (curPage: number) =>
    curPage === data?.maxPage || data?.maxPage === 0;

  return (
    <>
      {isLoading && <DefalutSpinner />}

      {isError && <span>Error: Fail to fetch data </span>}
      {status === "success" && (
        <>
          <Text fontSize="2xl">{data?.category?.name}</Text>
          <List
            items={data?.products}
            renderEmpty={<p> 상품이 없습니다.</p>}
            renderItem={(item) => (
              <Card
                id={item.prefix}
                imageUrl={item.mainImage}
                imageAlt={item.name}
                title={item.name}
                badge={item.soldOut ? <SoldOutBadge /> : null}
                tag={null}
                detail={item.brand?.name}
              >
                {item.originalPrice && item.ssomeePrice && (
                  <StatGroup>
                    <Stat>
                      <StatHelpText as="del">
                        original price
                        {formatProductPrice(item.originalPrice)}
                      </StatHelpText>
                    </Stat>
                    <Stat>
                      <StatHelpText>
                        ssomee price
                        {formatProductPrice(item.ssomeePrice)}
                      </StatHelpText>
                    </Stat>
                  </StatGroup>
                )}
              </Card>
            )}
          ></List>

          <Box textAlign={"center"} margin={"2rem auto"}>
            <Button
              mr={2}
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={page === 1}
            >
              Previous Page
            </Button>
            <span>
              Current Page: {page} of {data?.maxPage}
            </span>
            <Button
              ml={2}
              onClick={() => {
                setPage((old) => old + 1);
              }}
              // Disable the Next Page button until we know a next page is available
              disabled={isNextDisabled(page)}
            >
              Next Page
            </Button>
          </Box>
        </>
      )}
    </>
  );
};
