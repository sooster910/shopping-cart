import { getByTestId, render, screen } from "@testing-library/react";
import { DefalutButton } from "./index";
import "@testing-library/jest-dom/extend-expect";
describe("<Button/>", () => {
  it("renders component correctly", () => {
    const { getByTestId } = render(<DefalutButton>{"hi"}</DefalutButton>);
    const BtnEl = getByTestId("default-btn");
    expect(BtnEl.textContent).toBe("hi");

    // expect(BtnEl).toMatchSnapshot();
  });
});
