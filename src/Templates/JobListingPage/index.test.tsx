import { shallow, mount } from "enzyme";
import { JobListingPage } from ".";
import { Button } from "../../Components/Button";
import { JobBoardTable } from "../../Components/JobBoardTable";
import { JobHeaderBar } from "../../Components/JobHeaderBar";
import { JobPostingForm } from "../../Components/JobPostingForm";
import { NavigationBar } from "../../Components/NavigationBar";

describe("JobListingPage component tests", () => {
  test("JobListingPage should output all expected Components by default", () => {
    const dom = shallow(<JobListingPage />);

    expect(dom.find(NavigationBar).length).toEqual(1);
    expect(dom.find(JobHeaderBar).length).toEqual(1);
    expect(dom.find(JobBoardTable).length).toEqual(1);
  });

  test("JobListingPage should output form if state is set to add Job", () => {
    const dom = mount(<JobListingPage />);
    
    //simulate state change by clicking Add Job button
    dom.find(Button).at(0).simulate('click');
    expect(dom.find(NavigationBar).length).toEqual(1);
    expect(dom.find(JobHeaderBar).length).toEqual(0);
    expect(dom.find(JobPostingForm).length).toEqual(1);
  });
});
