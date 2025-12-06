"use strict";

import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { safeInject } from "../utils.js";
import { colors } from "../colors.js";

const history = () => {
    const data = {
        title: "Our Journey • From Humble Beginnings to a Beacon of Knowledge",
        paragraphs: [
            "Established on 11th Shawwal ul Mukaram 1411 Hijri (1991 CE), Darul Uloom Bilaliya began as a humble institution on a small plot of land (40×60 sq. ft.) in Bilalabad, Lal Bazar. Founded with the vision of preserving authentic Islamic knowledge, the institution grew under the spiritual guidance of renowned scholars including Sheikh Maulana Maseehullah Khan (RA).",
            "Through unwavering community support, divine blessings, and decades of dedication, Darul Uloom Bilaliya has transformed into one of the leading centers of Deobandi education in Kashmir — currently nurturing over 550 residential students and supported by 60 devoted staff members."
        ],
        milestone: { year: "1991", text: "Founded with Barakah" },
        image: "https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg"
    };

    return `
<section class="py-32 bg-gradient-to-b from-${colors.neutral.bg} to-white">
    <div class="container mx-auto px-6 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            <!-- TEXT SIDE -->
            <div class="space-y-12">
                <!-- Title -->
                <div>
                    <h2 class="text-5xl md:text-6xl font-extrabold ${colors.black.base} tracking-tight">
                        ${data.title.split(' • ')[0]}
                    </h2>
                    <p class="mt-4 text-xl md:text-2xl ${colors.neutral.dark} font-medium leading-relaxed">
                        ${data.title.split(' • ')[1]}
                    </p>
                </div>

                <!-- Paragraphs -->
                <div class="space-y-7 text-lg leading-relaxed max-w-xl ${colors.neutral.dark}">
                    ${data.paragraphs.map(p => `<p class="${colors.neutral.medium}">${p}</p>`).join('')}
                </div>

                <!-- Milestone -->
                <div class="flex items-center gap-8 pt-10">
                    <div class="w-32 h-32 rounded-2xl ${colors.white.bg} shadow-[0_8px_40px_rgba(0,0,0,0.08)] border ${colors.neutral.border} flex flex-col items-center justify-center">
                        <span class="text-4xl font-extrabold ${colors.primary.base}">${data.milestone.year}</span>
                        <span class="text-xs tracking-wider ${colors.neutral.medium} mt-1">Hijri 1411</span>
                    </div>
                    <div>
                        <p class="text-3xl font-bold ${colors.black.base}">Established</p>
                        <p class="text-lg font-medium ${colors.neutral.dark}">${data.milestone.text}</p>
                    </div>
                </div>
            </div>

            <!-- IMAGE SIDE -->
            <div class="relative">

                <div class="rounded-3xl overflow-hidden shadow-2xl border ${colors.neutral.border} ${colors.white.bg}">
                    <img 
                        src="${data.image}" 
                        alt="Original Darul Uloom Building" 
                        class="w-full h-full object-cover"
                    >
                </div>

                <!-- Floating Quote Box -->
                <div class="absolute -bottom-12 -left-12 backdrop-blur-xl ${colors.white.bg}/70 border ${colors.white.bg}/40 shadow-xl p-8 rounded-2xl max-w-xs">
                    <p class="text-xl font-medium ${colors.neutral.dark} leading-relaxed italic">
                        "من عمل صالحا فلنفسه"
                    </p>
                    <p class="mt-4 text-sm ${colors.neutral.dark} text-right">
                        — Whoever does righteousness, it is for his own soul
                    </p>
                </div>

            </div>

        </div>
    </div>
</section>
`;
};


