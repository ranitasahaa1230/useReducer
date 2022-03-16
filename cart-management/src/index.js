import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import App1 from "./App1";
import { CartProvider } from "./cart-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartProvider>
      {/* <App /> */}
      <App1 />
    </CartProvider>
  </StrictMode>,
  rootElement
);
