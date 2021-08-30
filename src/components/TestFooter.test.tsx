import React from "react";
import { render } from "test-utils";
import Component from "./TestFooter";

describe("TestFooter", () => {
  it("renders correctly", () => {
    const screen = render(<Component testProp="Testing Component" />);

    const footer = screen.getByText("Testing Component", { exact: false });

    expect(footer).toBeInTheDocument();
  });
});
