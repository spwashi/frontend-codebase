import React, { ReactNode } from "react";

export class FormErrorBoundary extends React.Component<{
  handler?: (e: Error | any) => any;
  error?: any;
  children: ReactNode;
}> {
  state = {
    hasError: false,
    error: undefined,
  };

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.error && !this.props.error) {
      this.setState({ error: undefined, hasError: false });
    }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
    if (this.props.handler) {
      this.props.handler(this.state.error);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className="error">
          <strong>something went wrong</strong>
        </p>
      );
    }

    return this.props.children;
  }
}
