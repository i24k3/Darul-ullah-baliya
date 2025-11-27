"use strict";

import { safeInject, navigateTo } from './utils.js';

class MultimediaPage {
    constructor() {
        this.rootElement = document.getElementById('root');
        this.init();
    }

    init() {
        this.renderLayout();
        this.attachEventListeners();
    }

    renderLayout() {
        this.renderHeader();
        safeInject('<section class="py-20"><div class="container mx-auto px-4 text-center"><h1 class="text-4xl font-arabic text-green-700">Multimedia</h1><p class="text-gray-600">Coming soon...</p></div></section>', this.rootElement);
        this.renderFooter();
    }

    renderHeader() {
        renderSharedHeader(this.rootElement, 'multimedia');
}


    renderFooter() {
        // Copy footer from about.js
        const footerHTML = `
            <footer class="bg-gray-800 text-white pt-16 pb-8">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h3 class="text-2xl font-arabic text-green-400 mb-4">Darul Uloom Bilaliya</h3>
                            <p class="text-gray-300">Ahmada Kadal, Lal Bazar<br>Srinagar, Jammu & Kashmir</p>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul class="space-y-2">
                                <li><a href="#about" class="nav-link text-gray-300 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#academics" class="nav-link text-gray-300 hover:text-white transition-colors">Academics</a></li>
                                <li><a href="#admissions" class="nav-link text-gray-300 hover:text-white transition-colors">Admissions</a></li>
                                <li><a href="#contact" class="nav-link text-gray-300 hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Connect</h4>
                            <ul class="space-y-2">
                                <li><a href="#multimedia" class="nav-link text-gray-300 hover:text-white transition-colors">Audio Lectures</a></li>
                                <li><a href="#multimedia" class="nav-link text-gray-300 hover:text-white transition-colors">Photo Gallery</a></li>
                                <li><a href="#resources" class="nav-link text-gray-300 hover:text-white transition-colors">Resources</a></li>
                                <li><a href="#support" class="nav-link text-gray-300 hover:text-white transition-colors">Support Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
                            <p class="text-gray-300 mb-4">Phone: +91 99999 99999<br>Email: info@darululoombilaliya.org</p>
                            <div class="flex">
                                <input type="email" placeholder="Your email address" class="flex-1 px-3 py-2 rounded-l text-gray-800 text-sm">
                                <button class="bg-green-700 text-white px-4 rounded-r hover:bg-green-800 transition-colors text-sm">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Darul Uloom Bilaliya. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
        safeInject(footerHTML, this.rootElement);
    }

    attachEventListeners() {
        setTimeout(() => {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const mainNav = document.querySelector('.main-nav');
            
            if (mobileMenuBtn && mainNav) {
                mobileMenuBtn.addEventListener('click', () => {
                    mainNav.classList.toggle('hidden');
                });
            }

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = link.getAttribute('href').replace('#', '');
                    navigateTo(page);
                });
            });

            const langButtons = document.querySelectorAll('.lang-btn');
            langButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    langButtons.forEach(b => {
                        b.classList.remove('bg-green-600', 'text-white');
                        b.classList.add('text-gray-300');
                    });
                    btn.classList.add('bg-green-600', 'text-white');
                    btn.classList.remove('text-gray-300');
                });
            });
        }, 100);
    }
}

export { MultimediaPage };
