"use strict";
import { safeInject, } from "./utils.js";

export const Header  = (container, activePage = 'home') => {
    const headerHTML = `
        <!-- Top Bar -->
        <div class="bg-gray-900 text-white py-2 text-sm">
            <div class="container mx-auto px-4 flex justify-between items-center">
                <div class="prayer-times">
                    <span>Fajr: 5:15 AM | Dhuhr: 12:30 PM</span>
                </div>
                <div class="flex items-center space-x-4">
                    <a href="tel:+919999999999" class="hover:text-green-400 transition-colors">+91 99999 99999</a>
                    <div class="language-toggle flex bg-gray-800 rounded p-1">
                        <button class="lang-btn px-2 py-1 rounded text-xs bg-green-600 text-white">EN</button>
                        <button class="lang-btn px-2 py-1 rounded text-xs text-gray-300 hover:text-white">UR</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Header -->
        <header class="bg-white shadow-xl sticky top-0 z-50">
            <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <div class="logo flex items-center space-x-4">
                    <img src="https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg" alt="Darul Uloom Bilaliya Logo" class="h-16 rounded-lg shadow-md">
                    <div class="logo-text">
                        <h1 class="font-arabic text-2xl text-green-700 font-bold">دار العلوم بلالیہ</h1>
                        <span class="text-gray-700 text-sm font-medium">Darul Uloom Bilaliya</span>
                    </div>
                </div>
                
                <!-- CHANGED: Remove the 'hidden' class -->
                <nav class="main-nav md:flex">
                    <ul class="flex space-x-8">
                        <li><a href="#home" class="nav-link text-gray-700 hover:text-green-700 font-medium transition-colors ${activePage === 'home' ? 'text-green-700' : ''}">Home</a></li>
                        <li><a href="#about" class="nav-link text-gray-700 hover:text-green-700 font-medium transition-colors ${activePage === 'about' ? 'text-green-700' : ''}">About</a></li>
                        <li><a href="#academics" class="nav-link text-gray-700 hover:text-green-700 font-medium transition-colors ${activePage === 'academics' ? 'text-green-700' : ''}">Academics</a></li>
                        <li><a href="#multimedia" class="nav-link text-gray-700 hover:text-green-700 font-medium transition-colors ${activePage === 'multimedia' ? 'text-green-700' : ''}">Multimedia</a></li>
                        <li><a href="#resources" class="nav-link text-gray-700 hover:text-green-700 font-medium transition-colors ${activePage === 'resources' ? 'text-green-700' : ''}">Resources</a></li>
                        <li><a href="#support" class="nav-link bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors font-medium">Support Us</a></li>
                    </ul>
                </nav>

                <button class="mobile-menu-btn md:hidden flex flex-col space-y-1">
                    <span class="w-6 h-0.5 bg-gray-700"></span>
                    <span class="w-6 h-0.5 bg-gray-700"></span>
                    <span class="w-6 h-0.5 bg-gray-700"></span>
                </button>
            </div>
        </header>
    `;
    
    safeInject(headerHTML, container);
}

