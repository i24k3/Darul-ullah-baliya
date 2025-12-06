"use strict";

import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import {safeInject} from "../utils.js";
import { colors } from "../colors.js";

const hero = () => {
  const heroData = {
    backgroundImage: "https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg",
    imageAlt: "A calming view of the madrasa building or mosque architecture, symbolizing peace and knowledge.",
    quote: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    quoteTranslation: '"Seeking knowledge is an obligation upon every Muslim."',
    quoteSource: "— Sunan Ibn Majah",
    buttons: [
      { href: "/academics", text: "Explore Academics", type: "primary" },
      { href: "/admissions", text: "Admissions", type: "secondary" }
    ]
  };

  const buttonClass = (type) => {
    const base = `px-8 py-4 font-bold rounded-lg transition duration-200 hover:scale-105 focus:outline-none text-center shadow-md`;
    if (type === "primary") return `${base} bg-blue-600 text-white hover:bg-blue-700`;
    if (type === "secondary") return `${base} border-2 border-blue-600 text-blue-600 hover:bg-blue-50`;
    return base;
  };

  const renderButtons = () =>
    heroData.buttons
      .map(
        (btn) => `<a href="${btn.href}" class="${buttonClass(btn.type)}">${btn.text}</a>`
      )
      .join("");

  return `
<section class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">

  <!-- Background Image -->
  <div class="hero-bg absolute inset-0 -z-10">
    <img src="${heroData.backgroundImage}" alt="${heroData.imageAlt}" class="w-full h-full object-cover">
  </div>

  <!-- Light Overlay -->
  <div class="hero-overlay absolute inset-0 bg-white/40 -z-5"></div>

  <!-- Hero Content -->
  <div class="container hero-content relative z-10 text-center px-6 sm:px-8 lg:px-12 space-y-8 text-gray-900 animate-fade-in">

    <!-- Hero Title -->
    <h1 class="hero-title text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
      Welcome to <br>Darul Uloom Bilaliya
    </h1>

    <!-- Quote Box -->
    <div class="quote-box bg-white/60 backdrop-blur-sm rounded-xl p-6 inline-block max-w-3xl mx-auto shadow-lg">
      <p class="hadith-urdu text-2xl sm:text-3xl font-semibold" lang="ur" dir="rtl">${heroData.quote}</p>
      <p class="hadith-translation mt-3 text-lg sm:text-xl opacity-90">${heroData.quoteTranslation}</p>
      <cite class="block mt-2 text-base opacity-80">${heroData.quoteSource}</cite>
    </div>

    <!-- Buttons -->
    <div class="hero-actions flex flex-col sm:flex-row gap-6 justify-center mt-8">
      ${renderButtons()}
    </div>

  </div>

</section>

<style>
  @keyframes fade-in {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }
</style>
`;
};



const welcome = () => {
  const data = {
    title: "Welcome to Darul Uloom Bilaliya",
    paragraphs: [
      "Established in 1411 Hijri (1991 CE), Darul Uloom Bilaliya has been a beacon of Islamic knowledge in the heart of Srinagar. We are dedicated to nurturing students through authentic Islamic education based on the Quran and Sunnah, following the esteemed Dars-e-Nizami curriculum.",
      "With over 550 residential students and a dedicated team of 60 scholars and staff, we strive to develop individuals who excel in knowledge, character, and service to the community."
    ],
    link: { href: "/about", text: "Learn More About Our Legacy" }
  };

  // Paragraphs
  const paragraphsHTML = data.paragraphs
    .map(
      (p) => `
        <p class="text-lg md:text-xl ${colors.neutral.dark} leading-relaxed mb-6">
          ${p}
        </p>
      `
    )
    .join("");

  return `
<section class="relative py-24 md:py-32 overflow-hidden">

  <!-- Premium Gradient + Soft Blur Background -->
  <div 
    class="absolute inset-0 pointer-events-none 
    bg-gradient-to-br 
    from-black/10 via-white/40 to-gray-100/30 
    backdrop-blur-2xl">
  </div>

  <div class="relative container mx-auto px-6 md:px-8">
    <div class="max-w-4xl mx-auto text-center">

      <!-- Title -->
      <h2 
        class="text-4xl md:text-6xl font-bold tracking-tight 
        ${colors.black.base} drop-shadow-sm mb-10">
        ${data.title}
      </h2>

      <!-- Paragraphs -->
      ${paragraphsHTML}

      <!-- Premium Button / Link -->
      <a 
        href="${data.link.href}"
        onclick="event.preventDefault(); goTo('${data.link.href}');"
        class="
          inline-flex items-center gap-3 mt-10 px-8 py-4
          rounded-full text-lg font-semibold
          ${colors.black.base} ${colors.white.bg}
          shadow-md border ${colors.neutral.border}
          transition-all duration-300
          hover:shadow-xl hover:-translate-y-0.5 
          hover:opacity-90
        "
      >
        ${data.link.text}

        <span 
          class="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </a>

    </div>
  </div>

</section>
`;
};


