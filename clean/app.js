"use strict";

import { addPage, initRouter } from "./utils.js";
import { HomePage } from "./homepage.js";

// routes
addPage('/', HomePage);



// start the site
initRouter();
