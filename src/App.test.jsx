import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "./App";

const routes = [
  { path: "/", expectedText: /code/i },
  { path: "/work", expectedText: /cyber and software academy enginer/i },
  { path: "/certs", expectedText: /solutions architect associate/i },
  { path: "/cpd", expectedText: /bcs membership/i },
  { path: "/projects", expectedText: /jsusedocs/i },
  { path: "/edu", expectedText: /bsc computer security/i },
  { path: "/activities", expectedText: /enactus usw/i },
  { path: "/resources", expectedText: /recomended/i },
];

describe("App routes and interactions", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each(routes)(
    "renders route $path without errors or console warnings",
    ({ path, expectedText }) => {
      const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      render(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getAllByText(expectedText).length).toBeGreaterThan(0);
      expect(errorSpy).not.toHaveBeenCalled();
      expect(warnSpy).not.toHaveBeenCalled();
    }
  );

  it("toggles Home pillars open and closed with accessible aria-pressed state", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const codeToggle = screen.getByRole("button", { name: /code/i });
    expect(codeToggle).toHaveAttribute("aria-pressed", "false");

    await user.click(codeToggle);
    expect(codeToggle).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByText(/understand the technology and talk in real terms/i)
    ).toBeInTheDocument();

    await user.click(codeToggle);
    expect(codeToggle).toHaveAttribute("aria-pressed", "false");
    expect(
      screen.queryByText(/understand the technology and talk in real terms/i)
    ).not.toBeInTheDocument();
  });

  it("falls back to Home on unknown routes and renders feedback link without nested buttons", () => {
    render(
      <MemoryRouter initialEntries={["/non-existent-page"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /code/i })).toBeInTheDocument();
    const feedbackLink = screen.getByRole("link", {
      name: /got feedback\? let me know!/i,
    });
    expect(feedbackLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(feedbackLink.querySelector("button")).toBeNull();
  });

  it("switches Resources tabs and expands accordions cleanly", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/resources"]}>
        <App />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("tab", { name: /self made/i }));
    const deckTrigger = screen.getByRole("button", {
      name: /tackling tdd for ui/i,
    });
    await user.click(deckTrigger);

    const viewLink = screen.getByRole("link", { name: /^view$/i });
    expect(viewLink).toBeVisible();
    expect(viewLink.querySelector("button")).toBeNull();
  });
});
