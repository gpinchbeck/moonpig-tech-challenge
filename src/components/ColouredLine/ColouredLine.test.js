import { render, screen } from "@testing-library/react";
import { ColouredLine } from "./ColouredLine";

test("ColouredLine should render with the correct color", () => {
  const colour = "red";
  render(<ColouredLine colour={colour} />);
  const hrElement = screen.getByRole("separator");

  expect(hrElement).toBeInTheDocument();
  expect(hrElement).toHaveStyle(`
    color: ${colour}; 
    background-color: ${colour};
    `);
});
