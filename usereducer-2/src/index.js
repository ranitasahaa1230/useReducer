import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import Items from "./items";
import { CounterProvider } from "./counter-context";
import { ItemsProvider } from "./items-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ItemsProvider>
      <CounterProvider>
        <App />
        {/* <Items /> */}
      </CounterProvider>
    </ItemsProvider>
  </StrictMode>,
  rootElement
);
