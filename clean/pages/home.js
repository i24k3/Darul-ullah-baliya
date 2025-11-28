"use strict";

import { hero } from "../components/hero.js";
import { header } from "../components/header.js";
import { footer } from "../components/footer.js";

import {safeInject} from "../utils.js";

export const home = () => {
    const root = document.getElementById("root");
    root.innerHTML = ''; 

    safeInject(hero(), root);
    safeInject(header(), root);
    safeInject(footer(), root);

    // Toggle mobile menu
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    });
};


