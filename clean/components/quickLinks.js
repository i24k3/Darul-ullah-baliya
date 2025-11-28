"use strict";



export const quickLinks = () => {
    const data = {
        items: [
            {
                icon: "🕌",
                title: "Prayer Timetable",
                description: "View daily prayer times",
                href: "/prayer"
            },
            {
                icon: "📚",
                title: "Admissions",
                description: "Join our programs",
                href: "/admissions"
            },
            {
                icon: "🎵",
                title: "Audio Library",
                description: "Listen to lectures",
                href: "/multimedia"
            },
            {
                icon: "💬",
                title: "Ask a Question",
                description: "Get guidance",
                href: "/contact"
            }
        ]
    };



    const itemsHTML = data.items.map(item => `
        <a href="${item.href}" class="grid-item bg-white p-8 text-center rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 group">
            <div class="grid-icon text-5xl mb-6 transform group-hover:scale-110 transition-transform">${item.icon}</div>
                <h3 class="text-xl font-arabic text-green-700 mb-4 font-semibold">${item.title}</h3>
                <p class="text-gray-600">${item.description}</p>
        </a> `).join('');

return `
<section class="quick-links py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ${itemsHTML}
        </div>
    </div>
</section>
`;

}
