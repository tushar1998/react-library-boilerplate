import App from "./App";
import { render, screen } from "@testing-library/preact";

describe("App Tests", () => {
  it("render App", () => {
    render(<App />);
    expect(screen.getByText("Current value: 0")).toBeInTheDocument();
  });
});
