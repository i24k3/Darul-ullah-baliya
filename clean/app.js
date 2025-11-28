"use strict";

import { addPage, initRouter } from "./utils.js";
import { home } from "./pages/home.js";

// routes
addPage('/', home);



// start the site
initRouter();
