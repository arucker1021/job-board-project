import { shallow } from "enzyme";
import React from "react";
import { Copy } from "./";

describe("Copy component tests", () => {
  test("Copy should output a p tag with given text", () => {
    const dom = shallow(<Copy>This is a Test</Copy>);

    expect(dom.text()).toEqual("This is a Test");
  });
});
