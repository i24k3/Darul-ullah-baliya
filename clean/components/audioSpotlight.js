"use strict";

export const audioSpotlight = () => {
    const data = {
        title: "Latest from Mufti Sahib",
        audio: {
            title: "Allah Ki Rahmat Sai Mayoos Na Ho",
            date: "Delivered on: Sep 13, 2020",
            src: "https://ia803406.us.archive.org/21/items/DoraemonMovieSongs/05.%20%E6%AD%A6%E7%94%B0%E9%89%84%E7%9F%A2%E4%B8%80%E5%BA%A7%20-%20%E5%A4%A2%E3%81%AE%E4%BA%BA%20%281994%E5%B9%B4%20%E3%83%89%E3%83%A9%E3%81%88%E3%82%82%E3%82%93%20%E3%81%AE%E3%81%B3%E5%A4%AA%E3%81%A8%E5%A4%A2%E5%B9%BB%E4%B8%89%E5%89%A3%E5%A3%AB%29.mp3", 
            link: { href: "#multimedia", text: "View All Lectures" }
        }
    };

   return `
<section class="audio-spotlight py-20 bg-gradient-to-br from-white to-beige-50">
    <div class="container mx-auto px-4">
        <h2 class="section-title text-4xl font-arabic text-green-800 text-center mb-16 font-bold">${data.title}</h2>
        <div class="audio-player max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl text-center border border-gray-100">
            <div class="audio-info mb-8">
                <h3 class="text-2xl font-semibold text-gray-800 mb-2">${data.audio.title}</h3>
                <p class="text-gray-600 text-lg">${data.audio.date}</p>
            </div>
            <audio controls class="custom-audio w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-inner">
                <source src="${data.audio.src}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <a href="${data.audio.link.href}" class="all-lectures-link text-green-700 font-semibold hover:text-green-800 inline-flex items-center group transition-all">
                ${data.audio.link.text} <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
        </div>
    </div>
</section>
`;
}
