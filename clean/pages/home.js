"use strict";

import { header } from "../components/header.js";
import { hero } from "../components/hero.js";
import { welcome } from "../components/welcome.js";
import { quickLinks } from "../components/quickLinks.js";
import { news } from "../components/news.js";
import { audioSpotlight } from "../components/audioSpotlight.js";
import { gallery } from "../components/gallery.js";
import { footer } from "../components/footer.js";

import {safeInject} from "../utils.js";

export const home = () => {
    const root = document.getElementById("root");
    root.innerHTML = ''; 

    safeInject(header(), root);
    safeInject(hero(), root);
    safeInject(welcome(), root);
    safeInject(quickLinks(), root);
    safeInject(news(), root);
    safeInject(audioSpotlight(), root);
    safeInject(gallery(), root);

    safeInject(footer(), root);

    // Toggle mobile menu
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    });
};


