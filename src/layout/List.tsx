import * as React from "react";
import { ProductPreview } from "../types/PreviewProduct";

interface ListType extends ProductPreview {
  id: string;
}

export const List = <ItemType extends ListType>(props: {
  items: ItemType[];
  renderItem: (item: ItemType) => JSX.Element;
  renderEmpty: JSX.Element;
}) => {
  return !props.items.length ? (
    props.renderEmpty
  ) : (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "90%",
        margin: "0 auto",
        listStyle: "none",
      }}
    >
      {props.items.map((item) => props.renderItem(item))}
    </ul>
  );
};
