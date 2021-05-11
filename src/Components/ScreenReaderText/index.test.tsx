import { shallow } from "enzyme";
import React from "react";
import { ScreenReaderText } from ".";

describe("ScreenReaderText component tests", () => {
  test("ScreenReaderText should output a span tag with given text", () => {
    const dom = shallow(<ScreenReaderText>This is a Test</ScreenReaderText>);

    expect(dom.text()).toEqual("This is a Test");
  });
});