const quickLinks = () => {
  const data = {
    items: [
      {
        img: "https://images.pexels.com/photos/27878412/pexels-photo-27878412.jpeg",
        title: "Prayer Timetable",
        description: "View daily prayer times",
        href: "/prayer",
      },
      {
        img: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
        title: "Admissions",
        description: "Join our programs",
        href: "/admissions",
      },
      {
        img: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg",
        title: "Audio Library",
        description: "Listen to lectures",
        href: "/multimedia",
      },
      {
        img: "https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg",
        title: "Ask a Question",
        description: "Get guidance",
        href: "/contact",
      },
    ],
  };

  const itemsHTML = data.items
    .map(
      (item) => `
      <a 
        href="${item.href}"
        class="
          relative p-10 rounded-3xl 
          ${colors.white.bg} 
          shadow-lg border ${colors.neutral.border}
          hover:shadow-xl hover:-translate-y-2
          transition-all duration-300 
          group overflow-hidden
          text-center
        "
      >

        <!-- Thumbnail -->
        <div
          class="
            w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden 
            shadow-md ring-1 ${colors.neutral.border}
            transition-transform duration-300 
            group-hover:scale-105
          "
        >
          <img 
            src="${item.img}" 
            alt="${item.title}" 
            class="w-full h-full object-cover"
          >
        </div>

        <!-- Title -->
        <h3 class="text-xl font-semibold ${colors.secondary.base} mb-2">
          ${item.title}
        </h3>

        <!-- Description -->
        <p class="${colors.neutral.medium} text-sm leading-relaxed">
          ${item.description}
        </p>

      </a>
      `
    )
    .join("");

  return `
<section class="py-20 ${colors.neutral.bg}">
  <div class="container mx-auto px-6 max-w-7xl">

    <!-- Section Heading -->
    <div class="text-center mb-16">
      <h2 class="text-5xl md:text-6xl font-black ${colors.black.base} tracking-tight">
        Quick Access
      </h2>
      <p class="mt-6 text-lg ${colors.neutral.medium} max-w-2xl mx-auto leading-relaxed">
        Essential tools and resources at a glance
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      ${itemsHTML}
    </div>

  </div>
</section>
`;
};

const news = () => {
  const data = {
    title: "Latest News & Announcements",
    items: [
      {
        date: "15 March 2024",
        title: "New Academic Session Admissions Open",
        description:
          "Admissions for the 1446 Hijri academic year are now open for Hifz and Aalim courses.",
      },
      {
        date: "10 March 2024",
        title: "Ramadan Program Schedule",
        description:
          "Special Ramadan programs including Taraweeh and Iftar arrangements announced.",
      },
    ],
  };

  const itemsHTML = data.items
    .map(
      (item) => `
        <div 
          class="
            bg-white p-8 rounded-3xl 
            shadow-lg border ${colors.neutral.border}
            hover:shadow-2xl hover:-translate-y-2
            transition-all duration-300
          "
        >

          <!-- Date -->
          <div class="font-semibold text-sm uppercase tracking-wide mb-4 ${colors.primary.base}">
            ${item.date}
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold ${colors.black.base} mb-4 tracking-tight">
            ${item.title}
          </h3>

          <!-- Description -->
          <p class="${colors.neutral.medium} mb-6 leading-relaxed">
            ${item.description}
          </p>

          <!-- Read More -->
          <a 
            href="/anounce"
            onclick="event.preventDefault(); goTo('/anounce');"

           class="inline-block mt-6 font-semibold text-green-700 hover:text-green-900 transition-colors">
            Read More
            <span class="transform transition-transform group-hover:translate-x-1">→</span>
          </a>

        </div>
      `
    )
    .join("");

  return `
<section class="py-20 ${colors.neutral.bg}">
  <div class="container mx-auto px-4 max-w-7xl">

    <!-- Section Title -->
    <h2 
      class="
        text-4xl md:text-5xl font-black text-center 
        mb-16 tracking-tight ${colors.black.base}
      "
    >
      ${data.title}
    </h2>

    <!-- News Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      ${itemsHTML}
    </div>

  </div>
</section>
`;
};



