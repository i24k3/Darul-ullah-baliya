"use strict";

export const news = () => {
    const data = {
        title: "Latest News & Announcements",
        items: [
            {
                date: "15 March 2024",
                title: "New Academic Session Admissions Open",
                description: "Admissions for the 1446 Hijri academic year are now open for Hifz and Aalim courses.",
                link: "/announcements"
            },
            {
                date: "10 March 2024",
                title: "Ramadan Program Schedule",
                description: "Special Ramadan programs including Taraweeh and Iftar arrangements announced.",
                link: "/announcements"
            }
        ]
    };

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

return `
<section class="news-section py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4">
        <h2 class="section-title text-4xl font-arabic text-green-800 text-center mb-16 font-bold">${data.title}</h2>
        <div class="news-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            ${itemsHTML}
        </div>
    </div>
</section>
`;

}