const vision = () => {
    const items = [
        {
            title: "Our Mission",
            description: "To impart authentic Islamic education rooted in the Qur'an and Sunnah, cultivating students into morally upright, intellectually rigorous, and spiritually grounded individuals who contribute positively to society."
        },
        {
            title: "Our Vision",
            description: "To be a leading beacon of classical Islamic scholarship in Kashmir, preserving the rich tradition of the Deobandi school while responsibly addressing the needs of the contemporary Muslim Ummah."
        }
    ];

    return `
<section class="py-32 ${colors.neutral.bg} overflow-hidden">
    <div class="container mx-auto px-6 max-w-7xl">
        <!-- Section Heading -->
        <div class="text-center mb-20">
            <h2 class="text-5xl md:text-6xl font-black ${colors.black.base} tracking-tight">
                Guided by Purpose
            </h2>
            <p class="mt-6 text-xl ${colors.neutral.dark} max-w-3xl mx-auto leading-relaxed">
                Rooted in tradition. Driven by excellence. Devoted to service.
            </p>
        </div>

        <!-- Mission & Vision Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            ${items.map(item => `
                <div class="group relative ${colors.white.bg} rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border ${colors.neutral.border} overflow-hidden">
                    <!-- Subtle Gradient Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-br from-${colors.primary.bg}/30 to-${colors.primary.hover}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div class="relative z-10">
                        <h3 class="text-3xl font-black ${colors.black.base} mb-6 text-center font-arabic">
                            ${item.title}
                        </h3>
                        <p class="text-lg ${colors.neutral.dark} leading-relaxed text-center">
                            ${item.description}
                        </p>
                    </div>

                    <!-- Bottom Accent Line -->
                    <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-${colors.primary.bg} to-${colors.primary.hover} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </div>
            `).join('')}
        </div>
    </div>
</section>
`;
};

const leadership = () => {
    const members = [
        {
            image: "https://images.pexels.com/photos/34610053/pexels-photo-34610053.jpeg",
            name: "Hazrat Mufti Abdur Rashid Miftahi Sb Db",
            position: "Principal & Chief Mufti",
            description: "With over 20 years of experience in Islamic education and scholarship, Mufti Sahib provides spiritual and academic leadership to the institution."
        },
        {
            image: "https://images.pexels.com/photos/34043418/pexels-photo-34043418.jpeg",
            name: "Maulana [Name]",
            position: "Vice Principal",
            description: "Overseeing the daily academic operations and student welfare, ensuring the smooth functioning of all educational programs."
        }
    ];

    return `
<section class="py-32 ${colors.neutral.bg} overflow-hidden">
    <div class="container mx-auto px-6 max-w-7xl">
        <!-- Section Heading -->
        <div class="text-center mb-20">
            <h2 class="text-5xl md:text-6xl font-black ${colors.black.base} tracking-tight">
                Our Leadership
            </h2>
            <p class="mt-6 text-xl ${colors.neutral.dark} max-w-3xl mx-auto leading-relaxed">
                Guided by scholars of knowledge, compassion, and unwavering dedication
            </p>
        </div>

        <!-- Leadership Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            ${members.map(member => `
                <div class="group ${colors.white.bg} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border ${colors.neutral.border}">
                    <div class="p-12 text-center">
                        <!-- Member Image -->
                        <div class="w-40 h-40 mx-auto mb-10 rounded-full overflow-hidden border-8 border-${colors.white.bg} shadow-2xl ring-4 ring-${colors.primary.bg} group-hover:ring-${colors.primary.hover} transition-all">
                            ${member.image 
                                ? `<img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover">`
                                : `<div class="w-full h-full bg-gradient-to-br from-${colors.neutral.light} to-${colors.neutral.medium} flex items-center justify-center">
                                        <span class="text-5xl ${colors.neutral.medium}">person</span>
                                   </div>`
                            }
                        </div>

                        <!-- Name & Position -->
                        <h3 class="text-2xl md:text-3xl font-black ${colors.black.base} mb-3 font-arabic leading-tight">
                            ${member.name}
                        </h3>
                        <p class="text-xl font-bold ${colors.primary.base} mb-6 tracking-wide">
                            ${member.position}
                        </p>

                        <!-- Description -->
                        <p class="${colors.neutral.dark} leading-relaxed text-lg">
                            ${member.description}
                        </p>
                    </div>

                    <!-- Elegant Bottom Border -->
                    <div class="h-1 bg-gradient-to-r from-transparent via-${colors.primary.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
            `).join('')}
        </div>
    </div>
</section>
`;
};

