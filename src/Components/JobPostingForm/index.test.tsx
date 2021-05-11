import { mount } from "enzyme";
import React from "react";
import { Button } from "../Button";
import { Copy } from "../Copy";
import { JobPostingForm } from ".";

describe("JobHeaderBar component tests", () => {
  const clicked = jest.fn();

  test("JobHeaderBar should output an h1", () => {
    const dom = mount(
      <JobHeaderBar
        headingText={"Spiders"}
        subheadingText={"45 spiders in your area"}
        buttonFunction={clicked}
        buttonText={"Add Spiders"}
      />
    );

    expect(dom.find("h1").at(0).length).toEqual(1);
  });

  test("JobHeaderBar button should have expected text", () => {
    const dom = mount(
      <JobHeaderBar
        headingText={"Spiders"}
        subheadingText={"45 spiders in your area"}
        buttonFunction={clicked}
        buttonText={"Add Spiders"}
      />
    );

    expect(dom.find(Button).at(0).text()).toEqual("Add Spiders");
  });

  test("JobHeaderBar subheaderText should have expected text", () => {
    const dom = mount(
      <JobHeaderBar
        headingText={"Spiders"}
        subheadingText={"45 spiders in your area"}
        buttonFunction={clicked}
        buttonText={"Add Spiders"}
      />
    );

    expect(dom.find(Copy).at(0).text()).toEqual("45 spiders in your area");
  });
});
