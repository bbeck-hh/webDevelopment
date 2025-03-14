import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    render(<Input labelText="Name" placeholder="Enter your name" name="name" />);

    const label = screen.getByLabelText("Name");
    const input = screen.getByPlaceholderText("Enter your name");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", "name");
    expect(input).toHaveAttribute("name", "name");
    expect(input).toHaveAttribute("type", "text");
});

test("calls callback on every user input", async () => {
    // Mock the onChange function
    const handleChange = jest.fn();

    // Render the Input component with the mocked onChange function
    render(<Input labelText="Name" placeholder="Enter your name" name="name" onChange={handleChange} />);

    const input = screen.getByPlaceholderText("Enter your name");
    await userEvent.type(input, "Karl Kartoffel");

    expect(input).toHaveValue("Karl Kartoffel");
    // The onChange function should have been called once for every character typed
    expect(handleChange).toHaveBeenCalledTimes(14);
});
