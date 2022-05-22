import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CancelForm from "../Cancel/CancelForm";

describe("Test the Cancel Form Component", () => {
  test("render the Cancel Form Component with 1 button on the screen", async () => {
    render(<CancelForm />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });

  test("phoneNumber input field should accept numbers", () => {
    render(<CancelForm />);
    const mobileNumber = screen.getByPlaceholderText("+91 - Enter Registered Mobile No. Here");
    expect(mobileNumber).toHaveAttribute("type", "phone"); 
  });
});
