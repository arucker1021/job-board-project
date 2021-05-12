import { mount } from "enzyme";
import React from "react";
import { Button } from "../Button";
import { Copy } from "../Copy";
import { JobPostingForm } from ".";

describe("JobPostingForm component tests", () => {
  const added = jest.fn();
  const edit = jest.fn();
  const canceled = jest.fn();

  const jobFieldMock = [
    {
      name: "Job Title",
      helperText: "What is the name of the role?",
      placeholderText: "e.g. Software Engineer",
      mappedField: "jobTitle",
    },
    {
      name: "Location",
      helperText: "Where is this job?",
      placeholderText: "e.g. Chicago, IL",
      mappedField: "jobLocation",
    },
    {
      name: "Sponsorship",
      helperText: "Do you want to promote this job?",
      options: ["Free", "Sponsored"],
      mappedField: "jobSponsorship",
    },
    {
      name: "Status",
      helperText: "Are you ready to make this job listing public?",
      options: ["Open", "Closed", "Paused"],
      mappedField: "jobStatus",
    },
  ];

  test("JobPostingForm should output an h1 with expected text for editing", () => {
    const dom = mount(
      <JobPostingForm
        addJob={added}
        editJob={edit}
        cancelPosting={canceled}
        isAdding={false}
        jobFields={jobFieldMock}
      />
    );

    expect(dom.find("h1").at(0).text()).toEqual("Edit Job");
  });

  test("JobPostingForm should output an h1 with expected text for adding", () => {
    const dom = mount(
      <JobPostingForm
        addJob={added}
        editJob={edit}
        cancelPosting={canceled}
        isAdding={true}
        jobFields={jobFieldMock}
      />
    );

    expect(dom.find("h1").at(0).text()).toEqual("Add a new Job");
  });

  test("JobPostingForm should fill in job values to fields when editing and job is passed in", () => {
    const dom = mount(
      <JobPostingForm
        addJob={added}
        editJob={edit}
        cancelPosting={canceled}
        isAdding={false}
        jobFields={jobFieldMock}
        job={{
          jobTitle: "Spider CEO",
          jobLocation: "spidertown",
          jobPosted: "10/24/2020",
          jobSponsorship: "Free",
          jobStatus: "Open",
          editable: true,
        }}
      />
    );

    const jobTitleValue = dom.find("input#jobTitle").at(0).props().defaultValue;
    const jobLocationValue = dom
      .find("input#jobLocation")
      .at(0)
      .props().defaultValue;
    const jobSponsorshipValue = dom
      .find("select#jobSponsorship")
      .at(0)
      .props().defaultValue;
    const jobStatusValue = dom
      .find("select#jobStatus")
      .at(0)
      .props().defaultValue;

    expect(jobTitleValue).toEqual("Spider CEO");
    expect(jobLocationValue).toEqual("spidertown");
    expect(jobSponsorshipValue).toEqual("Free");
    expect(jobStatusValue).toEqual("Open");
  });

  test("JobPostingForm should call addJob if Adding a field and submit is clicked", () => {
    const dom = mount(
      <JobPostingForm
        addJob={added}
        editJob={edit}
        cancelPosting={canceled}
        isAdding={true}
        jobFields={jobFieldMock}
        job={{
          jobTitle: "Spider CEO",
          jobLocation: "spidertown",
          jobPosted: "10/24/2020",
          jobSponsorship: "Free",
          jobStatus: "Open",
          editable: true,
        }}
      />
    );

    dom.find('form').at(0).simulate("submit");
    expect(dom.find(Button).at(1).text()).toEqual("Add Job");
    expect(added.mock.calls.length).toEqual(1);
    expect(edit.mock.calls.length).toEqual(0);
    expect(canceled.mock.calls.length).toEqual(0);
  });

  test("JobPostingForm should call editJob if editing a job and submit is clicked", () => {
    const dom = mount(
      <JobPostingForm
        addJob={added}
        editJob={edit}
        cancelPosting={canceled}
        isAdding={false}
        jobFields={jobFieldMock}
        job={{
          jobTitle: "Spider CEO",
          jobLocation: "spidertown",
          jobPosted: "10/24/2020",
          jobSponsorship: "Free",
          jobStatus: "Open",
          editable: true,
        }}
      />
    );

    dom.find('form').at(0).simulate("submit");
    expect(dom.find(Button).at(1).text()).toEqual("Save");
    expect(edit.mock.calls.length).toEqual(1);
    expect(added.mock.calls.length).toEqual(0);
    expect(canceled.mock.calls.length).toEqual(0);
  });

  test("JobPostingForm should call cancelPosting function if Cancel is Clicked", () => {
    const dom = mount(
      <JobPostingForm
        addJob={added}
        editJob={edit}
        cancelPosting={canceled}
        isAdding={false}
        jobFields={jobFieldMock}
        job={{
          jobTitle: "Spider CEO",
          jobLocation: "spidertown",
          jobPosted: "10/24/2020",
          jobSponsorship: "Free",
          jobStatus: "Open",
          editable: true,
        }}
      />
    );

    dom.find(Button).at(0).simulate("click");
    expect(canceled.mock.calls.length).toEqual(1);
    expect(added.mock.calls.length).toEqual(0);
    expect(edit.mock.calls.length).toEqual(0);
  });
});
