"use strict";

export const newsCard = (data, announcementId) => {
  const title = data.title || "Untitled Announcement";
  const excerpt = data.excerpt || "No details available.";
  const image = data.image || "https://images.pexels.com/photos/27063861/pexels-photo-27063861.jpeg?w=1600&h=900&fit=crop";
  const date = data.date
    ? new Date(data.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : "Date not specified";
  const category = data.category || "General";
  const link = data.link || `/anounce?id=${announcementId}`;
  const featured = data.featured;

  return `
    <article data-category="${category.toLowerCase()}" data-date="${data.date || ''}"
             class="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-100 cursor-pointer"
             onclick="goTo('${link}')">
      
      <!-- Image -->
      <div class="relative overflow-hidden">
        <img 
          src="${image}" 
          alt="${title}" 
          class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        >

        <!-- Featured Badge - Minimal & Classy -->
        ${featured ? `
          <div class="absolute top-4 left-4 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            Featured
          </div>
        ` : ''}

        <!-- Category Badge - Subtle & Premium -->
        <div class="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20">
          ${category}
        </div>
      </div>

      <!-- Content -->
      <div class="p-8 space-y-5">
        
        <!-- Date - Clean & Minimal -->
        <time class="text-sm font-medium text-gray-500 tracking-wider uppercase flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          ${date}
        </time>

        <!-- Title - Bold & Elegant -->
        <h3 class="text-2xl md:text-3xl font-black text-gray-900 leading-tight line-clamp-2 group-hover:text-black transition">
          ${title}
        </h3>

        <!-- Excerpt -->
        <p class="text-gray-600 leading-relaxed line-clamp-3 text-base">
          ${excerpt}
        </p>

        <!-- Read More - Luxury Touch -->
        <div class="pt-4">
          <a href="${link}" 
             onclick="event.preventDefault(); goTo('${link}');"
             class="inline-flex items-center text-black font-bold text-lg hover:gap-4 transition-all duration-300 group/link">
            Read More
            <svg class="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-2" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" 
                    d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  `;
};


/*
export const newsCard = (data, announcementId) => {
  const title = data.title || "Untitled Announcement";
  const excerpt = data.excerpt || "No details available.";
  const image = data.image || "https://images.pexels.com/photos/27063861/pexels-photo-27063861.jpeg";
  const date = data.date 
    ? new Date(data.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) 
    : "Date not specified";
  const category = data.category || "General";
  const link = data.link || `/anounce?id=${announcementId}`;
  const featured = data.featured;

  return `
    <article data-category="${category.toLowerCase()}" data-date="${data.date || ''}" 
             class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 ${featured ? 'ring-4 ring-green-600 ring-opacity-20' : ''}">
      <div class="relative overflow-hidden">
        <img src="${image}" alt="${title}" class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
        
        ${featured ? `
          <div class="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2">
            <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Featured
          </div>` : ''}

        <div class="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wider border border-white/20">
          ${category}
        </div>
      </div>

      <div class="p-7 space-y-4">
        <time class="text-sm font-medium text-green-700 tracking-wide flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h.01a1 1 0 100-2H6zm2 0a1 1 0 000 2h.01a1 1 0 100-2H8zm2 0a1 1 0 000 2h.01a1 1 0 100-2H10zm2 0a1 1 0 000 2h.01a1 1 0 100-2H12zm-6 4a1 1 0 000 2h.01a1 1 0 100-2H6zm2 0a1 1 0 000 2h.01a1 1 0 100-2H8zm2 0a1 1 0 000 2h.01a1 1 0 100-2H10zm2 0a1 1 0 000 2h.01a1 1 0 100-2H12z" clip-rule="evenodd"/></svg>
          ${date}
        </time>

        <h3 class="text-2xl font-bold text-gray-900 leading-tight line-clamp-2 font-arabic group-hover:text-green-800 transition-colors">
          ${title}
        </h3>

        <p class="text-gray-600 leading-relaxed line-clamp-3 text-base">${excerpt}</p>

        <div class="pt-4">
          <a href="${link}" class="inline-flex items-center text-green-700 font-bold text-lg hover:text-green-800 transition-all duration-300 group/link">
            Read More
            <svg class="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  `;
};


*/
