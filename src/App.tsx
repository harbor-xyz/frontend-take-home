import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Wrapper from "./components/Wrapper";
import "./assets/styles/main.scss";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Wrapper />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
