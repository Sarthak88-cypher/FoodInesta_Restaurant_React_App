import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import BookingForm from "../BookingForm/Form";

describe("Test the Booking Form Component", () => {
  test("render the Booking Form Component with 1 button on the screen", async () => {
    render(<BookingForm />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });

  test("username input field should accept name", () => {
    render(<BookingForm />);
    const username = screen.getByPlaceholderText("Enter FullName Here");
    userEvent.type(username, "John");
    expect(username.value).not.toMatch("Jack");
  });

  test("phoneNumber input field should accept numbers", () => {
    render(<BookingForm />);
    const mobileNumber = screen.getByPlaceholderText("+91 - Enter Registered Mobile No. Here");
    expect(mobileNumber).toHaveAttribute("type", "phone"); 
  });
});
