"use strict";

import { addPage, initRouter } from "./utils.js";
import { home } from "./pages/home.js";
import { about } from "./pages/about.js";
import { anounce } from "./pages/anounce.js";
import { showPageLoader } from "./components/loading.js";
import { academics } from "./pages/academics.js";

addPage('/', home);
addPage('about', about);
addPage('anounce', anounce);
addPage('academics', academics);

// loader
showPageLoader("Bismillah...", "In the Name of Allah", 3000, 1000);

// Wait for router init
const appInitPromise = new Promise((resolve) => {
    initRouter();
    resolve();
});

// Hide loader WHEN router is ready
appInitPromise.then(() => {
    if (window.hidePageLoader) window.hidePageLoader();
});

// Keep your root fade-in
const root = document.getElementById('root');
if (root) {
    setTimeout(() => root.classList.add('visible'), 50);
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup-btn")) {
    const url = e.target.dataset.url;
    const type = e.target.dataset.type;
    openMediaPopup(url, type);
  }
});


