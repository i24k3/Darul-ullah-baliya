"use strict";

import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { initScrollFade, safeInject} from "../utils.js";
import { wrapFade} from "../utils.js";
import { colors } from "../colors.js";

export const hero = () => {
  const data = {
    title: "Welcome to Darul Uloom Bilaliya",
    quote: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    translation: '"Seeking knowledge is an obligation upon every Muslim."',
    source: "— Sunan Ibn Majah",
  };

  const buttons = [
    { href: "/academics", text: "Explore", type: "primary" },
    { href: "/admissions", text: "Admissions", type: "secondary" },
  ];

  const btn = (t) => {
    const base =
      "py-4 font-semibold rounded-lg transition-transform duration-300 text-center will-change-transform shadow-sm";
    return t === "primary"
      ? `${base} bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105 px-12`
      : `${base} border border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:scale-105 px-8 bg-gray-50`;
  };

  const renderButtons = () =>
    buttons
      .map(
        (button) =>
          `<a href="${button.href}" class="${btn(button.type)}">${button.text}</a>`
      )
      .join("");

  return `
<section 
  class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 text-gray-900"
>

<div 
  class="absolute inset-0 z-0"
  style="
    background-image: url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22140%22 height=%22140%22 viewBox=%220 0 140 140%22%3E%3Cg stroke=%22%23000%22 stroke-width=%221.2%22 opacity=%220.18%22 fill=%22none%22%3E%3Cpolygon points=%2270,5 130,40 130,100 70,135 10,100 10,40%22/%3E%3Cline x1=%2270%22 y1=%225%22 x2=%2270%22 y2=%22135%22/%3E%3Cline x1=%2210%22 y1=%2240%22 x2=%22130%22 y2=%22100%22/%3E%3Cline x1=%22130%22 y1=%2240%22 x2=%2210%22 y2=%22100%22/%3E%3Cpolygon points=%2270,28 108,50 108,90 70,112 32,90 32,50%22/%3E%3C/g%3E%3C/svg%3E');
    background-size: 160px;
    background-repeat: repeat;
  ">
</div>
  <!-- Soft Light Gradient -->
  <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/55 to-white/20 backdrop-blur-[1px] z-10"></div>

  <!-- Content -->
  <div class="relative z-20 text-center px-6 sm:px-8 lg:px-12 max-w-4xl space-y-10 opacity-0 animate-fade-in">

    <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
      ${data.title}
    </h1>

    <div class="bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl inline-block shadow-[0_8px_32px_rgba(0,0,0,0.12)] space-y-3 border border-white/40">
      <p class="text-2xl sm:text-3xl font-semibold" lang="ar" dir="rtl">${data.quote}</p>
      <p class="text-lg sm:text-xl opacity-90">${data.translation}</p>
      <cite class="block text-base opacity-80">${data.source}</cite>
    </div>

    <div class="flex flex-col sm:flex-row gap-6 justify-center mt-8">
      ${renderButtons()}
    </div>

  </div>

</section>

<style>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.9s ease-out forwards;
}
</style>
`;
};


export const welcome = () => {
  const data = {
    title: "السلام عليكم",
    paragraphs: [
      "Established in 1411 Hijri (1991 CE), Darul Uloom Bilaliya has been a beacon of Islamic knowledge in the heart of Srinagar. We are dedicated to nurturing students through authentic Islamic education based on the Quran and Sunnah, following the esteemed Dars-e-Nizami curriculum.",
      "With over 550 residential students and a dedicated team of 60 scholars and staff, we strive to develop individuals who excel in knowledge, character, and service to the community.",
    ],
    link: { href: "/about", text: "Learn More About Our Legacy" },
  };

  const paragraphsHTML = data.paragraphs
    .map(
      (p) => `
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
          ${p}
        </p>
      `
    )
    .join("");

  return `
<section class="relative py-40 md:py-32 bg-gray-50 overflow-hidden">

  <div class="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/40 backdrop-blur-sm"></div>

  <div class="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center space-y-10 opacity-0 animate-fade-in">

    <h2 class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 drop-shadow-sm">
      ${data.title}
    </h2>

    <div class="space-y-6">
      ${paragraphsHTML}
    </div>

    <a 
      href="${data.link.href}"
      class="inline-flex items-center gap-3 px-8 py-4 rounded-xl 
      text-lg font-semibold text-emerald-700 bg-white shadow 
      border border-emerald-100 transition-transform duration-300 
      hover:shadow-lg hover:-translate-y-0.5 hover:bg-emerald-50"
    >
      ${data.link.text}
      <span class="transition-transform duration-300">→</span>
    </a>

  </div>

</section>

<style>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.9s ease-out forwards;
}
</style>
`;
};


