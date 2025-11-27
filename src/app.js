"use strict";

import { registerPage, initNavigation } from './utils.js';
import { HomePage } from './home.js';
import { AboutPage } from './about.js';
import { AcademicsPage } from './academics.js';

registerPage('home', HomePage);
registerPage('about', AboutPage);
registerPage('academics', AcademicsPage);

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
});
