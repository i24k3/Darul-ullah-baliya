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

    getQuickLinksData() {
        return {
            items: [
                {
                    icon: "🕌",
                    title: "Prayer Timetable",
                    description: "View daily prayer times",
                    href: "#prayer"
                },
                {
                    icon: "📚",
                    title: "Admissions",
                    description: "Join our programs",
                    href: "#admissions"
                },
                {
                    icon: "🎵",
                    title: "Audio Library",
                    description: "Listen to lectures",
                    href: "#multimedia"
                },
                {
                    icon: "💬",
                    title: "Ask a Question",
                    description: "Get guidance",
                    href: "#contact"
                }
            ]
        };
    }

    getNewsData() {
        return {
            title: "Latest News & Announcements",
            items: [
                {
                    date: "15 March 2024",
                    title: "New Academic Session Admissions Open",
                    description: "Admissions for the 1446 Hijri academic year are now open for Hifz and Aalim courses.",
                    link: "#"
                },
                {
                    date: "10 March 2024",
                    title: "Ramadan Program Schedule",
                    description: "Special Ramadan programs including Taraweeh and Iftar arrangements announced.",
                    link: "#"
                }
            ]
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


    getGalleryData() {
    return {
        title: "Campus Life",
        images: [
            { src: "https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg", alt: "Main Masjid" },
            { src: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg", alt: "Classroom" },
            { src: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg", alt: "Students" },
            { src: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg", alt: "Students" },
            { src: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg", alt: "Students" },
            { src: "https://images.pexels.com/photos/207693/pexels-photo-207693.jpeg", alt: "Students" }
        ],
        link: { href: "#multimedia", text: "View Full Gallery" }
    };
}

    getFooterData() {
        return {
            institution: {
                name: "Darul Uloom Bilaliya",
                address: "Ahmada Kadal, Lal Bazar<br>Srinagar, Jammu & Kashmir"
            },
            quickLinks: [
                { href: "#about", text: "About Us" },
                { href: "#academics", text: "Academics" },
                { href: "#admissions", text: "Admissions" },
                { href: "#contact", text: "Contact" }
            ],
            connectLinks: [
                { href: "#multimedia", text: "Audio Lectures" },
                { href: "#multimedia", text: "Photo Gallery" },
                { href: "#resources", text: "Resources" },
                { href: "#support", text: "Support Us" }
            ],
            contact: {
                phone: "+91 99999 99999",
                email: "info@darululoombilaliya.org"
            }
        };
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

    renderHeader() {
        Header(this.rootElement, "home");
    }

    renderHero() {
    const data = this.getHeroData();
    const buttonsHTML = data.buttons.map(button => 
        `<a href="${button.href}" class="${button.class} px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 font-semibold text-center shadow-lg hover:shadow-xl">${button.text}</a>`
    ).join('');


const heroHTML = `
<section class="hero relative h-96 md:h-screen-70 min-h-96 overflow-hidden">
    <div class="hero-background absolute inset-0">
        <img src="${data.backgroundImage}" alt="${data.alt}" class="w-full h-full object-cover">
        <!-- ENHANCED OVERLAY FOR BETTER TEXT READABILITY -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
    </div>
    <div class="hero-content relative z-10 h-full flex items-center text-white">
        <div class="container mx-auto px-4">
            <blockquote class="hero-quote text-3xl md:text-5xl font-bold mb-8 max-w-4xl leading-tight drop-shadow-2xl text-white">
                "${data.quote}"
                <cite class="block text-xl md:text-2xl font-normal mt-6 opacity-95 italic text-white">— ${data.author}</cite>
            </blockquote>
            <div class="hero-buttons flex flex-col sm:flex-row gap-6">
                ${buttonsHTML}
            </div>
        </div>
    </div>
</section>
`;
    safeInject(heroHTML, this.rootElement);
}

    renderWelcome() {
        const data = this.getWelcomeData();
        const paragraphsHTML = data.paragraphs.map(p => 
            `<p class="text-lg text-gray-700 mb-6 leading-relaxed">${p}</p>`
        ).join('');

        const welcomeHTML = `
<section class="welcome-section bg-gradient-to-br from-beige-50 to-green-50 py-20">
    <div class="container mx-auto px-4">
        <div class="welcome-content max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-arabic text-green-800 mb-8 font-bold drop-shadow-sm">${data.title}</h2>
            ${paragraphsHTML}
            <a href="${data.link.href}" class="read-more text-green-700 font-semibold hover:text-green-800 inline-flex items-center group transition-all">
                ${data.link.text}
                <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
        </div>
    </div>
</section>
`;

        safeInject(welcomeHTML, this.rootElement);
    }

    renderQuickLinks() {
        const data = this.getQuickLinksData();
        const itemsHTML = data.items.map(item => `
            <a href="${item.href}" class="grid-item bg-white p-8 text-center rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 group">
                <div class="grid-icon text-5xl mb-6 transform group-hover:scale-110 transition-transform">${item.icon}</div>
                <h3 class="text-xl font-arabic text-green-700 mb-4 font-semibold">${item.title}</h3>
                <p class="text-gray-600">${item.description}</p>
            </a>
        `).join('');

        const quickLinksHTML = `
<section class="quick-links py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${itemsHTML}
        </div>
    </div>
</section>
`;

        safeInject(quickLinksHTML, this.rootElement);
    }

    renderNews() {
        const data = this.getNewsData();
        const itemsHTML = data.items.map(item => `
            <div class="news-card bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600 hover:shadow-xl transition-all">
                <div class="news-date text-green-600 font-semibold mb-4 text-sm uppercase tracking-wide">${item.date}</div>
                <h3 class="text-xl font-semibold text-gray-800 mb-4">${item.title}</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">${item.description}</p>
                <a href="${item.link}" class="news-link text-green-700 font-semibold hover:text-green-800 inline-flex items-center group transition-all">
                    Read More <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>
        `).join('');

        const newsHTML = `
<section class="news-section py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
        <h2 class="section-title text-4xl font-arabic text-green-800 text-center mb-16 font-bold">${data.title}</h2>
        <div class="news-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            ${itemsHTML}
        </div>
    </div>
</section>
`;

        safeInject(newsHTML, this.rootElement);
    }

    renderAudioSpotlight() {
        const data = this.getAudioData();
        const audioHTML = `
<section class="audio-spotlight py-20 bg-gradient-to-br from-white to-beige-50">
    <div class="container mx-auto px-4">
        <h2 class="section-title text-4xl font-arabic text-green-800 text-center mb-16 font-bold">${data.title}</h2>
        <div class="audio-player max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl text-center border border-gray-100">
            <div class="audio-info mb-8">
                <h3 class="text-2xl font-semibold text-gray-800 mb-2">${data.audio.title}</h3>
                <p class="text-gray-600 text-lg">${data.audio.date}</p>
            </div>
            <audio controls class="custom-audio w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-inner">
                <source src="${data.audio.src}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <a href="${data.audio.link.href}" class="all-lectures-link text-green-700 font-semibold hover:text-green-800 inline-flex items-center group transition-all">
                ${data.audio.link.text} <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
        </div>
    </div>
</section>
`;

        safeInject(audioHTML, this.rootElement);
    }

    renderGallery() {
        const data = this.getGalleryData();
        const imagesHTML = data.images.map(image => `
            <div class="gallery-item rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <img src="${image.src}" alt="${image.alt}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
        `).join('');

        const galleryHTML = `
<section class="gallery-preview py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
        <h2 class="section-title text-4xl font-arabic text-green-800 text-center mb-16 font-bold">${data.title}</h2>
        <div class="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            ${imagesHTML}
        </div>
        <div class="text-center">
            <a href="${data.link.href}" class="btn-outline border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg hover:bg-green-700 hover:text-white transition-all font-semibold inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                ${data.link.text}
            </a>
        </div>
    </div>
</section>
`;

        safeInject(galleryHTML, this.rootElement);
    }




    renderFooter() {
        const data = this.getFooterData();
        const quickLinksHTML = data.quickLinks.map(link => 
            `<li><a href="${link.href}" class="nav-link text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform">${link.text}</a></li>`
        ).join('');
        
        const connectLinksHTML = data.connectLinks.map(link => 
            `<li><a href="${link.href}" class="nav-link text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform">${link.text}</a></li>`
        ).join('');

        const footerHTML = `
<footer class="main-footer bg-gray-900 text-white pt-20 pb-8">
    <div class="container mx-auto px-4">
        <div class="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div class="footer-section">
                <h3 class="text-2xl font-arabic text-green-400 mb-4 font-bold">${data.institution.name}</h3>
                <p class="text-gray-300 leading-relaxed">${data.institution.address}</p>
            </div>
            <div class="footer-section">
                <h4 class="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                <ul class="space-y-3">
                    ${quickLinksHTML}
                </ul>
            </div>
            <div class="footer-section">
                <h4 class="text-lg font-semibold mb-6 text-white">Connect</h4>
                <ul class="space-y-3">
                    ${connectLinksHTML}
                </ul>
            </div>
            <div class="footer-section">
                <h4 class="text-lg font-semibold mb-6 text-white">Contact Info</h4>
                <p class="text-gray-300 mb-6 leading-relaxed">
                    Phone: ${data.contact.phone}<br>
                    Email: ${data.contact.email}
                </p>
                <div class="newsletter flex rounded-lg overflow-hidden shadow-lg">
                    <input type="email" placeholder="Your email address" class="flex-1 px-4 py-3 text-gray-800 focus:outline-none">
                    <button class="btn-subscribe bg-green-700 text-white px-6 hover:bg-green-800 transition-colors font-medium">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
        <div class="footer-bottom border-t border-gray-700 pt-8 text-center text-gray-400">
            <p class="text-sm">&copy; 2024 Darul Uloom Bilaliya. All rights reserved.</p>
        </div>
    </div>
</footer>
`;

        safeInject(footerHTML, this.rootElement);
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


