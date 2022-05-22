import { render, screen } from "@testing-library/react";
import Thankyou from "../Thankyou/Thankyou";

describe("Test the Thankyou Card Component", () => {
  test("Thankyou card renders with thank text in the document", () => {
    render(<Thankyou />);
    const linkElement = screen.getByText(/Thank You!/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("Thankyou renders with successfully booked text in the document", () => {
    render(<Thankyou />);
    const linkElement = screen.getByText(/Your Table is successfully booked./i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Thankyou renders with random booking id text in the document", () => {
    render(<Thankyou />);
    const linkElement = screen.getByText(/Your Booking Id /i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Thankyou renders Component with 1 button on the screen", async () => {
    render(<Thankyou />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });
})

