"use strict";

export const mediaCard = (data, mediaId) => {
  const title = data.title || "Untitled Media";
  const meta = data.meta || "No details available";
  const image = data.image || "https://via.placeholder.com/400x225?text=Media";
  const type = data.type || "video"; // "video" or "audio"
  const link = data.link || `/media?id=${mediaId}`;
  const icon = type === "audio" ? "🎧" : "▶";

  return `
    <article class="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-gray-100 cursor-pointer"
>

      <!-- Thumbnail or Icon -->
      <div class="relative overflow-hidden h-48 flex items-center justify-center bg-gray-100">
        ${type === "video" ? 
          `<img src="${image}" alt="${title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">`
          :
          `<span class="text-5xl">${icon}</span>`
        }
      </div>

      <!-- Content -->
      <div class="p-6 space-y-3">
        <h4 class="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-black">
          ${title}
        </h4>
        <p class="text-gray-500 text-sm line-clamp-2">${meta}</p>
        <div>
          <a href="${link}" 
             class="inline-flex items-center text-indigo-600 font-medium hover:gap-2 transition-all duration-300 group/link">
            ${type === "video" ? "Watch Now" : "Listen Now"} &nearr;
          </a>
        </div>
      </div>
    </article>
  `;
};

