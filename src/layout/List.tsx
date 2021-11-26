import * as React from "react";

export const List = (props: {
  items: any;
  renderItem: (item: any) => JSX.Element;
  renderEmpty: JSX.Element;
}) => {
  return !props?.items?.length ? (
    props.renderEmpty
  ) : (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "90%",
        margin: "5rem auto",
        listStyle: "none",
      }}
    >
      {props.items.map((item) => props.renderItem(item))}
    </ul>
  );
};
