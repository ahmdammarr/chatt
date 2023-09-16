import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { io } from "socket.io-client";

// Create a new Socket.IO client instance and connect it to the server
const socket = io("http://localhost:3001");

// Add an event listener to the client instance for the 'connect' event
socket.on("connect", () => {
  console.log("Successfully connected to the server");
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
