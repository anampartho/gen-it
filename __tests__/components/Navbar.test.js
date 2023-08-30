import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("renders a navbar", () => {
    render(<Navbar />);

    const logoLink = screen.getByRole("link", { name: "Gen-it" });

    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
