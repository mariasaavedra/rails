import React from "react";

import { createRoot } from "react-dom/client";
import App from "./app";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(<App/>);
