import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useHashScroll } from "./use-hash-scroll";

function HashTestPage({ targetId = "section-one" }) {
  useHashScroll();
  return <div id={targetId}>Target section</div>;
}

describe("useHashScroll", () => {
  const originalMatchMedia = window.matchMedia;
  const originalRaf = window.requestAnimationFrame;
  const originalCancelRaf = window.cancelAnimationFrame;

  beforeEach(() => {
    window.requestAnimationFrame = vi.fn((cb) => {
      cb();
      return 1;
    });
    window.cancelAnimationFrame = vi.fn();
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    window.requestAnimationFrame = originalRaf;
    window.cancelAnimationFrame = originalCancelRaf;
    vi.restoreAllMocks();
  });

  it("scrolls matching element smoothly into view", () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;

    render(
      <MemoryRouter initialEntries={["/work#section-one"]}>
        <HashTestPage targetId="section-one" />
      </MemoryRouter>
    );

    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  it("respects prefers-reduced-motion", () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;
    window.matchMedia = vi.fn().mockReturnValue({ matches: true });

    render(
      <MemoryRouter initialEntries={["/work#section-one"]}>
        <HashTestPage targetId="section-one" />
      </MemoryRouter>
    );

    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: "auto",
      block: "start",
    });
  });

  it("decodes URL-encoded hash fragments", () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;

    render(
      <MemoryRouter initialEntries={["/work#my%20section"]}>
        <HashTestPage targetId="my section" />
      </MemoryRouter>
    );

    expect(scrollIntoView).toHaveBeenCalledTimes(1);
  });

  it("fails safely on malformed percent-encoded hashes and missing targets", () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;

    expect(() =>
      render(
        <MemoryRouter initialEntries={["/work#%E0%A4%A"]}>
          <HashTestPage targetId="section-one" />
        </MemoryRouter>
      )
    ).not.toThrow();

    expect(scrollIntoView).not.toHaveBeenCalled();
  });

  it("cancels pending animation frame on unmount", () => {
    window.requestAnimationFrame = vi.fn(() => 42);

    const { unmount } = render(
      <MemoryRouter initialEntries={["/work#section-one"]}>
        <HashTestPage targetId="section-one" />
      </MemoryRouter>
    );

    unmount();
    expect(window.cancelAnimationFrame).toHaveBeenCalledWith(42);
  });
});
