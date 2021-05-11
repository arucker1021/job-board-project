import { mount, shallow } from "enzyme";
import React from "react";
import { Button } from "../Button";
import { Copy } from "../Copy";
import { JobBoardTable } from ".";
import { Heading } from "../Heading";
import { ScreenReaderText } from "../ScreenReaderText";

describe("JobBoardTable component tests", () => {
  const clicked = jest.fn();

  test("JobBoardTable should output a message to add jobs if none are present", () => {
    const dom = mount(
      <JobBoardTable jobs={[]} jobsHeaders={[]} buttonHandler={clicked} />
    );

    expect(dom.find("h2").at(0).text()).toEqual(
      "No jobs found, please add one"
    );
  });

  test("JobBoardTable should output 2 table rows of jobs if there are 2 jobs passed in", () => {
    const dom = mount(
      <JobBoardTable
        jobs={[
          {
            jobTitle: "spider chief",
            jobLocation: "spider town",
            jobPosted: "previously",
            jobSponsorship: "spiders don't get sponsorship",
            jobStatus: "no spiders",
            editable: false,
          },
          {
            jobTitle: "spider chief",
            jobLocation: "spider town",
            jobPosted: "previously",
            jobSponsorship: "spiders don't get sponsorship",
            jobStatus: "no spiders",
            editable: false,
          },
        ]}
        jobsHeaders={[]}
        buttonHandler={clicked}
      />
    );

    expect(dom.find('.table-row').length).toEqual(2);
    expect(dom.find(Heading).at(0).text()).toEqual('spider chief');
  });

  test("JobBoardTable should output header columns", () => {
    const dom = mount(
      <JobBoardTable
        jobs={[
          {
            jobTitle: "spider chief",
            jobLocation: "spider town",
            jobPosted: "previously",
            jobSponsorship: "spiders don't get sponsorship",
            jobStatus: "no spiders",
            editable: false,
          },
          {
            jobTitle: "spider chief",
            jobLocation: "spider town",
            jobPosted: "previously",
            jobSponsorship: "spiders don't get sponsorship",
            jobStatus: "no spiders",
            editable: false,
          },
        ]}
        jobsHeaders={[{
          columns: 5, title:"Job Title"
        }, {
          columns: 4, title:"Posted", screenReader:true
        }]}
        buttonHandler={clicked}
      />
    );

    expect(dom.find('.table-header div').length).toEqual(2);
    expect(dom.find(ScreenReaderText).length).toEqual(1);
  });
});
