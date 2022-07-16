import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders hello world as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you as a text if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const textElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(textElement).toBeInTheDocument();
  });

  test("renders changed as a text if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const textElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(textElement).toBeInTheDocument();
  });

  test("does not render It's good to see you as a text if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const textElement = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(textElement).toBeNull();
  });
});
