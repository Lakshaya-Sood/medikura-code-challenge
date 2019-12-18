import React from "react";

type Props = {
  children: React.ReactNode;
};
type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError = (error: Error): State => {
    // log error on cosole or send the log to remote server
    console.log(error);

    return { hasError: true };
  };

  render = () => {
    const FallBackUI = <h1>Something went wrong.</h1>;
    return this.state.hasError ? FallBackUI : this.props.children;
  };
}

export default ErrorBoundary;
