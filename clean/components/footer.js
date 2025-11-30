"use strict";

export const footer = () => {
    const data = {
        institution: {
            name: "Darul Uloom Bilaliya",
            address: "Ahmada Kadal, Lal Bazar<br>Srinagar, Jammu & Kashmir"
        },
        quickLinks: [
            { href: "/about", text: "About Us" },
            { href: "/academics", text: "Academics" },
            { href: "/admissions", text: "Admissions" },
            { href: "/contact", text: "Contact" }
        ],
        connectLinks: [
            { href: "/multimedia", text: "Audio Lectures" },
            { href: "/multimedia", text: "Photo Gallery" },
            { href: "/resources", text: "Resources" },
            { href: "/support", text: "Support Us" }
        ],
        contact: {
            phone: "+91 99999 99999",
            email: "info@darululoombilaliya.org"
        }
    };

    const linkList = (links) => links.map(link => `
        <li>
            <a href="${link.href}" 
               class="inline-flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 group">
                <span class="w-0 group-hover:w-4 transition-all overflow-hidden">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                    </svg>
                </span>
                <span>${link.text}</span>
            </a>
        </li>
    `).join('');

    return `
<footer class="bg-gray-900 text-white pt-16 pb-8 md:pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Main Footer Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
            
            <!-- Institution Info -->
            <div class="lg:col-span-4">
                <h3 class="text-2xl md:text-3xl font-bold font-arabic text-green-400 mb-4">
                    ${data.institution.name}
                </h3>
                <p class="text-gray-300 leading-relaxed text-sm md:text-base">
                    ${data.institution.address}
                </p>
            </div>

            <!-- Quick Links -->
            <div class="lg:col-span-2 lg:col-start-5">
                <h4 class="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                <ul class="space-y-4 text-sm md:text-base">
                    ${linkList(data.quickLinks)}
                </ul>
            </div>

            <!-- Connect -->
            <div class="lg:col-span-3">
                <h4 class="text-lg font-semibold mb-6 text-white">Connect With Us</h4>
                <ul class="space-y-4 text-sm md:text-base">
                    ${linkList(data.connectLinks)}
                </ul>
            </div>

            <!-- Contact + Newsletter (THE FIXED PART) -->
            <div class="lg:col-span-3">
                <h4 class="text-lg font-semibold mb-6 text-white">Contact Info</h4>
                <div class="space-y-5 text-gray-300 text-sm md:text-base mb-8">
                    <p class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        ${data.contact.phone}
                    </p>
                    <p class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        ${data.contact.email}
                    </p>
                </div>

                <!-- PERFECTLY RESPONSIVE NEWSLETTER FORM -->
                <form class="mt-8 max-w-md" onsubmit="event.preventDefault();">
                    <label class="block text-sm font-medium mb-3 text-gray-200">
                        Subscribe to our newsletter
                    </label>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            required
                            class="flex-1 min-w-0 px-5 py-3.5 rounded-lg bg-white/10 backdrop-blur-sm border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all"
                        >
                        <button 
                            type="submit"
                            class="px-6 py-3.5 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-600/30 whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </div>
                    <p class="mt-3 text-xs text-gray-400">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </form>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-gray-800 pt-8 text-center">
            <p class="text-gray-400 text-sm">
                © ${new Date().getFullYear()} Darul Uloom Bilaliya. All rights reserved.
                <p>Made with love for the Ummah</p>
            </p>
        </div>
    </div>
</footer>
    `;
};


 
