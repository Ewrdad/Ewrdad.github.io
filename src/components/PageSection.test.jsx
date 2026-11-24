import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PageSection } from "./PageSection";
import { ProjectAccordionItem } from "@/pages/projects/ProjectAccordionItem";

describe("PageSection", () => {
  it("renders title with anchor id, metadata items, and body content", () => {
    render(
      <PageSection
        id="raytheon"
        title="Cyber And Software Academy Enginer"
        meta={["Raytheon", "(2022-2024)"]}
      >
        <p>Experience summary</p>
      </PageSection>
    );

    const heading = screen.getByRole("heading", {
      name: /cyber and software academy enginer/i,
    });
    expect(heading).toHaveAttribute("id", "raytheon");
    expect(heading.className).toContain("scroll-mt-20");
    expect(screen.getByText("Raytheon")).toBeInTheDocument();
    expect(screen.getByText("(2022-2024)")).toBeInTheDocument();
    expect(screen.getByText("Experience summary")).toBeInTheDocument();
  });
});

describe("ProjectAccordionItem", () => {
  it("renders project title and stack tags and toggles accordion content", async () => {
    const user = userEvent.setup();
    render(
      <ProjectAccordionItem
        id="portfolio"
        title="Portfolio"
        stack={["Javascript", "React"]}
      >
        <p>Project goal details</p>
      </ProjectAccordionItem>
    );

    const heading = screen.getByRole("heading", { name: "Portfolio" });
    expect(heading).toHaveAttribute("id", "portfolio");
    expect(screen.getByText("Javascript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();

    const trigger = screen.getByRole("button", { name: /portfolio/i });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Project goal details")).toBeVisible();

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});