export const quickLinks = () => {
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

  const itemsHTML = data.items.map( (item) => `
      <a 
        href="${item.href}"
        class="
          group block p-8 rounded-2xl bg-white border border-gray-200
          shadow-sm hover:shadow-md
          transition-all duration-300
        "
      >

        <!-- Text -->
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          ${item.title}
        </h3>

        <p class="text-gray-600 text-sm leading-relaxed">
          ${item.description}
        </p>

      </a>
      `
    )
    .join("");

  return `
<section class="py-24 bg-gray-50">

  <div class="max-w-7xl mx-auto px-6">

    <div class="text-center mb-16 space-y-4">
      <h2 class="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
        Quick Access
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Essential tools and resources at a glance
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      ${itemsHTML}
    </div>

  </div>
</section>
`;
};




const announcementsData = [
  {
    id: 101,
    date: "2025-11-28",
    title: "Annual Milad-un-Nabi Conference 2025",
    excerpt: "Join us for an evening of reflection, celebration, and spiritual renewal.",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1600&h=900&fit=crop",
    category: "Event",
    featured: true,
    openingTitle: "Official Announcement",
    opening: "We are delighted to announce our flagship annual program in celebration of the birth of the Prophet Muhammad (peace be upon him). This year marks the 34th edition of our historic gathering.",
    bodyTitle: "Event Highlights",
    body: `
      <p>Join over 5,000 attendees for a night featuring Qur’an recitation, scholarly talks, and nasheeds.</p>
      <p><strong>Guest Speaker:</strong> Dr. Ismail Londt (South Africa)</p>
      <p><strong>Special Performance:</strong> Al-Firqah An-Nasheed (Egypt)</p>
      <p><strong>Date:</strong> Friday, 12th Rabi-ul-Awwal • <strong>Time:</strong> After Maghrib</p>
      <p>Separate seating arrangements for families. Dinner will be served.</p>
    `,
    urduTranslation: `
      <p>دار العلوم بلالیہ کی جانب سے تمام احباب کو خوشی ہے کہ حضور نبی اکرم صلی اللہ علیہ وسلم کی ولادت باسعادت کے موقع پر سالانہ پروگرام منعقد کیا جا رہا ہے۔ یہ ہمارا ۳۴ واں سالانہ پروگرام ہے۔</p>
      <p>مہمانِ خصوصی: ڈاکٹر اسماعیل لنڈٹ (جنوبی افریقہ)</p>
      <p>نعت خوانی: الفرقہ النشیڈ (مصر)</p>
      <p class="text-2xl font-bold mt-8">جمعہ • ۱۲ ربیع الاول • مغرب کے بعد</p>
    `
  },

  {
    id: 102,
    date: "2025-11-15",
    title: "Admissions Open – Academic Year 1447 AH",
    excerpt: "Applications now open for Dars-e-Nizami and Hifz-ul-Qur’an programs.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=900&fit=crop",
    category: "Admissions",
    featured: true,
    openingTitle: "New Session Announcement",
    opening: "Darul Uloom Bilaliya is pleased to announce admissions for the upcoming academic year 1447 AH. We continue our tradition of excellence in classical Islamic scholarship.",
    bodyTitle: "Programs & Eligibility",
    body: `
      <p><strong>Available Programs:</strong></p>
      <ul class="list-disc ml-8 space-y-2">
        <li>Dars-e-Nizami (8-year Alim course)</li>
        <li>Hifz-ul-Qur’an with Nazira</li>
        <li>Tajweed & Qira’at Intensive</li>
      </ul>
      <p class="mt-6"><strong>Last date to apply:</strong> 30th December 2025</p>
      <p><strong>Entrance Test & Interview:</strong> 10–12 January 2026</p>
      <p>Full residential facility with meals and accommodation provided.</p>
    `,
    urduTranslation: `
      <p>دار العلوم بلالیہ میں ۱۴۴۷ ہجری کا نیا تعلیمی سیشن شروع ہونے جا رہا ہے۔ درس نظامی، حفظ القرآن اور تجوید کے کورسز کے لیے داخلہ شروع۔</p>
      <p>آخری تاریخ: ۳۰ دسمبر ۲۰۲۵</p>
      <p>امتحان و انٹرویو: ۱۰ سے ۱۲ جنوری ۲۰۲۶</p>
      <p class="text-2xl font-bold mt-8">مکمل رہائش و طعام مفت</p>
    `
  },

  {
    id: 103,
    date: "2025-10-20",
    title: "42 Students Complete Hifz-ul-Qur’an – Historic Achievement",
    excerpt: "Largest graduating batch in institutional history.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=900&fit=crop",
    category: "Achievement",
    featured: true,
    openingTitle: "Graduation Milestone",
    opening: "Alhamdulillah, we are proud to announce that 42 students have successfully completed memorization of the entire Qur’an this year — the largest batch in our 34-year history.",
    bodyTitle: "Celebration Ceremony",
    body: `
      <p>The graduation ceremony will be held on 25th October 2025 at the main campus.</p>
      <p><strong>Chief Guest:</strong> Shaykh Muhammad al-Yaqoubi (Syria)</p>
      <p>Parents and well-wishers are cordially invited to attend and witness this blessed moment.</p>
      <p>Each graduate will receive a Sanad-e-Hifz certified by senior scholars.</p>
    `,
    urduTranslation: `
      <p>الحمد للہ! اس سال ۴۲ طلباء نے پورا قرآن کریم حفظ کیا — یہ ہماری ۳۴ سالہ تاریخ کا سب سے بڑا بیچ ہے۔</p>
      <p>تقریب: ۲۵ اکتوبر ۲۰۲۵</p>
      <p>مہمانِ خصوصی: شیخ محمد الیعقوبی (شام)</p>
      <p class="text-2xl font-bold mt-8">والدین کو خصوصی دعوت</p>
    `
  },

  {
    id: 104,
    date: "2025-10-05",
    title: "New Academic Block Inauguration",
    excerpt: "State-of-the-art facility for 300 additional students.",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=1600&h=900&fit=crop",
    category: "Development",
    featured: false,
    openingTitle: "Infrastructure Milestone",
    opening: "We are delighted to announce the completion and upcoming inauguration of our new academic block, made possible through community support.",
    bodyTitle: "Facility Features",
    body: `
      <p>The new building includes:</p>
      <ul class="list-disc ml-8 space-y-2">
        <li>20 modern classrooms with digital boards</li>
        <li>Expanded library with 15,000+ volumes</li>
        <li>Dedicated research wing for senior students</li>
        <li>Solar-powered sustainable design</li>
      </ul>
      <p>Inauguration ceremony: 15th November 2025</p>
    `,
    urduTranslation: `
      <p>نیا تعلیمی بلاک مکمل! ۳۰۰ مزید طلباء کے لیے جدید سہولیات۔</p>
      <p>افتتاح: ۱۵ نومبر ۲۰۲۵</p>
      <p class="text-2xl font-bold mt-8">آپ کی دعائیں اور تعاون کا شکریہ</p>
    `
  },

  {
    id: 105,
    date: "2025-09-28",
    title: "Fundraising Success: ₹18.4 Lakh Raised",
    excerpt: "Community achieves target for new hostel wing in record time.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&h=900&fit=crop",
    category: "Fundraising",
    featured: true,
    openingTitle: "Community Achievement",
    opening: "Jazakumullahu khairan! Through your overwhelming generosity, we have successfully raised ₹18.4 lakh for the new hostel wing in just 40 days.",
    bodyTitle: "Next Steps",
    body: `
      <p>Construction begins: 1st December 2025</p>
      <p>Expected completion: October 2026</p>
      <p>Capacity: 120 additional residential students</p>
      <p>All donors will be recognized on the permanent plaque at the new facility.</p>
    `,
    urduTranslation: `
      <p>الحمد للہ! صرف ۴۰ دنوں میں ۱۸.۴ لاکھ روپے اکٹھے — نیا ہاسٹل بلڈنگ کا ہدف پورا!</p>
      <p>تعمیر شروع: ۱ دسمبر ۲۰۲۵</p>
      <p class="text-2xl font-bold mt-8">آپ سب کے تعاون کا شکریہ</p>
    `
  },

  {
    id: 106,
    date: "2025-08-10",
    title: "International Scholar Visit: Shaykh Yahya Rhodus",
    excerpt: "Two-day intensive program on spiritual excellence.",
    image: "https://images.pexels.com/photos/8197203/pexels-photo-8197203.jpeg?w=1600&h=900&fit=crop",
    category: "Guest Lecture",
    featured: false,
    openingTitle: "Special Program Announcement",
    opening: "We are honored to host Shaykh Yahya Rhodus (USA) for an exclusive two-day intensive on purification of the heart and spiritual excellence.",
    bodyTitle: "Program Schedule",
    body: `
      <p><strong>Day 1:</strong> The Diseases of the Heart & Their Cure</p>
      <p><strong>Day 2:</strong> Living the Prophetic Character</p>
      <p>Date: 22–23 September 2025</p>
      <p>Open to public • Registration required</p>
    `,
    urduTranslation: `
      <p>شیخ یحییٰ رھوڈس (امریکہ) کا دو روزہ خصوصی پروگرام</p>
      <p>موضوع: امراض and اصلاح قلب</p>
      <p>۲۲–۲۳ ستمبر ۲۰۲۵</p>
      <p class="text-2xl font-bold mt-8">رجسٹریشن لازمی</p>
    `
  },

  {
    id: 107,
    date: "2025-07-01",
    title: "Summer Arabic Intensive 2025",
    excerpt: "40-day immersive program for youth aged 15–25.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&h=900&fit=crop",
    category: "Education",
    featured: false,
    openingTitle: "Youth Program",
    opening: "Registration now open for our renowned 40-day Summer Arabic & Tafsir Intensive — designed to transform your relationship with the Qur’an.",
    bodyTitle: "Program Details",
    body: `
      <p>Daily classes in Arabic grammar, conversation, and Tafsir</p>
      <p>Native-speaking instructors from Egypt and Jordan</p>
      <p>Starts: 10th August 2025</p>
      <p>Limited to 60 participants</p>
      <p>Free accommodation and meals</p>
    `,
    urduTranslation: `
      <p>۴٠ روزہ سمر عربی انٹنسو کورس — ۱۵ سے ۲۵ سال تک نوجوانوں کے لیے</p>
      <p>مصر و اردن کے اساتذہ • مکمل رہائش و طعام مفت</p>
      <p class="text-2xl font-bold mt-8">۱۰ اگست ۲۰۲۵ سے آغاز</p>
    `
  },

  {
    id: 108,
    date: "2025-06-15",
    title: "Eid-ul-Adha Qurbani Service 1446 AH",
    excerpt: "Book your Qurbani share before 5th Dhul-Hijjah.",
    image: "https://images.unsplash.com/photo-1594737628895-7b1a2b5f9e7a?w=1600&h=900&fit=crop",
    category: "Service",
    featured: false,
    openingTitle: "Qurbani Registration",
    opening: "Our annual Qurbani service ensures your sacrifice is performed according to Sunnah with full transparency and distribution to the needy.",
    bodyTitle: "How It Works",
    body: `
      <p>Shares available: Goat (₹18,000) • Cow (1/7 share ₹22,000)</p>
      <p>Meat distributed to orphans, widows, and poor families</p>
      <p>Video confirmation available upon request</p>
      <p>Last date: 5th Dhul-Hijjah</p>
    `,
    urduTranslation: `
      <p>قربانی کا اہتمام — سنت کے مطابق ذبح و تقسیم</p>
      <p>بکرا: ۱۸,۰۰۰ روپے • گائے (حصہ): ۲۲,۰۰۰ روپے</p>
      <p class="text-2xl font-bold mt-8">۵ ذوالحجہ آخری تاریخ</p>
    `
  }
];


