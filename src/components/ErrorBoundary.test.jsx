import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ErrorBoundary } from "./ErrorBoundary";

function Boom({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error("Simulated render crash");
  }
  return <div>Recovered content</div>;
}

describe("ErrorBoundary", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders children when no error occurs", () => {
    render(
      <ErrorBoundary>
        <Boom shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Recovered content")).toBeInTheDocument();
  });

  it("catches render errors and recovers via Try again button", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const onError = vi.fn();
    const onReset = vi.fn();
    const user = userEvent.setup();

    let shouldThrow = true;
    const { rerender } = render(
      <ErrorBoundary onError={onError} onReset={onReset}>
        <Boom shouldThrow={shouldThrow} />
      </ErrorBoundary>
    );

    expect(screen.getByRole("alert")).toHaveTextContent(/something went wrong/i);
    expect(onError).toHaveBeenCalledTimes(1);

    shouldThrow = false;
    rerender(
      <ErrorBoundary onError={onError} onReset={onReset}>
        <Boom shouldThrow={shouldThrow} />
      </ErrorBoundary>
    );

    await user.click(screen.getByRole("button", { name: /try again/i }));
    expect(onReset).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Recovered content")).toBeInTheDocument();
  });

  it("resets automatically when resetKey changes", () => {
    vi.spyOn(console, "error").mockImplementation(() => {});

    const { rerender } = render(
      <ErrorBoundary resetKey="/broken">
        <Boom shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();

    rerender(
      <ErrorBoundary resetKey="/healthy">
        <Boom shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    expect(screen.getByText("Recovered content")).toBeInTheDocument();
  });
});
