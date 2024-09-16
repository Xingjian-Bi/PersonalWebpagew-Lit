// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import "./index.css";
import "./App.ts";

// Assuming you have <div id="root"></div> in your HTML, attach the app there
const rootElement = document.getElementById("root");
if (rootElement) {
  const appElement = document.createElement("my-app");
  rootElement.appendChild(appElement);
}

// If you need to add performance logging, you can implement it here, similar to reportWebVitals.
