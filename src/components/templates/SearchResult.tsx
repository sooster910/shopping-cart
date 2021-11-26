import {
  Box,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
} from "@chakra-ui/react";
import { useQueries, useQuery } from "react-query";
import { fetchProductsByCategory } from "../../api/productAPI";
import { defaultConfig } from "../../defaultConfig";
import { List } from "../../layout/List";
import { formatProductPrice } from "../../utils/formatProductPrice";
import { DefalutSpinner } from "../atoms/DefaultSpinner";
import { SoldOutBadge } from "../atoms/SoldOutBadge";
import { Card } from "../organisms/Card";

const getMaxPageByCategory = async (categoryId) => {
  const resp = await fetch(`${defaultConfig.productUrl}/${Number(
    categoryId
  )}/${Number(1)}?order=date-desc
  `);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  const json = await resp.json();
  return json.maxPage;
};
export const SearchResult = ({ categoryId = 11, searchTerm = "" }) => {
  const {
    isLoading,
    isError,
    status,
    data: maxPage,
  } = useQuery(["list maxpage by categoryId", categoryId], () =>
    getMaxPageByCategory(categoryId)
  );
  //GET totalpage
  const queryResults = useQueries(
    Array.from({ length: maxPage }, (v, i) => i + 1).map((page) => {
      return {
        queryKey: ["page", maxPage, categoryId, page],
        queryFn: () => fetchProductsByCategory(categoryId, page),
      };
    })
  );

  if (queryResults) {
    const a = queryResults.map((result) => result?.data?.products);
    const filteredArr = a.length > 1 ? a[0]?.concat(...a.slice(1)) : a[0];

    const search = filteredArr?.filter((item) =>
      item?.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    return (
      <>
        {isLoading && <DefalutSpinner />}

        {isError && <span>Error: Fail to fetch data </span>}
        {status === "success" && (
          <List
            items={search}
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
                  <Box>
                    <StatGroup>
                      <Stat>
                        <StatHelpText>
                          original price
                          {formatProductPrice(item.originalPrice)}
                        </StatHelpText>
                      </Stat>
                      <Stat>
                        <StatHelpText>
                          ssomee price
                          {formatProductPrice(item.originalPrice) >
                            formatProductPrice(item.ssomeePrice) && (
                            <StatArrow type="decrease" />
                          )}
                          {formatProductPrice(item.ssomeePrice)}
                        </StatHelpText>
                      </Stat>
                    </StatGroup>
                  </Box>
                )}
              </Card>
            )}
          ></List>
        )}
      </>
    );
  }
};
