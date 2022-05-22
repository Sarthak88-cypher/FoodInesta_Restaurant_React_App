import { render, screen } from "@testing-library/react";
import AllTablesBooked from "../BookingForm/AllTablesBooked";

describe("Test the AllTablesBooked Component", () => {
  test("AllTablesBooked renders with sorry text in the document", () => {
    render(<AllTablesBooked />);
    const linkElement = screen.getByText(/We are really SORRY!/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("AllTablesBooked renders with all reserved text in the document", () => {
    render(<AllTablesBooked />);
    const linkElement = screen.getByText(/All Tables are reserved for today's dinner./i);
    expect(linkElement).toBeInTheDocument();
  });

  test("AllTablesBooked renders with comeback text in the document", () => {
    render(<AllTablesBooked />);
    const linkElement = screen.getByText(/Please comeback tomorrow for booking./i);
    expect(linkElement).toBeInTheDocument();
  });

  test("AllTablesBooked renders Component with 1 button on the screen", async () => {
    render(<AllTablesBooked />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });
})

