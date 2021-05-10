import { mount } from "enzyme";
import React from "react";
import { Heading } from "./";

describe("Heading component tests", () => {
  test("Heading should output a proper header tag with passed in level", () => {
    const dom = mount(<Heading level={3}>This is a Test</Heading>);
    const header = dom.find("h3");
    expect(header.text()).toEqual("This is a Test");
  });
});
