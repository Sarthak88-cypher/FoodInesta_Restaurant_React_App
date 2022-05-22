import { render, screen } from "@testing-library/react";
import CancelCard from "../Cancel/CancelCard";

describe("Test the CancelCard Component", () => {
  test("CancelCard renders with done text in the document", () => {
    render(<CancelCard />);
    const linkElement = screen.getByText(/It's Done/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("CancelCard renders with successfully cancelled text in the document", () => {
    render(<CancelCard />);
    const linkElement = screen.getByText(/Your Table is successfully cancelled./i);
    expect(linkElement).toBeInTheDocument();
  });

  test("CancelCard renders with comeback text in the document", () => {
    render(<CancelCard />);
    const linkElement = screen.getByText(/We hope you visit us back soon!/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("CancelCard renders Component with 1 button on the screen", async () => {
    render(<CancelCard />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });
})

