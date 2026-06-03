import { Component, type ErrorInfo, type ReactNode } from 'react';

interface VisitorCounterErrorBoundaryProps {
  children: ReactNode;
}

interface VisitorCounterErrorBoundaryState {
  hasError: boolean;
}

export class VisitorCounterErrorBoundary extends Component<
  VisitorCounterErrorBoundaryProps,
  VisitorCounterErrorBoundaryState
> {
  state: VisitorCounterErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): VisitorCounterErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Visitor counter render error', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <aside className="visitor-counter" aria-label="Portfolio visitor counter unavailable">
          <span className="visitor-counter-icon" aria-hidden="true">
            !
          </span>
          <span className="visitor-counter-copy">
            <span className="visitor-counter-label">AWS Live Counter</span>
            <span className="visitor-counter-value">Unavailable</span>
          </span>
        </aside>
      );
    }

    return this.props.children;
  }
}