const facilities = () => {
  const facilitiesList = [
    { 
      img: "https://images.pexels.com/photos/532792/pexels-photo-532792.jpeg", 
      title: "Main Masjid", 
      desc: "Spacious prayer hall accommodating 500+ worshippers with separate sections." 
    },
    { 
      img: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg", 
      title: "Classrooms", 
      desc: "Well-ventilated classrooms equipped with modern teaching aids." 
    },
    { 
      img: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg", 
      title: "Student Hostels", 
      desc: "Comfortable residential facilities for 550+ students." 
    },
    { 
      img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg", 
      title: "Dining Hall", 
      desc: "Clean and hygienic dining facility serving nutritious meals." 
    }
  ];

  return `
<section class="py-32 ${colors.white.bg} relative overflow-hidden">

  <!-- Soft background gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-black/5 via-white/60 to-gray-100/40 pointer-events-none"></div>

  <div class="relative container mx-auto px-6 max-w-7xl">

    <!-- Section Heading -->
    <div class="text-center mb-20">
      <h2 class="text-5xl md:text-6xl font-black ${colors.black.base} tracking-tight">
        Our Facilities
      </h2>
      <p class="mt-6 text-xl ${colors.neutral.medium} max-w-3xl mx-auto leading-relaxed">
        A nurturing environment designed for spiritual growth and academic excellence
      </p>
    </div>

    <!-- Facility Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      ${facilitiesList
        .map(
          (f) => `
        <div 
          class="
            group relative ${colors.white.bg} 
            rounded-3xl p-10 text-center 
            shadow-md hover:shadow-2xl 
            transition-all duration-500 
            border ${colors.neutral.border} 
            overflow-hidden backdrop-blur-xl
          "
        >

          <!-- Glow Background -->
          <div 
            class="
              absolute inset-0 opacity-0 
              bg-gradient-to-br from-emerald-50/50 to-green-100/40 
              group-hover:opacity-100 
              transition-opacity duration-700
            "
          ></div>

          <div class="relative z-10">

            <!-- Icon Image -->
            <div 
              class="
                w-28 h-28 mx-auto mb-8 overflow-hidden rounded-3xl 
                shadow-xl ring-2 ring-emerald-600/20 
                transform transition-all duration-500 
                group-hover:scale-110 group-hover:rotate-3
                bg-white
              "
            >
              <img 
                src="${f.img}" 
                alt="${f.title}" 
                class="w-full h-full object-cover"
              >
            </div>

            <!-- Title -->
            <h3 
              class="
                text-2xl font-bold ${colors.black.base} 
                mb-4 tracking-tight
              "
            >
              ${f.title}
            </h3>

            <!-- Description -->
            <p class="${colors.neutral.dark} leading-relaxed text-base">
              ${f.desc}
            </p>

          </div>

          <!-- Floating Accent Halo -->
          <div 
            class="
              absolute top-4 right-4 w-24 h-24 
              bg-emerald-100 rounded-full blur-3xl 
              opacity-0 group-hover:opacity-40 
              transition-opacity duration-700
            "
          ></div>

        </div>
      `
        )
        .join("")}

    </div>

    <!-- Closing Note -->
    <div class="text-center mt-20">
      <p class="${colors.neutral.medium} text-lg italic tracking-wider">
        Every corner built with barakah and excellence • Established 1991
      </p>
    </div>

  </div>
</section>
`;
};


export const about = () => {
    const root = document.getElementById("root");
    root.innerHTML = ''; 

    safeInject(header(), root);
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


