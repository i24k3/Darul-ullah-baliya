"use strict";

export const header = () => {
  const logo = {
    path: "/",
    src: "https://cdn-icons-png.flaticon.com/128/17517/17517807.png",
    alt: "Darul Uloom Bilaliya",
    arabicName: "دار العلوم بلالية",
    englishName: "Darul Uloom Bilaliya"
  };

  const navLinks = [
    { href: "/about", text: "About" },
    { href: "/academics", text: "Academics" },
    { href: "/admissions", text: "Admissions" },
    { href: "/anounce", text: "Announcements" },
    { href: "/contact", text: "Contact" }
  ];

  const ctaButton = { href: "/support", text: "Support Us" };

  const navItemsDesktop = navLinks.map(link => `<li><a href="${link.href}" 
    class="text-base font-medium text-gray-800 hover:text-black 
    transition-colors duration-300">${link.text}</a></li>`).join("");

  const navItemsMobile = navLinks.map(link => `<li><a href="${link.href}" 
    class="block text-lg text-gray-800 hover:text-black transition-colors 
    duration-300">${link.text}</a></li>`).join("");

  // Precompute CTA buttons
  const ctaDesktop = `<li><a href="${ctaButton.href}" 
    class="transition transform font-semibold rounded-lg shadow-sm 
    hover:shadow-md duration-300 text-white bg-emerald-600 hover:bg-emerald-700 
    px-6 py-3 hover:-translate-y-0.5 font-semibold">${ctaButton.text}</a></li>`;

  const ctaMobile = `<li class="pt-4"><a href="${ctaButton.href}" 
    class="block w-full transition transform font-semibold rounded-lg 
    shadow-sm hover:shadow-md duration-300 text-white bg-emerald-600 
    hover:bg-emerald-700 py-4 text-lg rounded-lg">${ctaButton.text}</a></li>`;

  return `
<header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-20">
    
    <!-- Logo -->
    <a href="${logo.path}" class="flex items-center gap-3 sm:gap-4 flex-shrink-0">
      <img src="${logo.src}" alt="${logo.alt}" class="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-lg shadow-sm">
      <div class="text-left leading-tight">
        <h1 class="text-lg sm:text-xl md:text-2xl font-bold text-black tracking-wide leading-none">${logo.arabicName}</h1>
        <p class="text-xs sm:text-sm md:text-base text-gray-500 font-medium leading-none mt-1">${logo.englishName}</p>
      </div>
    </a>

    <!-- Desktop Nav -->
    <nav class="hidden lg:block">
      <ul class="flex items-center gap-8 xl:gap-10">
        ${navItemsDesktop}
        ${ctaDesktop}
      </ul>
    </nav>

    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn lg:hidden text-black p-2 -mr-2" aria-label="Open menu">
      <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu hidden lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-md">
    <div class="px-6 py-8">
      <ul class="space-y-6 text-center">
        ${navItemsMobile}
        ${ctaMobile}
      </ul>
    </div>
  </div>
</header>
  `;
};

