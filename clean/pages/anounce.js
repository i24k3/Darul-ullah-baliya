"use strict";
import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { newsCard } from "../components/newsCard.js";
import { safeInject } from "../utils.js";

// Yeh data tumhare paas already hai — copy-paste kar do
const announcementsData = [
  { id: 1, date: "2025-11-20", title: "Annual Milad-un-Nabi (SAW) Celebration", excerpt: "Join us on 12th Rabi-ul-Awwal...", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&h=500&fit=crop", category: "Event", featured: true },
  { id: 2, date: "2025-11-15", title: "New Intake 1447 AH – Admissions Open", excerpt: "Applications are now open...", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop", category: "Admissions", link: "/admissions" },
  { id: 3, date: "2025-11-10", title: "Shaykh Abdullah al-Judai Visit", excerpt: "Renowned scholar from Madinah...", image: "https://images.pexels.com/photos/27063861/pexels-photo-27063861.jpeg", category: "Lecture" },
  { id: 4, date: "2025-10-28", title: "Winter Vacation Schedule Announced", excerpt: "Madrasa will remain closed...", image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&h=500&fit=crop", category: "Notice" },
  { id: 5, date: "2025-10-20", title: "Fundraising Iftar Program Success", excerpt: "Alhamdulillah, we raised ₹18.4 lakhs...", image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=500&fit=crop", category: "Fundraising", featured: true },
  { id: 6, date: "2025-10-05", title: "Qur’an Completion Ceremony", excerpt: "42 students completed Hifz-ul-Qur’an...", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop", category: "Achievement" }
];

export const anounce = () => {
    const root = document.getElementById("root");
    root.innerHTML = "";
    safeInject(header(), root);

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    if (id) {
        // DETAIL VIEW
        const post = announcementsData.find(p => p.id === parseInt(id));
        if (!post) {
            safeInject(`<main class="pt-24 text-center min-h-screen"><h1 class="text-6xl">Not Found</h1><a href="/news" class="text-green-600">← Back</a></main>`, root);
        } else {
            const date = new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
            safeInject(`
                <main class="pt-24 pb-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
                    <div class="max-w-5xl mx-auto px-6">
                        <a href="/news" class="text-green-600 font-bold text-lg">← All Announcements</a>
                        ${post.featured ? '<span class="ml-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm">Featured</span>' : ''}
                        <h1 class="text-4xl md:text-6xl font-bold mt-6 leading-tight">${post.title}</h1>
                        <p class="text-gray-600 mt-4 text-lg">${date} • ${post.category}</p>
                        <img src="${post.image}" alt="${post.title}" class="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl mt-10">
                        <div class="prose prose-lg mt-12 text-gray-700 leading-relaxed text-justify">
                            <p class="text-xl font-medium">${post.excerpt}</p>
                            <p class="mt-8">Alhamdulillah, this blessed event was conducted with the grace of Allah and your kind support. May Allah accept from us all.</p>
                        </div>
                    </div>
                </main>
            `, root);
        }
    } else {
        // LIST VIEW
        const cards = announcementsData
            .map(item => newsCard({ ...item, link: `/anounce?id=${item.id}` }))
            .join("");

        safeInject(`
            <main class="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
                <div class="max-w-7xl mx-auto px-6 text-center">
                    <h1 class="text-5xl md:text-6xl font-bold">Latest News & Announcements</h1>
                    <p class="text-xl text-gray-600 mt-4">Stay updated with Darul Uloom Bilaliya</p>
                    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">${cards}</div>
                </div>
            </main>
        `, root);
    }

    safeInject(footer(), root);

    // Mobile menu toggle
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
        document.querySelector('.mobile-menu')?.classList.toggle('hidden');
    });
};
