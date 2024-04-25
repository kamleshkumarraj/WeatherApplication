import React from "react";
import { createRoot }  from "react-dom/client";
import App from "../Component/App";

const section = document.querySelector(".main-section");


const root = createRoot(section);

root.render(<App/>);