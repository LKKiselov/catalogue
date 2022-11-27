// import React from "react";
// import render from "react-dom";
// import { Provider } from "react-redux";
// import App from "./app/App";
// // import store from "./app/store";

// render(
//   <React.StrictMode>
//     <Provider>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./app/App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
