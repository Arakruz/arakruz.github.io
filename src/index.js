import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import App from "./App";
import "./index.scss";
import { createRoot } from "react-dom/client";

/* GLOBAL VARIABLES */

window.$primaryLanguage = "en";
window.$secondaryLanguage = "pt-br";
window.$primaryLanguageIconId = "primary-lang-icon";
window.$secondaryLanguageIconId = "secondary-lang-icon";


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);

