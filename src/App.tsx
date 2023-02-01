import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Wrapper from "./components/Wrapper";
import "./assets/styles/main.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
};

export default App;
