import { Input } from "@chakra-ui/react";
import * as React from "react";
import { DefaultSelect } from "../atoms/DefaultSlect";

export const OptionForms = ({ options, handleSelectChange }) => {
  return (
    <>
      {options.map((option) => {
        return option.type === "select" ? (
          <DefaultSelect
            handleChange={handleSelectChange}
            key={option.id}
            id={option.id}
            optionCategoryName={option.optionCategoryName || null}
            type={option.type}
            options={option.options}
          />
        ) : option.type === "input" ? (
          <Input
            mt={5}
            key={option.id}
            placeholder={option.optionCategoryName || null}
            type={option.type}
          />
        ) : null;
      })}
    </>
  );
};
