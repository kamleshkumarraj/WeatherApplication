import React from "react";
import { createRoot } from "react-dom/client";
import './input.css';
import App from "../Component/App";
// import ReactDOM from "react-dom/client";

const section = document.querySelector(".main-section");

const root = createRoot(section);

root.render(<App/>);