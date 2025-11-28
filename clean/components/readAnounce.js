"use strict";
import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { safeInject } from "../utils.js";

export const announcementsData = [
  {
    id: 1,
    date: "2025-11-20",
    title: "Annual Milad-un-Nabi (SAW) Celebration",
    excerpt: "Join us on 12th Rabi-ul-Awwal for a grand Mahfil with renowned Naat Khwans and scholars from across the country.",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=500&fit=crop",
    category: "Event",
    featured: true
  },
  {
    id: 2,
    date: "2025-11-15",
    title: "New Intake 1447 AH – Admissions Open",
    excerpt: "Applications are now open for Hifz, Aalim, and Qira’at courses. Limited seats available.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
    category: "Admissions",
    link: "/admissions"
  },
  {
    id: 3,
    date: "2025-11-10",
    title: "Shaykh Abdullah al-Judai Visit",
    excerpt: "Renowned scholar from Madinah University will deliver a special lecture on 'Tafsir of Surah al-Kahf' this Friday after Maghrib.",
    image: "https://images.pexels.com/photos/27063861/pexels-photo-27063861.jpeg",
    category: "Lecture"
  },
  {
    id: 4,
    date: "2025-10-28",
    title: "Winter Vacation Schedule Announced",
    excerpt: "Madrasa will remain closed from 20th December 2025 to 5th January 2026. Classes resume on 6th January Insha’Allah.",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&h=500&fit=crop",
    category: "Notice"
  },
  {
    id: 5,
    date: "2025-10-20",
    title: "Fundraising Iftar Program Success",
    excerpt: "Alhamdulillah, through your generous support we raised ₹18.4 lakhs for the new girls’ hostel wing. Jazaakumullahu khairan!",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=500&fit=crop",
    category: "Fundraising",
    featured: true
  },
  {
    id: 6,
    date: "2025-10-05",
    title: "Qur’an Completion Ceremony",
    excerpt: "42 students completed Hifz-ul-Qur’an this term. Dua and certificate ceremony held in the presence of parents and local Ulama.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
    category: "Achievement"
  }
];


const getIdFromUrl = () => {
    const path = window.location.pathname; // "/news/3"
    const id = path.split('/').pop();
    return isNaN(id) ? null : parseInt(id);
};

const findAnnouncement = () => {
    const id = getIdFromUrl();
    return announcementsData.find(item => item.id === id) || null;
};

export const readAnounce = () => {
    const root = document.getElementById("root");
    root.innerHTML = '';

    const post = findAnnouncement();

    // If not found → 404 style
    if (!post) {
        safeInject(header(), root);
        safeInject(`
            <main class="pt-24 pb-16 min-h-screen bg-gray-50">
                <div class="max-w-3xl mx-auto px-6 py-20 text-center">
                    <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
                    <p class="text-2xl text-gray-600">Announcement not found</p>
                    <a href="/anounce" class="inline-block mt-8 text-green-600 font-bold hover:underline">
                        ← Back to anouncements 
                    </a>
                </div>
            </main>
        `, root);
        safeInject(footer(), root);
        return;
    }

    // Format date nicely
    const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    safeInject(header(), root);

    safeInject(`
        <main class="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
            <article class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Back Button -->
                <a href="/news" class="inline-flex items-center text-green-600 font-bold hover:text-green-700 mb-8 transition">
                    ← All Announcements
                </a>

                <!-- Featured Badge -->
                ${post.featured ? `
                    <div class="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
                        Featured Announcement
                    </div>
                ` : ''}

                <!-- Title -->
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    ${post.title}
                </h1>

                <!-- Meta Info -->
                <div class="flex flex-wrap items-center gap-6 mt-6 text-gray-600">
                    <time class="flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span class="font-medium">${formattedDate}</span>
                    </time>
                    <span class="flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                        </svg>
                        <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            ${post.category || 'General'}
                        </span>
                    </span>
                    ${post.author ? `
                        <span class="flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                            <span>By ${post.author}</span>
                        </span>
                    ` : ''}
                </div>

                <!-- Hero Image -->
                <div class="mt-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img src="${post.image}" alt="${post.title}" class="w-full h-96 md:h-[500px] object-cover">
                </div>

                <!-- Full Content -->
                <div class="prose prose-lg max-w-none mt-12 text-gray-700 leading-relaxed">
                    <p class="text-xl text-gray-800 font-medium leading-relaxed">
                        ${post.excerpt}
                    </p>
                    <div class="mt-8 text-lg">
                        ${post.fullContent || `
                            <p>
                                Alhamdulillah, we are delighted to share this wonderful moment with the entire community. 
                                This event marks another milestone in our journey of preserving and spreading Islamic knowledge.
                            </p>
                            <p class="mt-6">
                                Your continued support and dua are the backbone of Darul Uloom Bilaliya. May Allah accept all our efforts and grant us sincerity in serving His deen.
                            </p>
                            <p class="mt-6 font-bold text-green-700">
                                Jazakumullahu khairan to everyone who made this possible.
                            </p>
                        `}
                    </div>
                </div>

                <!-- Share Buttons (optional fancy touch) -->
                <div class="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
                    <span class="text-gray-600 font-medium">Share this announcement:</span>
                    <button onclick="navigator.share?.({title: '${post.title}', url: window.location.href})" 
                            class="text-blue-600 hover:underline">Share</button>
                    <a href="https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}" 
                       target="_blank" class="text-green-600 hover:underline">WhatsApp</a>
                </div>
            </article>
        </main>
    `, root);

    safeInject(footer(), root);

    // Mobile menu
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
        document.querySelector('.mobile-menu')?.classList.toggle('hidden');
    });
};
