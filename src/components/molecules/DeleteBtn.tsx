import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import * as React from "react";

type DeleteBtnProps = {
  handleDeleteBtn: (e) => void;
};

export const DeleteBtn = ({ handleDeleteBtn }: DeleteBtnProps) => {
  return (
    <Flex justifyContent={"flex-end"}>
      <IconButton
        textAlign={"right"}
        aria-label="Delete From Cart"
        icon={<DeleteIcon />}
        m={5}
        onClick={handleDeleteBtn}
      />
    </Flex>
  );
};
