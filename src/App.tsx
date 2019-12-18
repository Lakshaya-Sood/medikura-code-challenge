import React from "react";

import ErrorBoundary from "./components/ErrorBoundary";
import Routes from "./Routes";

type Props = {};

const App: React.FC<Props> = () => (
  <ErrorBoundary>
    <Routes />
  </ErrorBoundary>
);

export default App;
