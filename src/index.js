import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

document.addEventListener("mousemove", (event) => {
  const shadow = document.getElementById("mouse-shadow");

  // Update the position of the shadow to follow the cursor
  shadow.style.left = `${event.pageX}px`;
  shadow.style.top = `${event.pageY}px`;
});
