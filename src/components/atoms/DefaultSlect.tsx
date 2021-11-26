import { Select } from "@chakra-ui/react";

import * as React from "react";

type selectOptions = {
  price?: number;
  id?: string;
  name?: string;
};

interface DefaultSelectProps {
  id?: string;
  handleChange?: (e) => void;
  optionCategoryName: string;
  type?: string;
  options?: selectOptions[];
}

export const DefaultSelect = ({
  handleChange,
  ...props
}: DefaultSelectProps) => {
  return (
    <Select
      id={props.id}
      onChange={handleChange}
      placeholder={props.optionCategoryName}
      name={props.optionCategoryName}
      {...props}
    >
      {props.options?.length &&
        props.options.map((option) => (
          <option
            key={option?.id}
            data-option={option?.name}
            value={option?.price}
          >
            {option?.name} &#43;
            {option?.price}
          </option>
        ))}
    </Select>
  );
};
