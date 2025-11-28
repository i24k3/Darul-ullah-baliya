"use strict";

/*
export const newsCard = (data) => {
    return `
    <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src="https://images.pexels.com/photos/27063861/pexels-photo-27063861.jpeg" alt="Event" class="w-full h-48 object-cover">
            <div class="p-6">
            <span class="text-sm text-green-600 font-semibold">March 15, 2025</span>
            <h3 class="text-2xl font-bold text-gray-900 mt-2">Annual Convocation Ceremony</h3>
            <p class="text-gray-600 mt-3">
                Join us for the graduation of our 1446 AH batch. Guest speaker: Shaykh Muhammad ibn Adam.
            </p>
            <a href="#" class="inline-block mt-4 text-green-600 font-bold hover:text-green-700">
                Read more →
            </a>
        </div>
    </article>
`;

}
*/

export const newsCard = (data) => {
  // Fallbacks so it never breaks even if some fields are missing
  const title     = data.title     || "Untitled Announcement";
  const excerpt   = data.excerpt   || "No details available.";
  const image     = data.image     || "https://images.pexels.com/photos/27063861/pexels-photo-27063861.jpeg?auto=compress&cs=tinysrgb&w=800";
  const date      = data.date 
      ? new Date(data.date).toLocaleDateString('en-GB', { 
          day: 'numeric', month: 'long', year: 'numeric' 
        })
      : "Date not specified";
  const category  = data.category  || "General";
  const link      = data.link      || "#";
  const featured  = data.featured;

  return `
    <article class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${featured ? 'ring-4 ring-green-500 ring-opacity-30' : ''}">
      <div class="relative">
        <img 
          src="${image}" 
          alt="${title}" 
          class="w-full h-56 object-cover"
          loading="lazy"
        >
        ${featured ? `
          <span class="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Featured
          </span>` : ''}
        <span class="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-xs font-medium">
          ${category}
        </span>
      </div>

      <div class="p-6">
        <time class="text-sm text-green-600 font-semibold block mb-2">
          ${date}
        </time>
        
        <h3 class="text-2xl font-bold text-gray-900 mt-2 line-clamp-2 leading-tight">
          ${title}
        </h3>
        
        <p class="text-gray-600 mt-3 line-clamp-3">
          ${excerpt}
        </p>
        
        <div class="mt-5">
            <a href="/news/${data.id}" class="inline-flex items-center text-green-600 font-bold hover:text-green-700 transition">
                Read more <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            </a>        
        </div>
      </div>
    </article>
  `;
};