const audioSpotlight = () => {
  const data = {
    title: "Latest from Mufti Sahib",
    audio: {
      title: "Allah Ki Rahmat Sai Mayoos Na Ho",
      date: "Delivered on: Sep 13, 2020",
      src: "https://ia903406.us.archive.org/21/items/DoraemonMovieSongs/05.%20%E6%AD%A6%E7%94%B0%E9%89%84%E7%9F%A2%E4%B8%80%E5%BA%A7%20-%20%E5%A4%A2%E3%81%AE%E4%BA%BA%20%281994%E5%B9%B4%20%E3%83%89%E3%83%A9%E3%81%88%E3%82%82%E3%82%93%20%E3%81%AE%E3%81%B3%E5%A4%AA%E3%81%A8%E5%A4%A2%E5%B9%BB%E4%B8%89%E5%89%A3%E5%A3%AB%29.mp3",
      link: { href: "/multimedia", text: "View All Lectures" },
    },
  };

  return `
<section class="audio-spotlight py-20 ${colors.neutral.bg}">
  <div class="container mx-auto px-6 max-w-4xl">

    <!-- Section Heading -->
    <h2 class="text-4xl md:text-5xl font-arabic font-black text-center ${colors.black.base} mb-16">
      ${data.title}
    </h2>

    <!-- Audio Card -->
    <div class="relative bg-white rounded-3xl shadow-xl border ${colors.neutral.border} p-10 text-center overflow-hidden">
      
      <!-- Subtle Hover Accent -->
      <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-50/30 to-indigo-100/20 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      <!-- Audio Info -->
      <div class="relative z-10 mb-8">
        <h3 class="text-2xl md:text-3xl font-semibold ${colors.black.base} mb-2">${data.audio.title}</h3>
        <p class="text-sm md:text-lg ${colors.neutral.medium}">${data.audio.date}</p>
      </div>

      <!-- Audio Player -->
      <audio controls class="relative z-10 w-full rounded-lg shadow-inner mb-8">
        <source src="${data.audio.src}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

      <!-- View All Lectures -->

    <a href="${data.audio.link.href}" class="all-lectures-link text-green-700 font-semibold hover:text-green-800 inline-flex items-center group transition-all">
        ${data.audio.link.text}
        <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  </div>
</section>
  `;
};


/*
const latestLectures = () => {
    return `
            <section class="section media-section bg-light">
            <div class="container">
                <header class="section-header">
                    <h2>Latest Lectures</h2>
                    <p>Listen and watch recent sermons and lessons.</p>
                </header>

                <div class="grid-2">
                    <div class="media-column">
                        <h3><span class="icon">▶</span> Video Library</h3>
                        <div class="media-list">
                            <article class="media-item">
                                <div class="media-thumb placeholder-img"></div>
                                <div class="media-info">
                                    <h4>Tafseer Surah Al-Kahf</h4>
                                    <p class="meta">By Sheikh Abdullah</p>
                                    <a href="https://youtube.com" target="_blank" rel="noopener" class="external-link">Watch on YouTube &nearr;</a>
                                </div>
                            </article>
                            <article class="media-item">
                                <div class="media-thumb placeholder-img"></div>
                                <div class="media-info">
                                    <h4>Preparation for Ramadan</h4>
                                    <p class="meta">By Mufti Ahmed</p>
                                    <a href="https://youtube.com" target="_blank" rel="noopener" class="external-link">Watch on YouTube &nearr;</a>
                                </div>
                            </article>
                        </div>
                        <a href="video-library.html" class="link-more">Browse all Videos</a>
                    </div>

                    <div class="media-column">
                        <h3><span class="icon">audio</span> Audio Library</h3>
                        <div class="media-list">
                            <article class="media-item">
                                <div class="media-icon-placeholder">🎧</div>
                                <div class="media-info">
                                    <h4>Jummah Khutbah: Truthfulness</h4>
                                    <p class="meta">April 12, 2024</p>
                                    <a href="audio.html" class="external-link">Listen Now &nearr;</a>
                                </div>
                            </article>
                             <article class="media-item">
                                <div class="media-icon-placeholder">🎧</div>
                                <div class="media-info">
                                    <h4>Rights of Parents</h4>
                                    <p class="meta">March 05, 2024</p>
                                    <a href="audio.html" class="external-link">Listen Now &nearr;</a>
                                </div>
                            </article>
                        </div>
                        <a href="audio.html" class="link-more">Browse all Audio</a>
                    </div>
                </div>
            </div>
        </section>

    `;
}
*/
const latestLectures = () => {
  const data = {
    title: "Latest Lectures",
    subtitle: "Listen and watch recent sermons and lessons.",
    videos: [
      {
        title: "Tafseer Surah Al-Kahf",
        author: "Sheikh Abdullah",
        img: "https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg",
        href: "https://youtube.com"
      },
      {
        title: "Preparation for Ramadan",
        author: "Mufti Ahmed",
        img: "https://images.pexels.com/photos/7651067/pexels-photo-7651067.jpeg",
        href: "https://youtube.com"
      }
    ],
    audios: [
      {
        title: "Jummah Khutbah: Truthfulness",
        date: "April 12, 2024",
        img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
        href: "/audio"
      },
      {
        title: "Rights of Parents",
        date: "March 05, 2024",
        img: "https://images.pexels.com/photos/374897/pexels-photo-374897.jpeg",
        href: "/audio"
      }
    ]
  };

  const renderMediaItem = (item, type) => `
    <article class="media-item flex flex-col sm:flex-row gap-4 bg-white rounded-2xl shadow-lg border ${colors.neutral.border} p-4 hover:shadow-2xl transition-all duration-500">
      
      <!-- Thumbnail / Icon -->
      <div class="w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
        ${type === "video" 
          ? `<img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover">` 
          : `<div class="w-full h-full flex items-center justify-center text-4xl bg-green-50 text-green-700">${type === "audio" ? "🎧" : ""}</div>`}
      </div>

      <!-- Info -->
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h4 class="text-lg font-semibold ${colors.black.base} mb-1">${item.title}</h4>
          <p class="text-sm ${colors.neutral.medium} mb-2">
            ${type === "video" ? `By ${item.author}` : item.date}
          </p>
        </div>
        <a href="${item.href}" target="${type === "video" ? "_blank" : "_self"}" class="text-green-700 font-semibold hover:text-green-800 inline-flex items-center group transition-all">
          ${type === "video" ? "Watch on YouTube" : "Listen Now"} 
          <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </article>
  `;

  return `
