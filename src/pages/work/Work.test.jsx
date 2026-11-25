import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { Work } from "./Work";

describe("Work page", () => {
  it("renders updated Raytheon UK and UKAEA experience entries with stable anchors", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/work"]}>
        <Work />
      </MemoryRouter>
    );

    const raytheonHeading = screen.getByRole("heading", {
      level: 1,
      name: "Cyber & Software Academy Engineer",
    });
    expect(raytheonHeading).toHaveAttribute("id", "raytheon");
    expect(screen.getByText("Raytheon UK")).toBeInTheDocument();
    expect(screen.getByText("Full-time")).toBeInTheDocument();
    expect(screen.getByText("(Sep 2022 - Present)")).toBeInTheDocument();

    const ukaeaHeading = screen.getByRole("heading", {
      level: 1,
      name: "Business System Database Administrator",
    });
    expect(ukaeaHeading).toHaveAttribute("id", "ukaea");
    expect(screen.getByText("UK Atomic Energy Authority")).toBeInTheDocument();
    expect(screen.getByText("Internship")).toBeInTheDocument();
    expect(screen.getByText("(Sep 2020 - Sep 2021)")).toBeInTheDocument();

    expect(container.querySelector("#raytheon")).toBeInTheDocument();
    expect(container.querySelector("#ukaea")).toBeInTheDocument();
  });
});
