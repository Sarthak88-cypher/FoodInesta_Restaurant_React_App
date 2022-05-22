import { render, screen } from "@testing-library/react";
import BookingNotFound from "../Cancel/BookingNotFound";

describe("Test the BookingNotFound Component", () => {
  test("BookingNotFound renders with oops text in the document", () => {
    render(<BookingNotFound />);
    const linkElement = screen.getByText(/Oops Not Found !!/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("BookingNotFound renders with booking not found text in the document", () => {
    render(<BookingNotFound />);
    const linkElement = screen.getByText(/Your Table Booking doesn't exist!./i);
    expect(linkElement).toBeInTheDocument();
  });

  test("BookingNotFound renders with request to enter correct mobile number in the document", () => {
    render(<BookingNotFound />);
    const linkElement = screen.getByText(/Try with the correct registerd Mobile No./i);
    expect(linkElement).toBeInTheDocument();
  });

  test("BookingNotFound renders Component with 1 button on the screen", async () => {
    render(<BookingNotFound />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });
})

