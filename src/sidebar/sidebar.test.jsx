import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useLocation } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar";

function LocationDisplay() {
  const location = useLocation();
  return (
    <div data-testid="location">
      {location.pathname}
      {location.hash}
    </div>
  );
}

describe("AppSidebar mobile drawer", () => {
  const originalInnerWidth = window.innerWidth;
  const originalMatchMedia = window.matchMedia;

  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 375,
    });
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
  });

  afterEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
    window.matchMedia = originalMatchMedia;
  });

  function renderMobileSidebar() {
    return render(
      <MemoryRouter initialEntries={["/"]}>
        <SidebarProvider>
          <SidebarTrigger />
          <AppSidebar />
          <LocationDisplay />
        </SidebarProvider>
      </MemoryRouter>
    );
  }

  it("opens on trigger click, exposes accessible title and close control, and closes on navigation", async () => {
    const user = userEvent.setup();
    renderMobileSidebar();

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /toggle sidebar/i }));

    const dialog = await screen.findByRole("dialog", { name: /navigation/i });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /raytheon \(2022 - present\)/i })
    );

    expect(screen.getByTestId("location")).toHaveTextContent("/work#raytheon");
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("navigates and closes mobile drawer when clicking a group label", async () => {
    const user = userEvent.setup();
    renderMobileSidebar();

    await user.click(screen.getByRole("button", { name: /toggle sidebar/i }));
    await screen.findByRole("dialog", { name: /navigation/i });

    await user.click(screen.getByRole("button", { name: /^work$/i }));

    expect(screen.getByTestId("location")).toHaveTextContent("/work");
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
