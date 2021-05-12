import { render } from "@testing-library/react";
import { JobListingPage } from "./Templates/JobListingPage";

describe("App Render", () => {
  test("renders JobListingPage", () => {
    render(<JobListingPage />);
    const headerElement = document.querySelector("h1");
    expect(headerElement).toBeInTheDocument();
  });
});
