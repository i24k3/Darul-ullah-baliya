"use strict";
import { colors } from "../colors.js";

export const readAnounce = (post) => {
  if (!post) {
    return `
      <main class="min-h-screen ${colors.neutral.bg} flex items-center justify-center pt-20">
        <div class="text-center max-w-2xl px-6">

          <h1 class="text-7xl sm:text-9xl font-black ${colors.black.base} mb-4 tracking-tighter">
            404
          </h1>

          <p class="text-xl sm:text-2xl ${colors.neutral.medium} mb-10">
            Page not found
          </p>

          <a href="/anounce" onclick="event.preventDefault(); goTo('/anounce');"
             class="inline-flex items-center gap-4 px-8 py-4 sm:px-10 sm:py-5 
             ${colors.black.bg} ${colors.white.base} text-base sm:text-lg font-semibold 
             rounded-full shadow-xl hover:bg-black/80 transition-all hover:-translate-y-0.5 hover:shadow-2xl">

            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
            </svg>

            Back to Announcements
          </a>

        </div>
      </main>
    `;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return `
    <div class="min-h-screen ${colors.neutral.bg}">
      
      <div class="container mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-12 sm:pb-16 max-w-5xl">
        
        <div class="${colors.white.bg} rounded-3xl shadow-2xl overflow-hidden border ${colors.neutral.border}">
          
          <!-- HEADER -->
          <div class="px-6 sm:px-12 pt-12 sm:pt-16 pb-10 sm:pb-12 ${colors.white.bg} border-b ${colors.neutral.border}">

            <!-- Back Link -->
            <a href="/anounce" onclick="event.preventDefault(); goTo('/anounce');"
               class="inline-flex items-center gap-3 ${colors.neutral.medium} hover:${colors.black.base} font-medium 
               text-base sm:text-lg mb-8 sm:mb-10 transition group">

              <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
              </svg>

              All Announcements
            </a>

            <!-- Badges -->
            <div class="flex flex-wrap items-center gap-3 sm:gap-5 mb-6">

              ${post.featured ? `
                <span class="px-4 py-2 ${colors.secondary.bg} ${colors.white.base} rounded-full 
                text-xs font-bold tracking-wider uppercase shadow-sm">
                  Featured
                </span>` 
              : ""}

              <span class="px-5 py-2 bg-neutral-100 ${colors.neutral.dark} rounded-full text-xs sm:text-sm 
              font-semibold tracking-wider uppercase border ${colors.neutral.border}">
                ${post.category || "Update"}
              </span>

            </div>

            <!-- Title -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black ${colors.black.base} leading-tight">
              ${post.title}
            </h1>

            <!-- Meta -->
            <div class="flex flex-wrap items-center gap-6 sm:gap-8 mt-8 ${colors.neutral.medium} text-base sm:text-lg">

              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span class="font-medium">${formattedDate}</span>
              </div>

              ${post.author ? `
                <div class="flex items-center gap-3">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <span>${post.author}</span>
                </div>` 
              : ""}

            </div>
          </div>

          <!-- FEATURED IMAGE -->
          <div class="px-6 sm:px-12 py-8 sm:py-12">
            <div class="rounded-2xl overflow-hidden shadow-xl border ${colors.neutral.border}">
              <img src="${post.image}" alt="${post.title}"
                   class="w-full h-64 sm:h-80 md:h-96 lg:h-[560px] object-cover">
            </div>
          </div>

          <!-- BODY CONTENT -->
          <div class="px-6 sm:px-12 pb-16 sm:pb-20 pt-8 sm:pt-10 
          max-w-4xl mx-auto space-y-16 sm:space-y-20">

            <!-- Opening -->
            <section>
              <h2 class="text-3xl sm:text-4xl font-bold ${colors.black.base} mb-6 
              border-l-8 border-emerald-600 pl-4 sm:pl-6">
                ${post.openingTitle || "Announcement"}
              </h2>

              <p class="text-lg sm:text-xl leading-relaxed ${colors.neutral.dark}">
                ${post.opening || post.excerpt || 
                  "We are pleased to share this important update with our community and stakeholders."}
              </p>
            </section>

            <!-- Main Body -->
            <section>
              <h2 class="text-3xl sm:text-4xl font-bold ${colors.black.base} mb-6 
              border-l-8 border-emerald-600 pl-4 sm:pl-6">
                ${post.bodyTitle || "Details"}
              </h2>

              <div class="prose prose-lg max-w-none ${colors.neutral.dark} leading-loose text-justify 
              space-y-6 text-base sm:text-lg">
                ${post.body || post.fullContent || `
                  <p>This initiative reflects our continued commitment to excellence, education, and community development.</p>
                  <p>We extend our gratitude to all supporters and participants who make such milestones possible.</p>
                `}
              </div>
            </section>

            <!-- URDU SECTION -->
            <section class="${colors.neutral.bg} rounded-3xl p-8 sm:p-12 
            border-l-8 border-emerald-600 shadow-inner">

              <h2 class="text-3xl sm:text-4xl font-bold ${colors.black.base} 
              mb-8 sm:mb-10 text-right font-urdu">
                اردو ترجمہ
              </h2>

              <div class="text-right space-y-6 text-lg leading-loose ${colors.neutral.dark} font-urdu">
                ${post.urduTranslation || `
                  <p>الحمد للہ، دار العلوم بلالیہ کی انتظامیہ اور طلبہ کی جانب سے تمام احبابِ ملت کو خوشی ہے کہ یہ اہم اعلان پیش کیا جا رہا ہے۔</p>
                  <p>آپ کی مسلسل حمایت اور تعاون ہی ہماری کامیابی کی بنیاد ہے۔ اللہ تعالیٰ آپ کے مال و جان اور اولاد کو اپنی امان میں رکھے۔</p>
                  <p class="text-2xl font-bold mt-10 ${colors.black.base}">
                    جزاکم اللہ خیراً کثیراً<br>
                    انتظامیہ • دار العلوم بلالیہ
                  </p>
                `}
              </div>
            </section>

            <!-- SubhanAllah -->
            <div class="text-center py-12 sm:py-16 border-t ${colors.neutral.border}">
              <p class="text-3xl sm:text-4xl font-light ${colors.neutral.medium} italic tracking-widest">
                SubhanAllah
              </p>
            </div>

            <!-- FOOTER -->
            <div class="text-center pt-8 pb-12 sm:pb-16">
              <p class="${colors.neutral.medium} text-xs sm:text-sm tracking-widest uppercase">
                Darul Uloom Bilaliya • Established 1991
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  `;
};


