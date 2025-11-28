"use strict";

import { safeInject, navigateTo } from './utils.js';
import { Header } from './Header.js';

class HomePage {
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
        this.renderHero();
        this.renderWelcome();
        this.renderQuickLinks();
        this.renderNews();
        this.renderAudioSpotlight();
        this.renderGallery();
        this.renderFooter();
    }

    getHeroData() {
        return {
        backgroundImage: "https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg",
            alt: "Darul Uloom Bilaliya Masjid",
            quote: "Seeking knowledge is an obligation upon every Muslim",
            author: "Prophet Muhammad ﷺ",
            buttons: [
                { 
                    href: "#admissions", 
                    text: "Explore Admissions", 
                    type: "primary",
                    class: "bg-green-700 hover:bg-green-800 text-white"
                },
                { 
                    href: "#support", 
                    text: "Support the Uloom", 
                    type: "secondary",
                    class: "border-2 border-white hover:bg-white hover:text-gray-800 text-white"
                }
            ]
        };
    }

    getWelcomeData() {
        return {
            title: "Welcome to Darul Uloom Bilaliya",
            paragraphs: [
                "Established in 1411 Hijri (1991 CE), Darul Uloom Bilaliya has been a beacon of Islamic knowledge in the heart of Srinagar. We are dedicated to nurturing students through authentic Islamic education based on the Quran and Sunnah, following the esteemed Dars-e-Nizami curriculum.",
                "With over 550 residential students and a dedicated team of 60 scholars and staff, we strive to develop individuals who excel in knowledge, character, and service to the community."
            ],
            link: { href: "#about", text: "Learn More About Our Legacy" }
        };
    }

    getAudioData() {
    return {
        title: "Latest from Mufti Sahib",
        audio: {
            title: "Allah Ki Rahmat Sai Mayoos Na Ho",
            date: "Delivered on: Sep 13, 2020",
            src: "#", // Remove broken path
            link: { href: "#multimedia", text: "View All Lectures" }
        }
    };
}


 }
    // Data Objects
    getHeaderData() {
        return {
            prayerTime: "Fajr: 5:15 AM | Dhuhr: 12:30 PM",
            phoneNumber: "+91 99999 99999",
            logo: {
                 src: "https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg",
                alt: "Darul Uloom Bilaliya Logo",
                arabicTitle: "دار العلوم بلالیہ",
                englishTitle: "Darul Uloom Bilaliya"
            },
            navItems: [
                { href: "#home", text: "Home", active: true },
                { href: "#about", text: "About" },
                { href: "#academics", text: "Academics" },
                { href: "#multimedia", text: "Multimedia" },
                { href: "#resources", text: "Resources" },
                { href: "#support", text: "Support Us", cta: true }
            ]
        };
    }



   attachEventListeners() {
        setTimeout(() => {
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const mainNav = document.querySelector('.main-nav');
            
            if (mobileMenuBtn && mainNav) {
                mobileMenuBtn.addEventListener('click', () => {
                    mainNav.classList.toggle('hidden');
                });
            }

            // Language toggle
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

            // Navigation for nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = link.getAttribute('href').replace('#', '');
                    navigateTo(page);
                });
            });

            // Smooth scrolling for anchor links that don't navigate to other pages
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    // Only handle smooth scrolling for on-page anchors, not navigation
                    if (href.startsWith('#') && href.length > 1 && 
                        !['home', 'about', 'academics', 'multimedia', 'resources', 'support', 'contact'].includes(href.substring(1))) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });
        }, 100);
    }
}

export { HomePage };

