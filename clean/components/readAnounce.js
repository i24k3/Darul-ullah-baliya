"use strict";

export const readAnounce = (post) => {
  if (!post) {
    return `
      <main class="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <div class="text-center max-w-2xl px-6">
          <h1 class="text-9xl font-black text-gray-900 mb-4 tracking-tighter">404</h1>
          <p class="text-2xl text-gray-600 mb-10">Page not found</p>
          <a href="/anounce" onclick="event.preventDefault(); goTo('/anounce');"
             class="inline-flex items-center gap-4 px-10 py-5 bg-black text-white text-lg font-semibold rounded-full shadow-2xl hover:bg-gray-800 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/>
            </svg>
            Back to Announcements
          </a>
        </div>
      </main>
    `;
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return `
    <div class="min-h-screen bg-gray-50">

      <!-- Ultra Premium Hero Header -->
      <div class="container mx-auto px-6 pt-28 pb-16 max-w-5xl">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

          <!-- Clean, Minimal, Luxury Header -->
          <div class="px-12 pt-16 pb-12 bg-white border-b border-gray-100">
            
            <!-- Back Link - Subtle & Classy -->
            <a href="/anounce" onclick="event.preventDefault(); goTo('/anounce');"
               class="inline-flex items-center gap-3 text-gray-600 hover:text-black font-medium text-lg mb-10 transition group">
              <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
              </svg>
              All Announcements
            </a>

            <!-- Category + Featured Badge -->
            <div class="flex items-center gap-5 mb-6">
              ${post.featured ? `
                <span class="px-5 py-2 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider uppercase">
                  Featured
                </span>
              ` : ''}
              <span class="px-6 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold tracking-wider uppercase">
                ${post.category || 'Update'}
              </span>
            </div>

            <!-- Title - Pure Elegance -->
            <h1 class="text-5xl md:text-7xl font-black text-gray-900 leading-tight max-w-5xl">
              ${post.title}
            </h1>

            <!-- Meta - Minimal -->
            <div class="flex items-center gap-8 mt-10 text-gray-600 text-lg">
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span class="font-medium">${formattedDate}</span>
              </div>
              ${post.author ? `
                <div class="flex items-center gap-3">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  <span>${post.author}</span>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Image - Perfectly Sized, Framed -->
          <div class="px-12 py-12">
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img src="${post.image}" alt="${post.title}"
                   class="w-full h-96 md:h-[560px] object-cover">
            </div>
          </div>

          <!-- Content Body - Clean, Spacious, Professional -->
          <div class="px-12 pb-20 pt-10 max-w-4xl mx-auto space-y-20">

            <!-- Opening -->
            <section>
              <h2 class="text-4xl font-bold text-gray-900 mb-8 border-l-8 border-gray-900 pl-6">
                ${post.openingTitle || "Announcement"}
              </h2>
              <p class="text-xl leading-relaxed text-gray-700">
                ${post.opening || post.excerpt || "We are pleased to share this important update with our community and stakeholders."}
              </p>
            </section>

            <!-- Main Body -->
            <section>
              <h2 class="text-4xl font-bold text-gray-900 mb-8 border-l-8 border-gray-900 pl-6">
                ${post.bodyTitle || "Details"}
              </h2>
              <div class="prose prose-lg max-w-none text-gray-700 leading-loose text-justify space-y-6">
                ${post.body || post.fullContent || `
                  <p>This initiative reflects our continued commitment to excellence, education, and community development.</p>
                  <p>We extend our gratitude to all supporters and participants who make such milestones possible.</p>
                `}
              </div>
            </section>

            <!-- Urdu Translation Section - Premium & Respectful -->
            <section class="bg-gray-50 rounded-3xl p-12 border-l-8 border-gray-900">
              <h2 class="text-4xl font-bold text-gray-900 mb-10 text-right font-urdu">
                اردو ترجمہ
              </h2>
              <div class="text-right space-y-6 text-lg leading-loose text-gray-800 font-urdu">
                ${post.urduTranslation || `
                  <p>الحمد للہ، دار العلوم بلالیہ کی انتظامیہ اور طلبہ کی جانب سے تمام احبابِ ملت کو خوشی ہے کہ یہ اہم اعلان پیش کیا جا رہا ہے۔</p>
                  <p>آپ کی مسلسل حمایت اور تعاون ہی ہماری کامیابی کی بنیاد ہے۔ اللہ تعالیٰ آپ کے مال و جان اور اولاد کو اپنی امان میں رکھے۔</p>
                  <p class="text-2xl font-bold mt-10 text-gray-900">
                    جزاکم اللہ خیراً کثیراً<br>
                    انتظامیہ • دار العلوم بلالیہ
                  </p>
                `}
              </div>
            </section>

            <!-- Final Touch - SubhanAllah (Hardcoded) -->
            <div class="text-center py-16 border-t border-gray-200">
              <p class="text-4xl font-light text-gray-500 italic tracking-widest">
                SubhanAllah
              </p>
            </div>

            <!-- Share Buttons - Minimal Luxury -->
            <div class="flex justify-center gap-6 pt-10">
              <button onclick="navigator.share?.({title:'${post.title}', url:location.href})"
                      class="p-4 bg-black text-white rounded-full shadow-xl hover:scale-110 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10-.895 1.789l-4.94-2.47a3.027 3 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                </svg>
              </button>
              <a href="https://wa.me/?text=${encodeURIComponent(post.title + ' — ' + location.href)}" target="_blank"
                 class="p-4 bg-gray-800 text-white rounded-full shadow-xl hover:scale-110 transition">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.951.951-3.741-.214-.361a9.86 9.86 0 01-1.378-5.031 10 10 0 0115.621 8.058 9.997 9.997 0 01-2.843 5.845z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Footer Line -->
        <div class="text-center mt-24 pb-16">
          <p class="text-gray-500 text-sm tracking-widest uppercase">
            Darul Uloom Bilaliya • Established 1991
          </p>
        </div>
      </div>
    </div>
  `;
};

