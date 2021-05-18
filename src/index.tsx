import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FilterProvider } from "./providers/FilterProvider";

ReactDOM.render(
  <React.Fragment>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.Fragment>,
  document.getElementById("root")
);
