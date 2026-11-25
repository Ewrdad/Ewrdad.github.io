import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { Edu } from "./Edu";

describe("Edu page", () => {
  it("renders University of South Wales and Cardiff High School entries with stable anchors", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/edu"]}>
        <Edu />
      </MemoryRouter>
    );

    const uniHeading = screen.getByRole("heading", {
      level: 1,
      name: "[2:1] BSc Computer Security",
    });
    expect(uniHeading).toHaveAttribute("id", "uni");
    expect(screen.getByText("University of South Wales")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Computer and Information Systems Security / Information Assurance"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("(2018-2022)")).toBeInTheDocument();
    expect(screen.getByText(/sandwich bachelor's degree/i)).toBeInTheDocument();

    const chsHeading = screen.getByRole("heading", {
      level: 1,
      name: "GCSEs + A levels",
    });
    expect(chsHeading).toHaveAttribute("id", "chs");
    expect(screen.getByText("Cardiff High School")).toBeInTheDocument();
    expect(screen.getByText("(2014-2018)")).toBeInTheDocument();
    expect(screen.getByText(/Business Studies/i)).toBeInTheDocument();

    expect(container.querySelector("#uni")).toBeInTheDocument();
    expect(container.querySelector("#chs")).toBeInTheDocument();
  });
});