<section class="latest-lectures py-20 ${colors.neutral.bg}">
  <div class="container mx-auto px-6 max-w-7xl">

    <!-- Section Heading -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-arabic font-black ${colors.black.base}">${data.title}</h2>
      <p class="mt-4 text-lg md:text-xl ${colors.neutral.medium}">${data.subtitle}</p>
    </div>

    <!-- Media Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      
      <!-- Video Column -->
      <div>
        <h3 class="text-2xl font-semibold ${colors.secondary.base} mb-6 flex items-center gap-2">
          <span class="text-xl">▶</span> Video Library
        </h3>
        <div class="flex flex-col gap-6">
          ${data.videos.map(video => renderMediaItem(video, "video")).join("")}
        </div>
        <a href="/video-library" class="inline-block mt-6 font-semibold text-green-700 hover:text-green-900 transition-colors"> Browse all Videos &rarr;</a>
      </div>

      <!-- Audio Column -->
      <div>
        <h3 class="text-2xl font-semibold ${colors.secondary.base} mb-6 flex items-center gap-2">
          <span class="text-xl">🎧</span> Audio Library
        </h3>
        <div class="flex flex-col gap-6">
          ${data.audios.map(audio => renderMediaItem(audio, "audio")).join("")}
        </div>
<a href="/audio" 
   class="inline-block mt-6 font-semibold text-green-700 hover:text-green-900 transition-colors">
   Browse all Audio &rarr;
</a>

      </div>

    </div>

  </div>
</section>
  `;
};

const gallery = () => {
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
        <div class="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-500">
            <img 
                src="${image.src}" 
                alt="${image.alt}" 
                class="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            >
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </div>
    `).join('');

    return `
<section class="gallery-preview py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="container mx-auto px-4 max-w-7xl">
        <!-- Section Title -->
        <h2 class="text-4xl sm:text-5xl font-arabic text-green-800 text-center mb-16 font-bold tracking-tight">
            ${data.title}
        </h2>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            ${imagesHTML}
        </div>

        <!-- View All Button -->
        <div class="text-center">
            <a href="${data.link.href}" 
               class="inline-block px-8 py-4 rounded-lg border-2 border-green-700 text-green-700 font-semibold shadow-lg transition-all duration-300 
                      hover:bg-green-700 hover:text-white hover:shadow-xl transform hover:-translate-y-1">
                ${data.link.text}
            </a>
        </div>
    </div>
</section>
    `;
};


export const home = () => {
    const root = document.getElementById("root");
    root.innerHTML = ''; 

    safeInject(header(), root);
    safeInject(hero(), root);
    safeInject(welcome(), root);
    safeInject(quickLinks(), root);
    safeInject(news(), root);
    safeInject(audioSpotlight(), root);
    safeInject(latestLectures(), root);
    safeInject(gallery(), root);
    safeInject(footer(), root);

    // Toggle mobile menu
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    });
};


