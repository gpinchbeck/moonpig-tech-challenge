import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

test("Button should render with correct label", () => {
  const label = "Button";
  render(<Button label={label} />);
  const buttonLabel = screen.getByText(label);

  expect(buttonLabel).toBeInTheDocument();
});

test("Button should call onclick handler when clicked", () => {
  const onClickMock = jest.fn();
  render(<Button onClick={onClickMock} label={"Click Me"} />);
  const buttonElement = screen.getByText("Click Me");
  fireEvent.click(buttonElement);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});