const newsTable = () => {

  // Use the global announcementsData array
  const rows = announcementsData
    .slice(0, 7)
    .map(
      (n) => `
        <tr 
            onclick="window.location='/anounce?id=${n.id}'" 
            class="border-b ${colors.neutral.border} hover:bg-gray-100 transition-colors">
          
          <!-- Date -->
          <td class="py-4 px-4 text-sm font-semibold whitespace-nowrap ${colors.primary.base}">
            ${n.date}
          </td>

          <!-- Title -->
          <td class="py-4 px-4 text-base font-bold ${colors.black.base}">
            ${n.title}
          </td>


          <!-- Read → -->
          <td class="py-4 px-4 text-right">
            <p
              class="font-semibold text-green-700 hover:text-green-900 transition-colors inline-flex items-center gap-1"
            >
              Read
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </p>
          </td>

        </tr>
      `
    )
    .join("");

    return `
<section class="py-28 ${colors.neutral.bg}">
  <div class="container mx-auto px-6 max-w-6xl">

    <!-- Section Title -->
    <h2 
      class="
        text-5xl md:text-6xl font-black text-center leading-tight 
        mb-16 tracking-tight ${colors.black.base}
      "
    >
      Latest News & Announcements
    </h2>

    <!-- Table Wrapper -->
    <div class="bg-white rounded-3xl shadow-2xl border ${colors.neutral.border} overflow-hidden">
      <table class="w-full table-auto">

        <!-- Header -->
        <thead class="bg-gray-100">
          <tr class="text-left font-semibold text-gray-800">
            <th class="py-5 px-6 w-40 text-lg">Date</th>
            <th class="py-5 px-6 text-lg">Title</th>
            <th class="py-5 px-6 w-32 text-right text-lg">Action</th>
          </tr>
        </thead>

        <!-- Rows -->
        <tbody>
          ${rows}
        </tbody>

      </table>
    </div>

    <!-- Read All Button -->
    <div class="text-center mt-16">
      <a 
        href="/anounce"
        class="
          inline-block px-10 py-5 rounded-2xl font-extrabold text-white 
          bg-emerald-600 hover:bg-emerald-700 
          shadow-lg hover:shadow-2xl 
          transition-all duration-300 text-lg
        "
      >
        Read All Announcements
      </a>
    </div>

  </div>
</section>
`;

        /*
  return `
<section class="py-20 ${colors.neutral.bg}">
  <div class="container mx-auto px-4 max-w-7xl">

    <!-- Section Title -->
    <h2 
      class="
        text-4xl md:text-5xl font-black text-center 
        mb-12 tracking-tight ${colors.black.base}
      "
    >
      Latest News & Announcements
    </h2>

    <!-- Table Wrapper -->
    <div class="bg-white rounded-3xl shadow-xl border ${colors.neutral.border} overflow-hidden">
      <table class="w-full table-auto">
        
        <!-- Header -->
        <thead class="bg-gray-100">
          <tr class="text-left font-semibold text-gray-700">
            <th class="py-4 px-4 w-40">Date</th>
            <th class="py-4 px-4">Title</th>
            <th class="py-4 px-4 w-28 text-right">Action</th>
          </tr>
        </thead>

        <!-- Rows -->
        <tbody>
          ${rows}
        </tbody>

      </table>
    </div>

    <!-- Read All Button -->
    <div class="text-center mt-12">
      <a 
        href="/anounce"
        class="
          inline-block px-8 py-4 rounded-2xl font-bold text-white 
          bg-emerald-600 hover:bg-emerald-700 
          shadow-lg hover:shadow-2xl 
          transition-all duration-300
        "
      >
        Read All Announcements
      </a>
    </div>

  </div>
</section>
`;
        */
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

const latestLectures = () => {
  const data = {
    title: "Latest Lectures",
    subtitle: "Listen and watch recent sermons and lessons.",
    videos: [
      { title: "Tafseer Surah Al-Kahf", author: "Sheikh Abdullah", img: "https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg", href: "https://youtu.be/9pXHDZkYHPs?si=YiLIoEsYron2n2Q5" },
      { title: "Preparation for Ramadan", author: "Mufti Ahmed", img: "https://images.pexels.com/photos/7651067/pexels-photo-7651067.jpeg", href: "https://youtu.be/pkw_Hl3qXCs?si=nPsoZPAycuBDQNT4" }
    ],
    audios: [
      { title: "Jummah Khutbah: Truthfulness", date: "April 12, 2024", img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg", href: "https://ia803406.us.archive.org/21/items/DoraemonMovieSongs/05.%20%E6%AD%A6%E7%94%B0%E9%89%84%E7%9F%A2%E4%B8%80%E5%BA%A7%20-%20%E5%A4%A2%E3%81%AE%E4%BA%BA%20%281994%E5%B9%B4%20%E3%83%89%E3%83%A9%E3%81%88%E3%82%82%E3%82%93%20%E3%81%AE%E3%81%B3%E5%A4%AA%E3%81%A8%E5%A4%A2%E5%B9%BB%E4%B8%89%E5%89%A3%E5%A3%AB%29.mp3"},
      { title: "Rights of Parents", date: "March 05, 2024", img: "https://images.pexels.com/photos/374897/pexels-photo-374897.jpeg", href: "/audio/lecture2.mp3" }
    ]
  };

  const card = "flex flex-col sm:flex-row gap-5 bg-white rounded-3xl border p-6 shadow-lg hover:shadow-xl transition-shadow";
  const thumb = "w-full sm:w-36 h-36 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100";
  const thumbImg = "w-full h-full object-cover";

  const createVideoCard = (v) => `
    <article class="${card}">
      <div class="${thumb}">
        <img src="${v.img}" loading="lazy" alt="${v.title}" class="${thumbImg}">
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h4 class="text-xl font-bold">${v.title}</h4>
          <p class="text-sm text-gray-600">By ${v.author}</p>
        </div>
        <button data-url="${v.href}" data-type="video" class="text-green-700 font-semibold mt-3 hover:underline text-left popup-btn">
          Watch on YouTube →
        </button>
      </div>
    </article>
  `;

  const createAudioCard = (a) => `
    <article class="${card}">
      <div class="${thumb} flex items-center justify-center text-4xl text-green-700 bg-green-50">🎧</div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <h4 class="text-xl font-bold">${a.title}</h4>
          <p class="text-sm text-gray-600">${a.date}</p>
        </div>
        <button data-url="${a.href}" data-type="audio" class="text-green-700 font-semibold mt-3 hover:underline text-left popup-btn">
          Listen Now →
        </button>
      </div>
    </article>
  `;

  const videoHTML = data.videos.slice(0, 3).map(createVideoCard).join("");
  const audioHTML = data.audios.slice(0, 3).map(createAudioCard).join("");

  // Return premium section HTML
  return `
<section class="py-28 bg-gray-50">
  <div class="container mx-auto px-6 max-w-7xl">
    <div class="text-center mb-20">
      <h2 class="text-5xl md:text-6xl font-black tracking-tight">${data.title}</h2>
      <p class="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">${data.subtitle}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h3 class="text-3xl font-bold text-green-700 mb-8 flex items-center gap-2">▶ Video Library</h3>
        <div class="flex flex-col gap-8">${videoHTML}</div>
        <a href="/video-library" class="inline-block mt-10 text-green-700 font-bold hover:underline text-lg">Browse all Videos →</a>
      </div>
      <div>
        <h3 class="text-3xl font-bold text-green-700 mb-8 flex items-center gap-2">🎧 Audio Library</h3>
        <div class="flex flex-col gap-8">${audioHTML}</div>
        <a href="/audio" class="inline-block mt-10 text-green-700 font-bold hover:underline text-lg">Browse all Audio →</a>
      </div>
    </div>
  </div>
</section>
  `;
};
;



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
        link: { href: "/multimedia", text: "View Full Gallery" }
    };

    const imagesHTML = data.images.map(image => `
        <div class="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-500">
            <img 
                src="${image.src}" 
                alt="${image.alt}" 
                class="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
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
    safeInject(wrapFade(hero()), root);
    safeInject(wrapFade(welcome()), root);
    // safeInject(wrapFade(quickLinks()), root);
    safeInject(wrapFade(newsTable()), root);
    // safeInject(wrapFade(audioSpotlight()), root);
    safeInject(wrapFade(latestLectures()), root);
    // safeInject(wrapFade(gallery()), root);
    safeInject(wrapFade(footer()), root);

    initScrollFade();

    // Toggle mobile menu
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    });
};


