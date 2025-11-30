"use strict";

import { header } from "../components/header.js";
import { footer } from "../components/footer.js";

import { safeInject } from "../utils.js";


const pageHeader = () => {
    const data = {
        title: "About Darul Uloom Bilaliya",
        subtitle: "Our Legacy, Mission, and Vision for Islamic Education"
    };

    return `
        <section class="bg-gradient-to-r from-green-800 to-green-700 text-white pt-32 pb-16">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-arabic font-bold mb-6 drop-shadow-lg">${data.title}</h1>
                <p class="text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">${data.subtitle}</p>
            </div>
        </section> `;
}

const history = () => {
    const data = {
        title: "Our History & Legacy",
        paragraphs: [
            "Established on 11th Shawwal ul Mukaram 1411 Hijri (1991 CE), Darul Uloom Bilaliya began as a humble institution on a small plot of land (40×60 sq. ft.) in Bilalabad, Lal Bazar. Founded with the vision of preserving authentic Islamic knowledge, the institution grew under the spiritual guidance of renowned scholars including Sheikh Maulana Maseehullah Khan (RA).",
            "Through community support and divine blessings, the Darul Uloom has expanded to become one of the leading centers of Deobandi education in Kashmir, currently accommodating over 550 residential students and 60 dedicated staff members."
        ],
        image: {
            src: "https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg", // Placeholder
            alt: "Original Darul Uloom Building"
        },
        milestone: {
            year: "1991",
            text: "Year Established"
        }
    };
    const paragraphsHTML = data.paragraphs.map(p => `<p class="text-lg text-gray-700 leading-relaxed mb-6">${p}</p>`).join('');

    return `
        <section class="py-20 bg-gradient-to-br from-white to-beige-50">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <h2 class="text-3xl md:text-4xl font-arabic text-green-800 mb-6 font-bold">${data.title}</h2>
                        ${paragraphsHTML}
                    </div>
                    <div class="relative">
                        <img src="${data.image.src}" alt="${data.image.alt}" class="rounded-2xl shadow-2xl w-full h-96 object-cover">
                        <div class="absolute -bottom-6 -left-6 bg-green-700 text-white p-8 rounded-2xl shadow-2xl">
                        <div class="text-4xl font-bold">${data.milestone.year}</div>
                        <div class="text-sm opacity-90">${data.milestone.text}</div>
                    </div>
                    </div>
                </div>
            </div>
        </section> `;
} 

const vision = () => {

    const data = {
        items: [
            {
                icon: "🎯",
                title: "Our Mission",
                description: "To impart authentic Islamic education rooted in the Qur'an and Sunnah, cultivating students into morally upright, intellectually rigorous, and spiritually grounded individuals who contribute positively to society."
            },
            {
                icon: "🌟",
                title: "Our Vision",
                description: "To be a leading beacon of classical Islamic scholarship in Kashmir, preserving the rich tradition of the Deobandi school while responsibly addressing the needs of the contemporary Muslim Ummah."
            }
        ]
    };

    const itemsHTML = data.items.map(item => `
        <div class="bg-white p-10 rounded-2xl shadow-xl text-center border-t-4 border-green-600 hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div class="text-5xl mb-6 transform hover:scale-110 transition-transform">${item.icon}</div>
            <h3 class="text-2xl font-arabic text-green-800 mb-6 font-bold">${item.title}</h3>
            <p class="text-gray-600 leading-relaxed text-lg">${item.description}</p>
        </div> `).join('');

    return `
        <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                ${itemsHTML}
                </div>
            </div>
        </section> `;
}


const leadership = () => {
    const data = {
        title: "Our Leadership",
        members: [
            {
                image: "images/Screenshot_20251011_132138-1.png",
                alt: "Mufti Sahib",
                name: "Hazrat Mufti Abdur Rashid Miftahi Sb Db",
                position: "Principal & Chief Mufti",
                description: "With over 20 years of experience in Islamic education and scholarship, Mufti Sahib provides spiritual and academic leadership to the institution."
            },
            {
                image: null,
                alt: "Vice Principal",
                name: "Maulana [Name]",
                position: "Vice Principal",
                description: "Overseeing the daily academic operations and student welfare, ensuring the smooth functioning of all educational programs."
            }
        ]
    };

    const membersHTML = data.members.map(member => `
        <div class="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-100 shadow-lg">
                ${member.image ? `<img src="${member.image}" alt="${member.alt}" class="w-full h-full object-cover">` : `<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">Image</div>`} 
            </div>
            <h3 class="text-xl font-arabic text-gray-800 mb-2 font-semibold">${member.name}</h3>
            <p class="text-green-600 font-semibold mb-4 text-lg">${member.position}</p>
            <p class="text-gray-600 text-sm leading-relaxed">${member.description}</p>
        </div> `).join('');

    return`
        <section class="py-20 bg-gradient-to-br from-white to-beige-50">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-arabic text-green-800 text-center mb-16 font-bold">${data.title}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                ${membersHTML}
                </div>
            </div>
        </section> `;
}


const facilities = () => {
    const data = {
        title: "Our Facilities",
        items: [
            {
                icon: "🕌",
                title: "Main Masjid",
                description: "Spacious prayer hall accommodating 500+ worshippers with separate sections."
            },
            {
                icon: "📚",
                title: "Classrooms",
                description: "Well-ventilated classrooms equipped with modern teaching aids."
            },
            {
                icon: "🏢",
                title: "Student Hostels",
                description: "Comfortable residential facilities for 550+ students."
            },
            {
                icon: "🍽️",
                title: "Dining Hall",
                description: "Clean and hygienic dining facility serving nutritious meals."
            }
        ]
    };

    const itemsHTML = data.items.map(item => `
        <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
            <div class="text-4xl mb-6 transform group-hover:scale-110 transition-transform">${item.icon}</div>
            <h3 class="text-lg font-arabic text-green-800 mb-4 font-semibold">${item.title}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">${item.description}</p>
        </div> `).join('');

    return `
        <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl md:text-4xl font-arabic text-green-800 text-center mb-16 font-bold">${data.title}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"> ${itemsHTML} </div>
            </div>
        </section> `;
}


export const about = () => {
    const root = document.getElementById("root");
    root.innerHTML = ''; 

    safeInject(header(), root);
    safeInject(pageHeader(), root);
    safeInject(history(), root);
    safeInject(vision(), root);
    safeInject(leadership(), root);
    safeInject(facilities(), root);
    safeInject(footer(), root);

    // Toggle mobile menu
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    });
};


