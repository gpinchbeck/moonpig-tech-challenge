import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";

test("NavBar should render the logo", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
  const logoElement = screen.getByAltText("Moonpig logo");

  expect(logoElement).toBeInTheDocument();
});

test("NavBar should render the search bar when hasSearch is true", () => {
  render(
    <BrowserRouter>
      <NavBar hasSearch={true} />
    </BrowserRouter>
  );
  const searchContainerElement = screen.getByRole("search");

  expect(searchContainerElement).toBeInTheDocument();
});

test("NavBar should navigate to the home page when the logo is clicked", () => {
  const MockComponent = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/");
    };
    return <NavBar handleClick={handleClick} />;
  };

  render(
    <BrowserRouter>
      <MockComponent />
    </BrowserRouter>
  );

  const logoElement = screen.getByAltText("Moonpig logo");

  fireEvent.click(logoElement);
  expect(window.location.pathname).toBe("/");
});

test("NavBar should display the route path when hasRoute is true", () => {
  render(
    <BrowserRouter>
      <NavBar hasRoute={true} item={{ Title: "Some Title" }} />
    </BrowserRouter>
  );
  const routePathElement = screen.getByText("All Cards");

  expect(routePathElement).toBeInTheDocument();
});
