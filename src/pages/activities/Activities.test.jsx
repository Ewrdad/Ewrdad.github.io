import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { Activities } from "./Activities";

describe("Activities page", () => {
  it("renders updated leadership activities, dates, anchors, and safe external links", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/activities"]}>
        <Activities />
      </MemoryRouter>
    );

    const enactusHeading = screen.getByRole("heading", {
      level: 1,
      name: "Enactus USW",
    });
    expect(enactusHeading).toHaveAttribute("id", "enactus");
    expect(screen.getByText("President / Team Leader")).toBeInTheDocument();
    expect(screen.getByText("(Jun 2019 - Jun 2020)")).toBeInTheDocument();

    const cycHeading = screen.getByRole("heading", {
      level: 1,
      name: "Cardiff Youth Council",
    });
    expect(cycHeading).toHaveAttribute("id", "cyc");
    expect(screen.getByText("Vice Chair")).toBeInTheDocument();
    expect(screen.getByText("(Jun 2017 - Jun 2019)")).toBeInTheDocument();

    const mindhubLink = screen.getByRole("link", {
      name: /mindhub: a mental health platform for young people/i,
    });
    expect(mindhubLink).toHaveAttribute("href", "https://mindhub.wales/");
    expect(mindhubLink).toHaveAttribute("target", "_blank");
    expect(mindhubLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(mindhubLink.querySelector("button")).toBeNull();

    const printingHeading = screen.getByRole("heading", {
      level: 1,
      name: "3D Printing Hobbyist",
    });
    expect(printingHeading).toHaveAttribute("id", "3d");

    expect(container.querySelector('[id="enactus"]')).toBeInTheDocument();
    expect(container.querySelector('[id="cyc"]')).toBeInTheDocument();
    expect(container.querySelector('[id="3d"]')).toBeInTheDocument();
  });
});
