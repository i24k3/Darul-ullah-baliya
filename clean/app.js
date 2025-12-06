"use strict";
import { addPage, initRouter } from "./utils.js";
import { home } from "./pages/home.js";
import { about } from "./pages/about.js";
import { anounce } from "./pages/anounce.js";
import { showPageLoader } from "./components/loading.js";

// 1. Register pages
addPage('/', home);
addPage('about', about);
addPage('anounce', anounce);

// 2. Show loader immediately
showPageLoader("Bismillah...", 1200);

// 3. Wait for page init + minimum loader time
const appInitPromise = new Promise((resolve) => {
    // initRouter renders the page immediately
    initRouter();
    resolve();  // resolve immediately after page renders
});

const minDelay = new Promise((resolve) => setTimeout(resolve, 1200));

// 4. Remove loader when both done
Promise.all([appInitPromise, minDelay]).then(() => {
    if (window.hidePageLoader) window.hidePageLoader();
});

const root = document.getElementById('root');
if (root) {
    // small delay to ensure loader is above
    setTimeout(() => root.classList.add('visible'), 50);
}




/*
"use strict";

import { addPage, initRouter } from "./utils.js";
import { home } from "./pages/home.js";
import { about } from "./pages/about.js";
import { anounce } from "./pages/anounce.js";

// routes
addPage('/', home);
addPage('about', about);
addPage('anounce', anounce);




// start the site
initRouter();
*/
