"use strict";

import { safeInject, navigateTo,} from './utils.js';

class AboutPage {
    constructor() {
        this.rootElement = document.getElementById('root');
        this.init();
    }

    init() {
        this.renderLayout();
        this.attachEventListeners();
    }

    renderLayout() {
        this.renderHeader();
        this.renderPageHeader();
        this.renderHistory();
        this.renderMissionVision();
        this.renderLeadership();
        this.renderFacilities();
        this.renderFooter();
    }

    // Data Objects
    getHeaderData() {
        return {
            prayerTime: "Fajr: 5:15 AM | Dhuhr: 12:30 PM",
            phoneNumber: "+91 99999 99999",
            logo: {
                src: "https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg",
                alt: "Darul Uloom Bilaliya Logo",
                arabicTitle: "دار العلوم بلالیہ",
                englishTitle: "Darul Uloom Bilaliya"
            },
            navItems: [
                { href: "#home", text: "Home" },
                { href: "#about", text: "About", active: true },
                { href: "#academics", text: "Academics" },
                { href: "#multimedia", text: "Multimedia" },
                { href: "#resources", text: "Resources" },
                { href: "#support", text: "Support Us", cta: true }
            ]
        };
    }

    getPageHeaderData() {
        return {
            title: "About Darul Uloom Bilaliya",
            subtitle: "Our Legacy, Mission, and Vision for Islamic Education"
        };
    }

    getHistoryData() {
        return {
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
    }
    getMissionVisionData() {
        return {
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
    }

    getLeadershipData() {
        return {
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
    }

    getFacilitiesData() {
        return {
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
    }

    getFooterData() {
        return {
            institution: {
                name: "Darul Uloom Bilaliya",
                address: "Ahmada Kadal, Lal Bazar<br>Srinagar, Jammu & Kashmir"
            },
            quickLinks: [
                { href: "#about", text: "About Us" },
                { href: "#academics", text: "Academics" },
                { href: "#admissions", text: "Admissions" },
                { href: "#contact", text: "Contact" }
            ],
            connectLinks: [
                { href: "#multimedia", text: "Audio Lectures" },
                { href: "#multimedia", text: "Photo Gallery" },
                { href: "#resources", text: "Resources" },
                { href: "#support", text: "Support Us" }
            ],
            contact: {
                phone: "+91 99999 99999",
                email: "info@darululoombilaliya.org"
            }
        };
    }

    renderHeader() {
    }

    renderPageHeader() {
        const data = this.getPageHeaderData();
        const pageHeaderHTML = `
<section class="bg-gradient-to-r from-green-800 to-green-700 text-white py-24">
<div class="container mx-auto px-4 text-center">
<h1 class="text-4xl md:text-5xl font-arabic font-bold mb-6 drop-shadow-lg">${data.title}</h1>
<p class="text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">${data.subtitle}</p>
</div>
</section>
`;

        safeInject(pageHeaderHTML, this.rootElement);
    }

    renderHistory() {
        const data = this.getHistoryData();
        const paragraphsHTML = data.paragraphs.map(p => 
            `<p class="text-lg text-gray-700 leading-relaxed mb-6">${p}</p>`
        ).join('');

        const historyHTML = `
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
</section>
`;

        safeInject(historyHTML, this.rootElement);
    }

    renderMissionVision() {
        const data = this.getMissionVisionData();
        const itemsHTML = data.items.map(item => `
<div class="bg-white p-10 rounded-2xl shadow-xl text-center border-t-4 border-green-600 hover:shadow-2xl transition-all transform hover:-translate-y-2">
<div class="text-5xl mb-6 transform hover:scale-110 transition-transform">${item.icon}</div>
<h3 class="text-2xl font-arabic text-green-800 mb-6 font-bold">${item.title}</h3>
<p class="text-gray-600 leading-relaxed text-lg">${item.description}</p>
</div>
`).join('');

        const missionHTML = `
<section class="py-20 bg-gradient-to-b from-gray-50 to-white">
<div class="container mx-auto px-4">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
${itemsHTML}
</div>
</div>
</section>
`;

        safeInject(missionHTML, this.rootElement);
    }

    renderLeadership() {
        const data = this.getLeadershipData();
        const membersHTML = data.members.map(member => `
<div class="bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2">
<div class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-100 shadow-lg">
${member.image ? 
`<img src="${member.image}" alt="${member.alt}" class="w-full h-full object-cover">` :
`<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">Image</div>`
}
</div>
<h3 class="text-xl font-arabic text-gray-800 mb-2 font-semibold">${member.name}</h3>
<p class="text-green-600 font-semibold mb-4 text-lg">${member.position}</p>
<p class="text-gray-600 text-sm leading-relaxed">${member.description}</p>
</div>
`).join('');

        const leadershipHTML = `
<section class="py-20 bg-gradient-to-br from-white to-beige-50">
<div class="container mx-auto px-4">
<h2 class="text-3xl md:text-4xl font-arabic text-green-800 text-center mb-16 font-bold">${data.title}</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
${membersHTML}
</div>
</div>
</section>
`;

        safeInject(leadershipHTML, this.rootElement);
    }

    renderFacilities() {
        const data = this.getFacilitiesData();
        const itemsHTML = data.items.map(item => `
<div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
<div class="text-4xl mb-6 transform group-hover:scale-110 transition-transform">${item.icon}</div>
<h3 class="text-lg font-arabic text-green-800 mb-4 font-semibold">${item.title}</h3>
<p class="text-gray-600 text-sm leading-relaxed">${item.description}</p>
</div>
`).join('');

        const facilitiesHTML = `
<section class="py-20 bg-gradient-to-b from-gray-50 to-white">
<div class="container mx-auto px-4">
<h2 class="text-3xl md:text-4xl font-arabic text-green-800 text-center mb-16 font-bold">${data.title}</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
${itemsHTML}
</div>
</div>
</section>
`;

        safeInject(facilitiesHTML, this.rootElement);
    }

    attachEventListeners() {
        setTimeout(() => {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const mainNav = document.querySelector('.main-nav');

            if (mobileMenuBtn && mainNav) {
                mobileMenuBtn.addEventListener('click', () => {
                    mainNav.classList.toggle('hidden');
                });
            }

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = link.getAttribute('href').replace('#', '');
                    navigateTo(page);
                });
            });

            const langButtons = document.querySelectorAll('.lang-btn');
            langButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    langButtons.forEach(b => {
                        b.classList.remove('bg-green-600', 'text-white');
                        b.classList.add('text-gray-300');
                    });
                    btn.classList.add('bg-green-600', 'text-white');
                    btn.classList.remove('text-gray-300');
                });
            });
        }, 100);
    }
}

export { AboutPage };

