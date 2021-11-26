import { Search2Icon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import * as React from "react";
import { Box } from "@chakra-ui/react";

interface SearchInputProps {
  handleSearchInput: (e) => void;
}

export const SearchInput = ({
  handleSearchInput,
  ...props
}: SearchInputProps) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        borderWidth={"1px"}
        borderRadius={"lg"}
        padding={"1.5rem"}
        maxW="lg"
        margin={"0 auto"}
      >
        <Search2Icon mr={2} />
        <Input placeholder="Basic usage" onChange={handleSearchInput} />
      </Box>
    </>
  );
};
