"use strict";

export const welcome = () => {
    const data = {
        title: "Welcome to Darul Uloom Bilaliya",
        paragraphs: [
            "Established in 1411 Hijri (1991 CE), Darul Uloom Bilaliya has been a beacon of Islamic knowledge in the heart of Srinagar. We are dedicated to nurturing students through authentic Islamic education based on the Quran and Sunnah, following the esteemed Dars-e-Nizami curriculum.",
            "With over 550 residential students and a dedicated team of 60 scholars and staff, we strive to develop individuals who excel in knowledge, character, and service to the community."
        ],
        link: { href: "/about", text: "Learn More About Our Legacy" }
    };

    const paragraphsHTML = data.paragraphs.map(p => `<p class="text-lg text-gray-700 mb-6 leading-relaxed">${p}</p>`).join('');

return `
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
}




