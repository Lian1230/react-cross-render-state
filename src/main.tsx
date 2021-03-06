import React from "react";
import ReactDOM from "react-dom/client";
import Core from "./core";

import "./index.css";
import "virtual:windi.css";
import { CountProvider } from "./count-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CountProvider>
      <Core />
    </CountProvider>
  </React.StrictMode>
);
