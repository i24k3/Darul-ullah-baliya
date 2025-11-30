/*
"use strict";

export const header = () => {
    const headerData = {
        logo: {
            path:"/",
            src: "https://cdn-icons-png.flaticon.com/128/17517/17517807.png",
            alt: "Darul Uloom Bilaliya Logo",
            arabicName: "دار العلوم بلالیہ",
            englishName: "Darul Uloom Bilaliya"
        },
        navLinks: [
            { href: "/about", text: "About Us" },
            { href: "/academics", text: "Academics" },
            { href: "/admissions", text: "Admissions" },
            { href: "/contact", text: "Contact" }
        ],
        ctaButton: {
            href: "/support",
            text: "Support Us"
        }
    };

    const renderNavItems = (size = "desktop") => {
        const textSize = size === "mobile" ? "text-xl" : "text-base font-medium";
        return headerData.navLinks
            .map(link => `
                <li>
                    <a href="${link.href}"
                       class="${size === 'mobile' ? 'block' : ''} ${textSize} text-gray-200 hover:text-green-400 transition">
                        ${link.text}
                    </a>
                </li>
            `)
            .join('');
    };

    const renderCTAButton = (size = "desktop") => {
        const baseClasses = "transition font-bold rounded-lg shadow-lg";
        const desktopClasses = "bg-green-600 hover:bg-green-700 text-white px-6 py-3 hover:shadow-green-600/40 transform hover:scale-105";
        const mobileClasses = "block w-full bg-green-600 hover:bg-green-700 text-white py-4 text-xl";

        return `
            <li ${size === "mobile" ? 'class="pt-4"' : ''}>
                <a href="${headerData.ctaButton.href}"
                   class="${baseClasses} ${size === 'mobile' ? mobileClasses : desktopClasses}">
                    ${headerData.ctaButton.text}
                </a>
            </li>
        `;
    };

    return `
<header class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="flex items-center justify-between h-20">
            <!-- Logo Section -->

            <a href="${headerData.logo.path}">
            <div class="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                <img
                    src="${headerData.logo.src}"
                    alt="${headerData.logo.alt}"
                    class="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-lg shadow-lg flex-shrink-0"
                >
                <div class="text-right leading-tight">
                    <h1 class="text-lg sm:text-xl md:text-2xl font-bold font-arabic text-green-400 tracking-wide leading-none">
                        ${headerData.logo.arabicName}
                    </h1>
                    <p class="text-xs sm:text-sm md:text-base text-gray-300 font-medium leading-none mt-1">
                        ${headerData.logo.englishName}
                    </p>
                </div>
            </div>
                </a>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:block">
                <ul class="flex items-center gap-8 xl:gap-10">
                    ${renderNavItems("desktop")}
                    ${renderCTAButton("desktop")}
                </ul>
            </nav>

            <!-- Mobile Menu Button -->
            <button
                class="mobile-menu-btn lg:hidden text-white p-2 -mr-2"
                aria-label="Open menu"
            >
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu hidden lg:hidden bg-gray-900/98 backdrop-blur-lg border-t border-gray-800">
        <div class="px-6 py-8">
            <ul class="space-y-6 text-center">
                ${renderNavItems("mobile")}
                ${renderCTAButton("mobile")}
            </ul>
        </div>
    </div>
</header>

<script>
    // Auto-attach mobile menu toggle
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.mobile-menu-btn');
        if (btn) {
            document.querySelector('.mobile-menu').classList.toggle('hidden');
        }
    });
</script>
    `;
};

*/
export const header = () => {
  const headerData = {
    logo: {
      path: "/",
      src: "https://cdn-icons-png.flaticon.com/128/17517/17517807.png", // Replace with real logo later
      alt: "Darul Uloom Bilaliya",
      arabicName: "دار العلوم بلالية",
      englishName: "Darul Uloom Bilaliya"
    },
    navLinks: [
      { href: "/about", text: "About" },
      { href: "/academics", text: "Academics" },
      { href: "/admissions", text: "Admissions" },
      { href: "/anounce", text: "Announcements" },
      { href: "/contact", text: "Contact" }
    ],
    ctaButton: {
      href: "/support",
      text: "Support Us"
    }
  };

  const renderNavItems = (size = "desktop") => {
    const baseClasses = size === "mobile" 
      ? "block py-4 text-2xl font-medium" 
      : "text-base font-medium tracking-wide";

    return headerData.navLinks
      .map(link => `
        <li>
          <a href="${link.href}"
             class="${baseClasses} text-gray-300 hover:text-white transition relative
                    after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                    after:bg-white after:transition-all after:duration-300 
                    hover:after:w-full">
            ${link.text}
          </a>
        </li>
      `).join('');
  };
