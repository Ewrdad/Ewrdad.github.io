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
  it("handles empty or string meta gracefully", () => {
    render(
      <PageSection title="Standalone Section" meta="Single Meta">
        <p>Body text</p>
      </PageSection>
    );

    expect(
      screen.getByRole("heading", { name: /standalone section/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Single Meta")).toBeInTheDocument();
  });

  it("renders optional status badge when provided", () => {
    const { rerender } = render(
      <PageSection
        id="comptia"
        title="CompTIA Security+ ce Certification"
        meta={["CompTIA", "Issued Apr 2023 · Expired Apr 2026"]}
        badge={{ label: "Expired", variant: "expired" }}
      >
        <p>Certification details</p>
      </PageSection>
    );

    const expiredBadge = screen.getByText("Expired");
    expect(expiredBadge).toBeInTheDocument();
    expect(expiredBadge.className).toContain("bg-amber-950");

    rerender(
      <PageSection title="Active Item" badge="Active">
        <p>Active details</p>
      </PageSection>
    );

    expect(screen.getByText("Active")).toBeInTheDocument();

    rerender(
      <PageSection
        title="Fallback Variant"
        badge={{ label: "Custom", variant: "unknown-variant" }}
      >
        <p>Fallback details</p>
      </PageSection>
    );

    const customBadge = screen.getByText("Custom");
    expect(customBadge.className).toContain("bg-slate-900");
  });

  it("omits blank badges, blank ids, and invalid metadata entries", () => {
    const { container } = render(
      <PageSection
        id="   "
        title="Clean Section"
        meta={["   ", null, false, { invalid: true }, "Valid Meta"]}
        badge={{ label: "   ", variant: "expired" }}
      >
        <p>Body text</p>
      </PageSection>
    );

    const heading = screen.getByRole("heading", { name: "Clean Section" });
    expect(heading).not.toHaveAttribute("id");
    expect(screen.getByText("Valid Meta")).toBeInTheDocument();
    expect(container.querySelector(".rounded-full")).toBeNull();
  });
});

describe("ProjectAccordionItem", () => {
  it("renders project title and stack tags with valid button nesting and toggles accordion content", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <ProjectAccordionItem
        id="portfolio"
        title="Portfolio"
        stack={["Javascript", "React"]}
      >
        <p>Project goal details</p>
      </ProjectAccordionItem>
    );

    const anchorItem = container.querySelector("#portfolio");
    expect(anchorItem).toBeInTheDocument();
    expect(anchorItem.className).toContain("scroll-mt-20");

    const trigger = screen.getByRole("button", { name: /portfolio/i });
    expect(trigger.querySelector("h1, h2, h3, h4, h5, h6")).toBeNull();
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText("Javascript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Project goal details")).toBeVisible();

    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});
