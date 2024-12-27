import React from "react";
import { createRoot } from "react-dom/client";
//This has been resolved by using resolve in webpack config else we had to use aliases like ./components/App
import AppComponent from "@/components/App";

createRoot(document.getElementsByName("root")).render(<AppComponent />);
