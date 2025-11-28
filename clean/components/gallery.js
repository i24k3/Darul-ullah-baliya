"use strict";

export const gallery = () => {
    const data =  {
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

    const imagesHTML = data.images.map(image => `
            <div class="gallery-item rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <img src="${image.src}" alt="${image.alt}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
        `).join('');

    return `
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

}

