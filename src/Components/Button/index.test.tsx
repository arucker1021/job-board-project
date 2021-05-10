import { mount } from "enzyme";
import React from "react";
import { Button } from "./";

describe("Button component tests", () => {
  test("Button call event handler on click", () => {
    const clicked = jest.fn();

    const dom = mount(
      <Button color={"primary"} onClick={clicked}>
        So Pressed
      </Button>
    );
    const button = dom.find("button").simulate("click");

    expect(clicked.mock.calls.length).toEqual(1);
  });
});
