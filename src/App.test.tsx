import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render an input with the correct placeholder", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add new task/i);
    expect(input).toBeInTheDocument();
  });

  it("should render a button to create new tasks", () => {
    render(<App />);
    const button = screen.getByText(/^Create$/i);
    expect(button).toBeInTheDocument();
  });

  it("should render a button to create new tasks", () => {
    render(<App />);
    const button = screen.getByText(/^Create$/i);
    expect(button).toBeInTheDocument();
  });

  it("should render three tasks", () => {
    render(<App />);
    const task1 = screen.getByText("Search about React Testing Library");
    const task2 = screen.getByText(
      "Create a POC focusing on the React Testing Library"
    );
    const task3 = screen.getByText("Present your research to your peers");
    expect(task1).toBeInTheDocument();
    expect(task2).toBeInTheDocument();
    expect(task3).toBeInTheDocument();
  });

  it("should render 3 checkboxes, 3 remove buttons and 3 check buttons", () => {
    render(<App />);
    const checkboxes = screen.getAllByRole(/checkbox/i);
    const checkButtons = screen.getAllByRole(/check-button/i);
    const removeButtons = screen.getAllByRole(/remove/i);
    expect(checkboxes.length).toBe(3);
    expect(checkButtons.length).toBe(3);
    expect(removeButtons.length).toBe(3);
  });

  it("the first checkbox should be green", () => {
    render(<App />);
    const checkboxes = screen.getAllByRole(/checkbox/i);
    expect(checkboxes[0]).toHaveStyle("color: #90EE90");
    expect(checkboxes[1]).toHaveStyle("color: #D3D3D3");
    expect(checkboxes[2]).toHaveStyle("color: #D3D3D3");
  });

  describe("when check button is clicked", () => {
    it("when button is unchecked", () => {
      render(<App />);
      const buttons = screen.getAllByText("Check");
      const checkboxes = screen.getAllByRole(/checkbox/i);
      fireEvent.click(buttons[0]);
      expect(buttons[0]).toHaveTextContent("Uncheck");
      expect(checkboxes[0]).toHaveStyle("color: #90EE90");
      expect(checkboxes[1]).toHaveStyle("color: #90EE90");
      expect(checkboxes[2]).toHaveStyle("color: #D3D3D3");
    });

    it("when button is checked", () => {
      render(<App />);
      const button = screen.getByText("Uncheck");
      const checkboxes = screen.getAllByRole(/checkbox/i);
      fireEvent.click(button);
      expect(button).toHaveTextContent("Check");
      expect(checkboxes[0]).toHaveStyle("color: #D3D3D3");
      expect(checkboxes[1]).toHaveStyle("color: #D3D3D3");
      expect(checkboxes[2]).toHaveStyle("color: #D3D3D3");
    });
  });

  describe("when remove button is clicked", () => {});

  describe("when create button is clicked", () => {
    it("when input is empty", () => {});
  });
});
