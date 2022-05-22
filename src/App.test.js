import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test the React App", () => {
  test("navbar renders with Blogs in the document", () => {
    render(<App />);
    const linkElement = screen.getByText(/Blogs/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("navbar renders with About Us in the document", () => {
    render(<App />);
    const linkElement = screen.getByText(/About Us/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("navbar renders with 2 buttons on the screen", async () => {
    render(<App />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });
})

