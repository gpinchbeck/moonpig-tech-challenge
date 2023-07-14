import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("Card should render with the correct src, alt, and width attributes", () => {
  const src = "http://localhost/images/moonpig-logo-thumb.png";
  const alt = "Example Card";
  const width = 200;
  render(<Card src={src} alt={alt} width={width} />);
  const cardImage = screen.getByAltText(alt);

  expect(cardImage).toBeInTheDocument();
  expect(cardImage.src).toContain(src);
  expect(cardImage.alt).toBe(alt);
  expect(cardImage.width).toBe(width);
});
