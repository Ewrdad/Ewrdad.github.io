import { Component } from "react";
import { Button } from "@/components/ui/button";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.handleReset = this.handleReset.bind(this);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (typeof this.props.onError === "function") {
      this.props.onError(error, errorInfo);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false });
    }
  }

  handleReset() {
    this.setState({ hasError: false });
    if (typeof this.props.onReset === "function") {
      this.props.onReset();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section
          role="alert"
          className="rounded-md border-2 border-red-900 bg-slate-900/80 p-6 text-white space-y-4"
        >
          <h2 className="text-2xl font-bold">Something went wrong</h2>
          <p className="text-base leading-relaxed">
            This section failed to load. You can try again or return to the home
            page.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              onClick={this.handleReset}
              className="whitespace-normal h-auto py-2"
            >
              Try again
            </Button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
