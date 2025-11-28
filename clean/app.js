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
