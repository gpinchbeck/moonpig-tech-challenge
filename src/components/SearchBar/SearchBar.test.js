import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  test("SearchBar should render input and search button", () => {
    render(<SearchBar searchToNav={() => {}} />);

    const inputElement = screen.getByPlaceholderText("Search");
    const searchButton = screen.getByTestId("searchButton");

    expect(inputElement).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("SearchBar should update search term on input change", () => {
    const searchToNavMock = jest.fn();
    render(<SearchBar searchToNav={searchToNavMock} />);

    const inputElement = screen.getByPlaceholderText("Search");
    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(inputElement.value).toBe("test");
  });

  test("SearchBar should call searchToNav on search button click", () => {
    const searchToNavMock = jest.fn();
    render(<SearchBar searchToNav={searchToNavMock} />);

    const searchButton = screen.getByTestId("searchButton");
    fireEvent.click(searchButton);

    expect(searchToNavMock).toHaveBeenCalledTimes(1);
  });

  test("SearchBar should call searchToNav and reset search term on close button click", () => {
    const searchToNavMock = jest.fn();
    render(<SearchBar searchToNav={searchToNavMock} />);

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });

    const closeButton = screen.getByTestId("closeButton");
    fireEvent.click(closeButton);

    expect(searchToNavMock).toHaveBeenCalledWith("");
    expect(inputElement.value).toBe("");
  });
});
