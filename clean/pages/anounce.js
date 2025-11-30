"use strict";
import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { newsCard } from "../components/newsCard.js";
import { safeInject } from "../utils.js";
import { readAnounce } from "../components/readAnounce.js";

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

const renderList = () => {

    announcementsData.sort((a, b) => new Date(b.date) - new Date(a.date));
    const cardsHTML = announcementsData.map(item => newsCard(item, item.id)).join('');

    /*
    let cards= "";
    announcementsData.forEach((anouncment, index) => {
        const id = anouncment.id || index + 1;
        cards+= newsCard(anouncment, id);
    });
    */

    return `
        <main class="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
            <div class="max-w-7xl mx-auto px-6 text-center">
                <h1 class="text-5xl md:text-6xl font-bold">Latest News & Announcements</h1>
                <p class="text-xl text-gray-600 mt-4">Stay updated with Darul Uloom Bilaliya</p>
                <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">${cardsHTML}</div>
            </div>
        </main>
    `;
};

export const anounce = () => {
    const root = document.getElementById("root");
    root.innerHTML = "";

    safeInject(header(), root);

    const params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    console.log(id);

    if (!id) safeInject(renderList(), root);
    else {
        const post = announcementsData.find(postItem => postItem.id === parseInt(id));
        safeInject(readAnounce(post), root);
    }

    safeInject(footer(), root);
    
    // Toggle mobile menu
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    });
};

