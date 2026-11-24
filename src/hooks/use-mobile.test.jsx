import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useIsMobile } from "./use-mobile";

describe("useIsMobile", () => {
  const originalInnerWidth = window.innerWidth;
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
    window.matchMedia = originalMatchMedia;
  });

  function setupViewport(width) {
    const listeners = [];
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: width,
    });
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: width < 768,
      media: query,
      addEventListener: (_event, cb) => listeners.push(cb),
      removeEventListener: (_event, cb) => {
        const idx = listeners.indexOf(cb);
        if (idx >= 0) listeners.splice(idx, 1);
      },
    }));
    return {
      resizeTo(newWidth) {
        Object.defineProperty(window, "innerWidth", {
          writable: true,
          configurable: true,
          value: newWidth,
        });
        listeners.forEach((cb) => cb());
      },
    };
  }

  it("returns true when viewport is below 768px", () => {
    setupViewport(375);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("returns false when viewport is at or above 768px", () => {
    setupViewport(768);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("updates when viewport crosses the 768px breakpoint", () => {
    const { resizeTo } = setupViewport(1024);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => {
      resizeTo(390);
    });
    expect(result.current).toBe(true);

    act(() => {
      resizeTo(800);
    });
    expect(result.current).toBe(false);
  });

  it("supports legacy matchMedia addListener/removeListener API", () => {
    const listeners = [];
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      addListener: (cb) => listeners.push(cb),
      removeListener: (cb) => {
        const idx = listeners.indexOf(cb);
        if (idx >= 0) listeners.splice(idx, 1);
      },
    }));

    const { result, unmount } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => {
      window.innerWidth = 375;
      listeners.forEach((cb) => cb());
    });
    expect(result.current).toBe(true);

    unmount();
    expect(listeners).toHaveLength(0);
  });

  it("fails safely when window.matchMedia is unavailable", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 375,
    });
    window.matchMedia = undefined;

    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });
});
