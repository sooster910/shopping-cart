import { Input } from "@chakra-ui/react";
import * as React from "react";
import { DefaultSelect } from "../atoms/DefaultSlect";

export const OptionForms = ({ options, handleChange }) => {
  return (
    <>
      {options.map((option) => {
        return option.type === "select" ? (
          <DefaultSelect
            handleChange={handleChange}
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
